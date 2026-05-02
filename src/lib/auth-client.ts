import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
    // এখানে কোনো ভুল থাকলে বিল্ড ফেইল হয়
    baseURL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
});