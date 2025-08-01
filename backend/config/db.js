import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://vaibhav09853:1234@cluster0.qdb6mtk.mongodb.net/').then(()=>{
       console.log('DB connected') ;
    })
}
