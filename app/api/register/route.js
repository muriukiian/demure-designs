import connectDB from "@/config/db";
import User from "@/schema/page";
import bcrypt from 'bcryptjs'
import { NextResponse } from "next/server";

export const POST = async(request) => {
    //deconstruct the request
    const {username, email, password, confirmPassword} = await request.json();

    //check for missing fields
    if(!username || !email || !password || !confirmPassword){
        return new NextResponse(JSON.stringify({error: "All fields are required"}), {status:400})
    }

    //check if passwords match
    if(password !== confirmPassword){
        return new NextResponse(JSON.stringify({error: "Passwords do not match"}), {status:400})
    }

    //connect database
    await connectDB();

    //check if user exists
    const existingUser = await User.findOne({email});
    if (existingUser){
        return new NextResponse(JSON.stringify({error: "User already exists!"}),{status:400})
    }
    else{
        //hash the password
        const hashedPassword = await bcrypt.hash(password, 15);
        //create a newUser
        const newUser = await new User({
            username,
            email,
            password:hashedPassword
        });
        try {
            //save new user to database
            await newUser.save();
            return new NextResponse(JSON.stringify({success: "User registered successfully"}), {status: 201})
        } catch (error) {
            return new NextResponse(error, {status:500})
        }
    }
} 