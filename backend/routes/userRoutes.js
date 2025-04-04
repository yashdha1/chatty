import express from "express";  
import cors from 'cors'; 
import { signUpController, loginController } from '../controllers/userController.js';
const Router = express.Router();

const app = express() 
Router.use(cors());

app.use(express.json());

Router.post('/login', loginController);
Router.post('/signup', signUpController);

export default Router;
