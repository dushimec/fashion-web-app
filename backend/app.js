// app.js
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import { connectDB } from './db/dbConnection';
import authRoutes from './src/routers/AuthRoutes';
import productRouter from './src/routers/productRouter';


connectDB()
dotenv.config();
const app = express();
const port = process.env.PORT;

const corsOptions = {
  origin: 'http://localhost:3000', 
  methods: ['GET', 'POST', 'PUT'], 
  allowedHeaders: ['Content-Type', 'Authorization'], 
};




// Middleware to parse JSON body
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(cookieParser())
app.use(express.static('public'));

app.use('/api', productRouter);
app.use('/auth',authRoutes)


// The server app listenig to
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
