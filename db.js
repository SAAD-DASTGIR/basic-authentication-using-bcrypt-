import mongoose from "mongoose"
const localDB = "mongodb+srv://saaddastgir:saad@cluster0.ltoeo07.mongodb.net/"
const connectDb=async()=>{
     await mongoose.connect(localDB,{
        useNewUrlParser:true,
        useUnifiedTopology:true}
    )
    console.log("Connected to MongoDB")
}
export default connectDb