import  express from 'express';
import Car from '../models/carModel.js';
import User from '../models/userModel.js';
import data from '../data.js';

const seedRouter = express.Router();

seedRouter.get('/', async(req, res) => {
    await Car.deleteMany({});
    const createdCars = await Car.insertMany(data.cars);

    await User.deleteMany({});
    const createdUsers = await User.insertMany(data.users);

    res.send({createdCars, createdUsers});
});

export default seedRouter;