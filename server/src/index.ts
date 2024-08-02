import express, {Express} from "express";
import mongoose from "mongoose";
import peopleRoutes from './routes/peopleRoutes';
import historyRoutes from './routes/historyRoutes';
import analyticsRoutes from './routes/analyticsRoutes';
import entryExitRoutes from './routes/ingressEgressRoutes';
import cors from 'cors';


const app: Express = express();
app.use(express.json());
app.use(cors());

const port = 8080;


const mongoURI: string = "mongodb+srv://siddharthasiddhu12345:1xa1CYWZqRDPyHvo@cluster0.bsaib02.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
    .connect(mongoURI)
    .then(() => console.log("CONNECTED TO MONGODB!"))
    .catch((err) => console.error("Failed to Connect to MongoDB"));



    app.use('/api', entryExitRoutes);
    app.use('/api', peopleRoutes);
    app.use('/api', historyRoutes);
    app.use('/api', analyticsRoutes);
    app.use('/api', entryExitRoutes);


app.listen(port,() => {
    console.log(`server Running on Port ${port}`);
});

