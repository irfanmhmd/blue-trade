const express = require("express");
const { register, login, profile, forgotPassword } = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");
const asyncHandler = require("../middleware/asyncHandler");
const { requireFields, validateEnum } = require("../middleware/validateMiddleware");

const router = express.Router();

router.post(
  "/register",
  requireFields(["name", "email", "password", "role"]),
  validateEnum("role", ["super_admin", "ngo", "field_staff", "community_member", "company_buyer"]),
  asyncHandler(register)
);
router.post("/login", requireFields(["email", "password"]), asyncHandler(login));
router.post("/forgot-password", asyncHandler(forgotPassword));
router.get("/profile", protect, asyncHandler(profile));

module.exports = router;
