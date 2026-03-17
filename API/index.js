import express from 'express';
const app = express();
app.use(express.json());
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB!!"))
  .catch((err) => console.error("Failed to connect to MongoDB:", err));
//Current IP Address (42.0.6.148/32) added!

app.listen(3000, () => {
    console.log('Server is running on port 3000!!');
});
