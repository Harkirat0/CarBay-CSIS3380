import express from "express";
import Car from "../models/carModel.js";

const carRouter = express.Router();

carRouter.get("/", async (req, res) => {
  const cars = await Car.find();
  res.send({ cars });
});

carRouter.get("/slug/:slug", async (req, res) => {
  const car = await Car.findOne({ slug: req.params.slug });
  if (car) {
    res.send(car);
  } else {
    res.send(404).send({ message: "Car Not Found" });
  }
});

carRouter.get("/:id", async (req, res) => {
  const car = await Car.findById(req.params.slug);
  if (car) {
    res.send(car);
  } else {
    res.send(404).send({ message: "Car Not Found" });
  }
});

export default carRouter;
