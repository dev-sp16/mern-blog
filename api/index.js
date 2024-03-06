import express from "express"; // add "type": "module" in package.json
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from './routes/user-route.js';

dotenv.config();

mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use('/api/user', userRoutes);


app.listen(3000, () => {
  console.log("Server is running on port 3000!!");
});
