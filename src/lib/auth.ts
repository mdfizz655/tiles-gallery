import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import clientPromise from "./db";

export const auth = betterAuth({
    database: mongodbAdapter(await clientPromise.then(res => res.db())),
    emailAndPassword: {
        enabled: true
    },
    // এটি ৪০০ ও ৪০৩ এরর দূর করার জন্য অত্যন্ত জরুরি
    trustedOrigins: [
        "https://tiles-gallery-biia.vercel.app",
        "http://localhost:3000"
    ],
    secret: process.env.BETTER_AUTH_SECRET,
});