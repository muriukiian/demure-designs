import connectDB from "@/config/db";
import User from "@/schema/page";
import NextAuth from "next-auth";
import bcrypt from 'bcryptjs';
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers:[
        CredentialsProvider({
            credentials:{
                email:{type:'text', label:"Email"},
                password: {type:"password", label:"Password"}
            },
            async authorize (credentials, req){
                const dbConnection = await connectDB();
                console.log(dbConnection);

                const user = await User.findOne({email: credentials.email});
                if (user){
                    console.log(user);
                    const isCorrectPassword = await bcrypt.compare(credentials.password, user.password);
                    console.log(isCorrectPassword);
                    if(isCorrectPassword){
                        return user;
                    }else{
                        throw new Error("Wrong Password.")
                    }
                }else{
                    throw new Error("Invalid Credentials")
                }
            }
        })
    ],
    callbacks:{
        async signIn ({user, account}){
            if (account?.provider == 'credentials'){
                return true
            }
            else{
                return false;
            }
        }
    }
})

export {handler as GET, handler as POST};