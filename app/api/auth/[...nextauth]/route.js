import connectDB from "@/config/db";
import User from "@/schema/page";
import bcrypt from 'bcryptjs';
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                await connectDB();
                try {
                    const user = await User.findOne({ email: credentials.email });
                    if (user) {
                        const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
                        if (isPasswordCorrect) {
                            return user;
                        } else {
                            console.error('Invalid password');
                            throw new Error('Invalid credentials');
                        }
                    } else {
                        console.error('User not found');
                        throw new Error('User not found');
                    }
                } catch (error) {
                    console.error('Authorization error:', error);
                    throw new Error('Authorization error');
                }
            }
        })
    ],
    callbacks: {
        async signIn({ user, account }) {
            if (account?.provider == 'credentials') {
                return true;
            }
            return false;
        }
    }
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
