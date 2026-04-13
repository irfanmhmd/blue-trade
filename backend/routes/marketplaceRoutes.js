const express = require("express");
const { getListings, getAllListings, createListing, buyListing } = require("../controllers/marketplaceController");
const { protect, authorize } = require("../middleware/authMiddleware");
const asyncHandler = require("../middleware/asyncHandler");
const { requireFields, validatePositiveNumber } = require("../middleware/validateMiddleware");

const router = express.Router();

router.get("/listings", protect, asyncHandler(getListings));
router.get("/all-listings", protect, asyncHandler(getAllListings));
router.post(
  "/create",
  protect,
  authorize("ngo"),
  requireFields(["projectName", "location", "creditsAvailable", "pricePerCredit"]),
  validatePositiveNumber("creditsAvailable"),
  validatePositiveNumber("pricePerCredit"),
  asyncHandler(createListing)
);
router.post("/buy/:id", protect, authorize("company_buyer"), asyncHandler(buyListing));

module.exports = router;
