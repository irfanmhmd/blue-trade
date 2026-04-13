const express = require("express");
const { calculate, mintCredit, getCredits } = require("../controllers/carbonController");
const { protect, authorize } = require("../middleware/authMiddleware");
const asyncHandler = require("../middleware/asyncHandler");
const { requireFields, validateEnum, validatePositiveNumber } = require("../middleware/validateMiddleware");

const router = express.Router();

router.post(
  "/calculate",
  protect,
  requireFields(["ecosystemType", "area"]),
  validateEnum("ecosystemType", ["mangrove", "seagrass", "salt_marsh"]),
  validatePositiveNumber("area"),
  asyncHandler(calculate)
);
router.post("/mint-credit", protect, authorize("super_admin"), requireFields(["plantationId", "ownerId"]), asyncHandler(mintCredit));
router.get("/credits", protect, asyncHandler(getCredits));

module.exports = router;
