
const  express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const router = require('./routes/book-routes')
const cors =require('cors');
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use("/books",router);

mongoose.connect(process.env.DB_URL,{})
.then(()=>{
    console.log("connect to MONGODB");
}).catch((err)=>{
    console.log("could not connect to DB",err)
});

app.listen(PORT,()=>{
    console.log("server is running in PORT:",PORT)
})
