import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
    // এখানে কোনো স্লাশ ছাড়া সরাসরি ডোমেইন লিঙ্ক অথবা শুধু '/' দিন
    baseURL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
});