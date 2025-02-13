import express from 'express';
const zomato = express();

import dotenv from 'dotenv';
//database connection
import ConnectDB from './database/connection';
dotenv.config();
zomato.use(express.json());

zomato.get("/", (req, res) => {
    res.json({
        message: "Setup Success"
    });
});

const PORT = process.env || 4000;
zomato.listen(PORT, () => {
    // ConnectDB()
    //     .then(() => {
    //         // console.log("Server is running");
    //     })
    //     .catch((error) => {
    //         console.log("Server is running, but connection failed");
    //         console.log(error);
    //     });
    console.log("Server is running");
});