import exp from 'express';
import {connect} from 'mongoose';
import {config} from 'dotenv'; 
import {userRoute} from './APIs/userAPI.js';
import {authorRoute} from './APIs/authorAPI.js';
import {adminRoute} from './APIs/adminAPI.js';
import cookieParser from 'cookie-parser';
import { commonRoute } from './APIs/commonAPI.js';
config();//process.env
const app = exp(); 
//add body parser middleware
app.use(exp.json());
//add cookie parser midleware
//connect api routes
app.use(cookieParser())
app.use('/user-api',userRoute)
app.use('/author-api',authorRoute)
app.use('/admin-api',adminRoute);
app.use('/common-api',commonRoute) 

//connect to db 
const connectDB = async () => {
    try {
        await connect(process.env.DB_URL);
        console.log("Connected to MongoDB");
        app.listen(process.env.PORT,()=>{
            console.log(`Server is running on http://localhost:${process.env.PORT}`);
        })
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}
connectDB();

//dealing with invalid path 
app.use((req,res,next)=>
{
    console.log(req.url)
    res.json({message:req.url + " INVALID path"})
})
 
//error handling middleware
app.use((err, req, res, next) => {
    res.status(500).json({message:"Error has occured",reason:err.message});
});






 