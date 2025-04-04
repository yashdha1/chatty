import express from "express";
import { config } from "dotenv";
import mongoose from "mongoose";
import userRoutes from './routes/userRoutes.js';
import cors from 'cors' ;

config();
const app = express();

const port = process.env.PORT || 5000;
const url = process.env.MONGO_URL;

app.use(express.json());
app.use(cors());

const dbConnection = async () => {
  try {
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to MongoDB");
  } catch (e) {
    console.error("Error connecting to MongoDB", e);
    process.exit(1); // Exit the application if unable to connect to DB
  }
};

dbConnection();

app.get('/', (req, res) => {
  res.send("Hello");
});

app.use('/user', userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({
    status: "error",
    message: "Internal Server Error"
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}/`);
});
