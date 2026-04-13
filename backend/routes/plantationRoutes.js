const express = require("express");
const multer = require("multer");
const {
  createPlantation,
  getAllPlantations,
  getPlantationById,
  approvePlantation,
  rejectPlantation,
  deletePlantation
} = require("../controllers/plantationController");
const { protect, authorize } = require("../middleware/authMiddleware");
const asyncHandler = require("../middleware/asyncHandler");
const { requireFields, validateEnum, validatePositiveNumber } = require("../middleware/validateMiddleware");

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post(
  "/create",
  protect,
  upload.fields([
    { name: "photo", maxCount: 1 },
    { name: "video", maxCount: 1 },
    { name: "drone", maxCount: 1 }
  ]),
  requireFields(["plantationName", "ecosystemType", "latitude", "longitude", "area", "numberOfPlants"]),
  validateEnum("ecosystemType", ["mangrove", "seagrass", "salt_marsh"]),
  validatePositiveNumber("area"),
  validatePositiveNumber("numberOfPlants"),
  asyncHandler(createPlantation)
);
router.get("/all", protect, asyncHandler(getAllPlantations));
router.get("/:id", protect, asyncHandler(getPlantationById));
router.put("/:id/approve", protect, authorize("super_admin"), asyncHandler(approvePlantation));
router.put("/:id/reject", protect, authorize("super_admin"), asyncHandler(rejectPlantation));
router.delete("/:id", protect, authorize("super_admin", "ngo"), asyncHandler(deletePlantation));

module.exports = router;
