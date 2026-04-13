function similarityScore(a, b) {
  if (!a || !b) return 0.5;
  const shortA = String(a).slice(-10);
  const shortB = String(b).slice(-10);
  return shortA === shortB ? 0.95 : 0.62;
}

function locationDistance(lat1, lon1, lat2, lon2) {
  const dLat = Math.abs(Number(lat1) - Number(lat2));
  const dLon = Math.abs(Number(lon1) - Number(lon2));
  return Math.sqrt(dLat * dLat + dLon * dLon);
}

function verifySubmission({ newImageHash, previousImageHash, latitude, longitude, previousLatitude, previousLongitude }) {
  const imageSimilarity = similarityScore(newImageHash, previousImageHash);
  const distance = locationDistance(latitude, longitude, previousLatitude, previousLongitude);
  const locationConsistency = distance < 0.01 ? 0.9 : 0.55;
  const confidenceScore = Number(((imageSimilarity + locationConsistency) / 2).toFixed(2));
  const flagged = confidenceScore < 0.7;

  return {
    confidenceScore,
    flagged,
    checks: {
      imageSimilarity,
      locationConsistency
    }
  };
}

module.exports = { verifySubmission };
