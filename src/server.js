import express from 'express';
import mongoose from 'mongoose';

// mongo database config
import config from './db/config.js';

// router
import mocksRouter from './routes/mocks.router.js';


// app
const app = express();
const PORT = process.env.PORT||8000;
const connection = mongoose.connect(config.mongo.URL);
connection.then(()=>console.log('Mongo Database connected'))
.catch((error)=>console.log(error))

app.use(express.json());
app.use(express.urlencoded({extended:true}));


// router
app.use("/api/mocks", mocksRouter);

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));
