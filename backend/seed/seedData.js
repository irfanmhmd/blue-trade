const dotenv = require("dotenv");
const mongoose = require("mongoose");
const User = require("../models/User");
const Plantation = require("../models/Plantation");
const MarketplaceListing = require("../models/MarketplaceListing");

dotenv.config();

async function run() {
  await mongoose.connect(process.env.MONGO_URI);
  await Promise.all([User.deleteMany({}), Plantation.deleteMany({}), MarketplaceListing.deleteMany({})]);

  const [admin, ngo, staff, buyer] = await User.create([
    {
      name: "NCCR Admin",
      email: "admin@bluetrade.org",
      password: "password123",
      role: "super_admin",
      organization: "NCCR"
    },
    {
      name: "Mangrove NGO",
      email: "ngo@bluetrade.org",
      password: "password123",
      role: "ngo",
      organization: "Blue Coast NGO"
    },
    {
      name: "Field Officer",
      email: "field@bluetrade.org",
      password: "password123",
      role: "field_staff",
      organization: "Blue Coast NGO"
    },
    {
      name: "Green Cement Ltd",
      email: "buyer@bluetrade.org",
      password: "password123",
      role: "company_buyer",
      organization: "Green Cement"
    }
  ]);

  const plantation = await Plantation.create({
    plantationName: "Sundar Pilot Plot",
    ecosystemType: "mangrove",
    latitude: 21.9497,
    longitude: 89.1833,
    area: 2,
    numberOfPlants: 8500,
    uploadedBy: ngo._id,
    status: "approved",
    carbonEstimated: 400,
    ipfsHash: "QmSampleHash123"
  });

  await MarketplaceListing.create({
    projectName: plantation.plantationName,
    location: "Sundarbans",
    creditsAvailable: 400,
    pricePerCredit: 12,
    seller: ngo._id
  });

  console.log("Seed data created", { admin: admin.email, ngo: ngo.email, staff: staff.email, buyer: buyer.email });
  await mongoose.disconnect();
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
