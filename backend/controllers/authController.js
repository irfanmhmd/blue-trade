const jwt = require("jsonwebtoken");
const User = require("../models/User");

function signToken(id) {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
}

async function register(req, res) {
  const { name, email, password, phone, organization, walletAddress, role } = req.body;
  const exists = await User.findOne({ email });
  if (exists) {
    const error = new Error("Email already registered");
    error.statusCode = 400;
    throw error;
  }

  const user = await User.create({
    name,
    email,
    password,
    phone,
    organization,
    walletAddress,
    role
  });

  return res.status(201).json({
    token: signToken(user._id),
    user: { id: user._id, name: user.name, email: user.email, role: user.role }
  });
}

async function login(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    const error = new Error("Invalid credentials");
    error.statusCode = 401;
    throw error;
  }

  const valid = await user.matchPassword(password);
  if (!valid) {
    const error = new Error("Invalid credentials");
    error.statusCode = 401;
    throw error;
  }

  return res.json({
    token: signToken(user._id),
    user: { id: user._id, name: user.name, email: user.email, role: user.role }
  });
}

function forgotPassword(_, res) {
  return res.json({ message: "Forgot password placeholder. Integrate email/SMS OTP service." });
}

async function profile(req, res) {
  return res.json(req.user);
}

module.exports = { register, login, profile, forgotPassword };
