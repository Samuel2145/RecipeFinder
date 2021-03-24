import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import path from 'path'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import userRouter from "./Routes/UserRoute.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
const DBC = process.env.DB_CONNECT;

const app = express();

mongoose.connect(DBC, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}).then(() => {
    console.log(`Successfully connected to mongoose database.`)
});

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cookieParser());

app.use(bodyParser.json());

//app.use('/client', clientRouter);
app.use('/user', userRouter)

const dir = path.resolve(path.dirname(''));

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('Client/build'));

    app.get('*', (req,res) =>{
        res.sendFile(path.resolve(dir,'Client', 'build','index.html'));
    })
}

app.listen(PORT, () => console.log(`Listening on:${PORT}`))
