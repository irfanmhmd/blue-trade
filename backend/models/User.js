const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true, minlength: 6 },
    phone: { type: String },
    organization: { type: String },
    role: {
      type: String,
      enum: ["super_admin", "ngo", "field_staff", "community_member", "company_buyer"],
      required: true
    },
    walletAddress: { type: String }
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

userSchema.pre("save", async function preSave(next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.matchPassword = function matchPassword(plainText) {
  return bcrypt.compare(plainText, this.password);
};

module.exports = mongoose.model("User", userSchema);
