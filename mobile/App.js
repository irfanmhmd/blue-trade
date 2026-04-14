import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet, StatusBar, SafeAreaView, View, Text, TextInput,
  TouchableOpacity, ScrollView, Image, ActivityIndicator,
  Platform, Alert, KeyboardAvoidingView
} from 'react-native';
import { WebView } from 'react-native-webview';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import * as Assets from './stitch_assets/HtmlAssets';

const API_URL = 'https://blue-trade-backend.onrender.com';
const TUNNEL_HEADERS = { 'bypass-tunnel-reminder': 'true', 'Content-Type': 'application/json' };

const C = {
  bg: '#111415', surface: '#1d2021', surfaceHigh: '#272a2b',
  primary: '#00dbec', tertiary: '#88d982', error: '#ffb4ab',
  text: '#e1e3e4', textMuted: '#bdc9c8', border: '#3e4949'
};

// ─── NATIVE LOGIN (replaces HTML login to fix token issue) ────────────────────
function NativeLogin({ onLogin }) {
  const [email, setEmail] = useState('field@bluetrade.org');
  const [password, setPassword] = useState('password123');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const login = async () => {
    setLoading(true); setError('');
    try {
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), password })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Login failed');
      if (!data.token) throw new Error('No token received');
      Alert.alert('✅ Login Success', `Welcome ${data.user.name}!\nRole: ${data.user.role}`, [
        { text: 'Continue', onPress: () => onLogin(data.token, data.user) }
      ]);
    } catch(e) { setError(e.message); }
    finally { setLoading(false); }
  };

  // Use the beautiful HTML splash as background feel, native form on top
  return (
    <View style={{ flex: 1, backgroundColor: C.bg }}>
      {/* Background HTML splash */}
      <WebView
        source={{ html: Assets.splashHtml }}
        style={StyleSheet.absoluteFill}
        javaScriptEnabled={false}
        pointerEvents="none"
      />
      {/* Native login form overlay */}
      <KeyboardAvoidingView
        style={{ flex: 1, justifyContent: 'flex-end' }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={{
          backgroundColor: 'rgba(17,20,21,0.97)',
          borderTopLeftRadius: 32, borderTopRightRadius: 32,
          padding: 28, paddingBottom: 48,
          borderTopWidth: 1, borderColor: C.border
        }}>
          <Text style={{ color: C.primary, fontSize: 11, fontWeight: '700', letterSpacing: 3, marginBottom: 4 }}>
            THE AQUATIC LEDGER
          </Text>
          <Text style={{ color: C.text, fontSize: 26, fontWeight: '900', marginBottom: 24 }}>
            Secure Access
          </Text>

          <Text style={s.label}>Email</Text>
          <TextInput
            style={s.input} value={email} onChangeText={setEmail}
            placeholder="email@example.com" placeholderTextColor={C.textMuted}
            keyboardType="email-address" autoCapitalize="none"
          />

          <Text style={[s.label, { marginTop: 14 }]}>Password</Text>
          <TextInput
            style={s.input} value={password} onChangeText={setPassword}
            placeholder="••••••••" placeholderTextColor={C.textMuted}
            secureTextEntry
          />

          {!!error && (
            <View style={{ backgroundColor: C.error + '22', borderRadius: 10, padding: 10, marginTop: 10 }}>
              <Text style={{ color: C.error, fontSize: 13 }}>{error}</Text>
            </View>
          )}

          <TouchableOpacity
            style={[s.btnPrimary, { marginTop: 20 }, loading && { opacity: 0.6 }]}
            onPress={login} disabled={loading}
          >
            {loading
              ? <ActivityIndicator color={C.bg} />
              : <Text style={s.btnPrimaryText}>Sign In to Dashboard</Text>
            }
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

// ─── NATIVE UPLOAD ────────────────────────────────────────────────────────────
function UploadScreen({ token, onBack, onSuccess }) {
  const [name, setName] = useState('');
  const [ecosystem, setEcosystem] = useState('mangrove');
  const [area, setArea] = useState('');
  const [plants, setPlants] = useState('');
  const [notes, setNotes] = useState('');
  const [photo, setPhoto] = useState(null);
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [gpsLoading, setGpsLoading] = useState(false);

  const takePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') { Alert.alert('Permission needed', 'Camera permission required'); return; }
    const result = await ImagePicker.launchCameraAsync({ quality: 0.7, allowsEditing: true, aspect: [4, 3] });
    if (!result.canceled) setPhoto(result.assets[0].uri);
  };

  const pickPhoto = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') { Alert.alert('Permission needed', 'Gallery permission required'); return; }
    const result = await ImagePicker.launchImageLibraryAsync({ quality: 0.7, allowsEditing: true, aspect: [4, 3] });
    if (!result.canceled) setPhoto(result.assets[0].uri);
  };

  const getGPS = async () => {
    setGpsLoading(true);
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') { Alert.alert('Permission needed', 'Location permission required'); return; }
      const loc = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High });
      setLocation({ latitude: loc.coords.latitude, longitude: loc.coords.longitude });
    } catch(e) { Alert.alert('GPS Error', e.message); }
    finally { setGpsLoading(false); }
  };

  const submit = async () => {
    if (!name.trim()) { Alert.alert('Missing', 'Enter plantation name'); return; }
    if (!area) { Alert.alert('Missing', 'Enter area in hectares'); return; }
    if (!plants) { Alert.alert('Missing', 'Enter number of plants'); return; }
    if (!location) { Alert.alert('No GPS', 'Capture GPS location first'); return; }
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('plantationName', name.trim());
      formData.append('ecosystemType', ecosystem);
      formData.append('area', area);
      formData.append('numberOfPlants', plants);
      formData.append('latitude', String(location.latitude));
      formData.append('longitude', String(location.longitude));
      formData.append('notes', notes);
      if (photo) {
        const filename = photo.split('/').pop();
        const ext = (filename.split('.').pop() || 'jpg').toLowerCase();
        formData.append('photo', { uri: photo, name: filename, type: `image/${ext}` });
      }
      const res = await fetch(`${API_URL}/api/plantations/create`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}` },
        body: formData
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || `Error ${res.status}`);
      Alert.alert('✅ Submitted!',
        `${name}\nEstimated: ${data.plantation?.carbonEstimated || 0} tCO2 credits`,
        [
          { text: 'View History', onPress: onSuccess },
          { text: 'Add Another', onPress: () => { setName(''); setArea(''); setPlants(''); setNotes(''); setPhoto(null); setLocation(null); } }
        ]
      );
    } catch(e) { Alert.alert('Error', e.message); }
    finally { setLoading(false); }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView style={s.screen} contentContainerStyle={{ padding: 20, paddingBottom: 120 }}>
        <View style={s.header}>
          <TouchableOpacity onPress={onBack}><Text style={s.backText}>← Back</Text></TouchableOpacity>
          <Text style={s.title}>Upload Plantation</Text>
        </View>
        <View style={{ backgroundColor: token ? '#88d98222' : '#ffb4ab22', borderRadius: 8, padding: 8, marginBottom: 12, borderWidth: 1, borderColor: token ? '#88d982' : '#ffb4ab' }}>
          <Text style={{ color: token ? '#88d982' : '#ffb4ab', fontSize: 11, fontWeight: '700' }}>
            {token ? `✓ Token: ${token.substring(0,20)}...` : '✗ NO TOKEN - Go back and login'}
          </Text>
        </View>

        <View style={s.card}>
          <Text style={s.label}>Site Photo</Text>
          {photo
            ? <Image source={{ uri: photo }} style={{ width: '100%', height: 200, borderRadius: 12 }} />
            : <View style={{ width: '100%', height: 160, borderRadius: 12, backgroundColor: C.surfaceHigh, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 40 }}>📷</Text>
                <Text style={{ color: C.textMuted, marginTop: 8 }}>No photo captured</Text>
              </View>
          }
          <View style={{ flexDirection: 'row', gap: 10, marginTop: 12 }}>
            <TouchableOpacity style={[s.btn, { flex: 1 }]} onPress={takePhoto}>
              <Text style={s.btnText}>📷 Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[s.btnOutline, { flex: 1 }]} onPress={pickPhoto}>
              <Text style={s.btnOutlineText}>🖼 Gallery</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={s.card}>
          <Text style={s.label}>GPS Location</Text>
          {location
            ? <View style={{ backgroundColor: C.surfaceHigh, borderRadius: 10, padding: 12, marginBottom: 10 }}>
                <Text style={{ color: C.primary, fontWeight: '700' }}>✓ Location Captured</Text>
                <Text style={{ color: C.textMuted, fontSize: 12, marginTop: 4 }}>
                  {location.latitude.toFixed(6)}° N, {location.longitude.toFixed(6)}° E
                </Text>
              </View>
            : <Text style={{ color: C.textMuted, marginBottom: 10 }}>No location captured yet</Text>
          }
          <TouchableOpacity style={s.btn} onPress={getGPS} disabled={gpsLoading}>
            {gpsLoading ? <ActivityIndicator color={C.bg} /> : <Text style={s.btnText}>📍 Get GPS Location</Text>}
          </TouchableOpacity>
        </View>

        <View style={s.card}>
          <Text style={s.label}>Plantation Name *</Text>
          <TextInput style={s.input} value={name} onChangeText={setName}
            placeholder="e.g. Mangrove Delta Alpha" placeholderTextColor={C.textMuted} />

          <Text style={[s.label, { marginTop: 16 }]}>Ecosystem Type *</Text>
          <View style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap' }}>
            {['mangrove', 'seagrass', 'salt_marsh'].map(e => (
              <TouchableOpacity key={e} onPress={() => setEcosystem(e)}
                style={[s.chip, ecosystem === e && s.chipActive]}>
                <Text style={[s.chipText, ecosystem === e && s.chipTextActive]}>
                  {e.replace('_', ' ')}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={[s.label, { marginTop: 16 }]}>Area (Hectares) *</Text>
          <TextInput style={s.input} value={area} onChangeText={setArea}
            placeholder="e.g. 2.5" placeholderTextColor={C.textMuted} keyboardType="decimal-pad" />

          <Text style={[s.label, { marginTop: 16 }]}>Number of Plants *</Text>
          <TextInput style={s.input} value={plants} onChangeText={setPlants}
            placeholder="e.g. 5000" placeholderTextColor={C.textMuted} keyboardType="number-pad" />

          <Text style={[s.label, { marginTop: 16 }]}>Notes</Text>
          <TextInput style={[s.input, { height: 80, textAlignVertical: 'top' }]}
            value={notes} onChangeText={setNotes}
            placeholder="Describe the site..." placeholderTextColor={C.textMuted} multiline />
        </View>

        <TouchableOpacity style={[s.btnPrimary, loading && { opacity: 0.6 }]}
          onPress={submit} disabled={loading}>
          {loading ? <ActivityIndicator color={C.bg} /> : <Text style={s.btnPrimaryText}>🌿 Submit to Blockchain</Text>}
        </TouchableOpacity>

        <TouchableOpacity style={[s.btnOutline, { marginTop: 10 }]} onPress={() => {
          Alert.alert('Debug Info',
            `Token: ${token ? token.substring(0,30)+'...' : 'NULL'}\nAPI: ${API_URL}\nUser: ${JSON.stringify(token ? 'logged in' : 'not logged in')}`
          );
        }}>
          <Text style={s.btnOutlineText}>🔍 Check Token Status</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

// ─── NATIVE HISTORY ───────────────────────────────────────────────────────────
function HistoryScreen({ token, userId, onBack }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/api/plantations/all`, { headers: { Authorization: `Bearer ${token}` } })
      .then(r => r.json())
      .then(data => {
        if (Array.isArray(data))
          setItems(data.filter(p => p.uploadedBy?._id === userId || p.uploadedBy === userId));
      }).catch(() => {}).finally(() => setLoading(false));
  }, []);

  const sc = st => st === 'approved' ? C.tertiary : st === 'rejected' ? C.error : C.primary;

  return (
    <View style={s.screen}>
      <View style={s.header}>
        <TouchableOpacity onPress={onBack}><Text style={s.backText}>← Back</Text></TouchableOpacity>
        <Text style={s.title}>My Submissions</Text>
      </View>
      {loading ? <ActivityIndicator color={C.primary} style={{ marginTop: 40 }} /> :
        items.length === 0
          ? <View style={{ alignItems: 'center', marginTop: 60 }}>
              <Text style={{ fontSize: 40 }}>🌱</Text>
              <Text style={{ color: C.textMuted, marginTop: 12 }}>No submissions yet</Text>
            </View>
          : <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 100 }}>
              {items.map(p => (
                <View key={p._id} style={[s.card, { marginBottom: 12 }]}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flex: 1 }}>
                      <Text style={{ color: C.text, fontWeight: '700', fontSize: 16 }}>{p.plantationName}</Text>
                      <Text style={{ color: C.textMuted, fontSize: 12, marginTop: 4 }}>
                        {p.ecosystemType} • {p.area} ha • {p.carbonEstimated || 0} credits
                      </Text>
                      <Text style={{ color: C.textMuted, fontSize: 11, marginTop: 4 }}>
                        {new Date(p.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </Text>
                    </View>
                    <View style={{ backgroundColor: sc(p.status) + '22', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20, alignSelf: 'flex-start' }}>
                      <Text style={{ color: sc(p.status), fontSize: 10, fontWeight: '700', textTransform: 'uppercase' }}>{p.status}</Text>
                    </View>
                  </View>
                  {p.imageUrl && <Image source={{ uri: p.imageUrl }} style={{ width: '100%', height: 120, borderRadius: 8, marginTop: 12 }} />}
                </View>
              ))}
            </ScrollView>
      }
    </View>
  );
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
export default function App() {
  const [screen, setScreen] = useState('splash');
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const webviewRef = useRef(null);

  const injectJS = (js) => {
    if (webviewRef.current) webviewRef.current.injectJavaScript(js + '; true;');
  };

  // Splash → login after 2.5s
  useEffect(() => {
    if (screen === 'splash') {
      const t = setTimeout(() => setScreen('login'), 2500);
      return () => clearTimeout(t);
    }
  }, [screen]);

  const onPageLoad = () => {
    if (screen === 'dashboard' && user) {
      injectJS(`
        const h1 = document.querySelector('h1');
        if(h1 && h1.textContent.includes('Morning')) h1.textContent = 'Morning, ${user?.name?.split(' ')[0] || 'Staff'}';
      `);
    }
    if (screen === 'profile' && user) {
      injectJS(`const h2 = document.querySelector('h2'); if(h2) h2.textContent = '${user?.name || ''}';`);
    }
  };

  const onMessage = (event) => {
    try {
      const msg = JSON.parse(event.nativeEvent.data);
      if (msg.type === 'nav') {
        const txt = (msg.text || '').toLowerCase();
        if (txt.includes('upload') || txt.includes('cloud') || txt.includes('plantation')) setScreen('upload');
        else if (txt.includes('history') || txt.includes('audit') || txt.includes('edu')) setScreen('history');
        else if (txt.includes('camera') || txt.includes('photo') || txt.includes('scan')) setScreen('upload');
        else if (txt.includes('profile') || txt.includes('account')) setScreen('profile');
        else if (txt.includes('home') || txt.includes('dashboard')) setScreen('dashboard');
        else if (txt.includes('logout') || txt.includes('sign out')) { setToken(null); setUser(null); setScreen('login'); }
      }
    } catch(e) {}
  };

  const htmlPage = () => {
    switch(screen) {
      case 'splash': return Assets.splashHtml;
      case 'dashboard': return Assets.dashboardHtml;
      case 'profile': return Assets.profileHtml;
      case 'camera': return Assets.cameraHtml;
      default: return Assets.dashboardHtml;
    }
  };

  // Native screens
  if (screen === 'splash') {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: C.bg }}>
        <StatusBar barStyle="light-content" backgroundColor={C.bg} />
        <WebView source={{ html: Assets.splashHtml }} style={{ flex: 1, backgroundColor: C.bg }}
          javaScriptEnabled={false} />
      </SafeAreaView>
    );
  }

  if (screen === 'login') {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: C.bg }}>
        <StatusBar barStyle="light-content" backgroundColor={C.bg} />
        <NativeLogin onLogin={(t, u) => { setToken(t); setUser(u); setScreen('dashboard'); }} />
      </SafeAreaView>
    );
  }

  if (screen === 'upload') {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: C.bg }}>
        <StatusBar barStyle="light-content" backgroundColor={C.bg} />
        <UploadScreen token={token} onBack={() => setScreen('dashboard')} onSuccess={() => setScreen('history')} />
      </SafeAreaView>
    );
  }

  if (screen === 'history') {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: C.bg }}>
        <StatusBar barStyle="light-content" backgroundColor={C.bg} />
        <HistoryScreen token={token} userId={user?.id} onBack={() => setScreen('dashboard')} />
      </SafeAreaView>
    );
  }

  // HTML WebView for dashboard, profile, camera
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: C.bg }}>
      <StatusBar barStyle="light-content" backgroundColor={C.bg} />
      <WebView
        ref={webviewRef}
        key={screen}
        originWhitelist={['*']}
        source={{ html: htmlPage() }}
        style={{ flex: 1, backgroundColor: C.bg }}
        onMessage={onMessage}
        onLoadEnd={onPageLoad}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        scalesPageToFit={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  screen: { flex: 1, backgroundColor: C.bg },
  header: { flexDirection: 'row', alignItems: 'center', padding: 20, paddingBottom: 12, borderBottomWidth: 1, borderBottomColor: C.border },
  title: { color: C.text, fontSize: 20, fontWeight: '700', marginLeft: 12 },
  backText: { color: C.primary, fontSize: 14, fontWeight: '700' },
  card: { backgroundColor: C.surface, borderRadius: 16, padding: 16, marginBottom: 16, borderWidth: 1, borderColor: C.border },
  label: { color: C.primary, fontSize: 11, fontWeight: '700', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 },
  input: { backgroundColor: C.surfaceHigh, borderRadius: 12, padding: 14, color: C.text, fontSize: 14, borderWidth: 1, borderColor: C.border },
  btn: { backgroundColor: C.primary, borderRadius: 12, padding: 14, alignItems: 'center' },
  btnText: { color: C.bg, fontWeight: '700', fontSize: 14 },
  btnOutline: { borderWidth: 1, borderColor: C.primary, borderRadius: 12, padding: 14, alignItems: 'center' },
  btnOutlineText: { color: C.primary, fontWeight: '700', fontSize: 14 },
  btnPrimary: { backgroundColor: C.primary, borderRadius: 16, padding: 18, alignItems: 'center', marginTop: 8 },
  btnPrimaryText: { color: C.bg, fontWeight: '700', fontSize: 16 },
  chip: { paddingHorizontal: 14, paddingVertical: 8, borderRadius: 20, borderWidth: 1, borderColor: C.border, backgroundColor: C.surfaceHigh },
  chipActive: { backgroundColor: C.primary, borderColor: C.primary },
  chipText: { color: C.textMuted, fontSize: 13, textTransform: 'capitalize' },
  chipTextActive: { color: C.bg, fontWeight: '700' },
});
