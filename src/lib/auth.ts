export const auth = betterAuth({
import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import clientPromise from "./db";

export const auth = betterAuth({
    database: mongodbAdapter(await clientPromise.then(res => res.db())),
    emailAndPassword: {
        enabled: true
    },
    // এই অংশটুকু হুবহু যোগ করুন। এটি সব CORS সমস্যা দূর করবে।
    trustedOrigins: [
        "https://tiles-gallery-x1cl.vercel.app", // আপনার মেইন লিঙ্ক
        "http://localhost:3000"
    ],
    secret: process.env.BETTER_AUTH_SECRET,
});