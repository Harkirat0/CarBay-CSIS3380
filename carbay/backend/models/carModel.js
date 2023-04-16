import mongoose from "mongoose";

const carSchema = new mongoose.Schema(
  {
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    kilometers: { type: Number, required: true },
    price: { type: Number, required: true },
    condition: { type: String, required: true },
    fuel_type: { type: String, required: true },
    color: { type: String, required: true },
    location: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    image1: { type: String, required: true },
    image2: { type: String, required: true },
    vin: {type: String, required: true, unique:true},
  },
  {
    timestamps: true,
  }
);

const Car =  mongoose.model('Car', carSchema);

export default Car;