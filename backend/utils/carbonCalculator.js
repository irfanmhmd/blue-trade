function calculateCredits(ecosystemType, areaInHectares) {
  const normalized = ecosystemType.toLowerCase();
  const area = Number(areaInHectares);
  if (!area || area < 0) throw new Error("Invalid area");

  if (normalized === "mangrove") return area * 200;
  if (normalized === "seagrass") return area * 120;
  if (normalized === "salt_marsh") return area * 150;
  throw new Error("Unsupported ecosystem type");
}

module.exports = { calculateCredits };
