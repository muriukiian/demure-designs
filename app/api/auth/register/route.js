import connectDB from "@/config/db";
import User from "@/schema/page";
import bcrypt from 'bcryptjs';
import { NextResponse } from "next/server";

let isConnected
async function ensureDbConnection(){
    if(isConnected){
        await connectDB();
        console.log("DB Connected.")
    }
    else{
        console.error(error);
        throw new Error("Connection to database failed.")
    }
}
export async function POST (request){
    //connect to the database
    await ensureDbConnection();
    //return new NextResponse(JSON.stringify({success:"Connected to database"}),{status:200})
    //deconstruct the request
    const {username, email, password, confirmPassword} = await request.json();

    //check if user exists
    const existingUser = await User.findOne({email});
    if (existingUser){
        console.log("Error, user already exists")
        return new NextResponse(JSON.stringify({error: "User already exists."}),{status: 400})
    }
    //hash the password
    else{
        const hashedPassword = await bcrypt.hash(password, 5);
        console.log(hashedPassword);

         try {
            //create newUser
            const newUser = new User({username, email, password:hashedPassword});
            console.log(newUser);

            //save newUser to database;
            await newUser.save();
            return new NextResponse(JSON.stringify({success:"User registered successfully"}), {status:201})

         } catch (error) {
            return new NextResponse(error,{status:500});
         }
    }
}