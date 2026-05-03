import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
    // এটি ব্রাউজারের বর্তমান ইউআরএল থেকেই বেস ইউআরএল নিয়ে নিবে, ফলে আর CORS সমস্যা হবে না
    baseURL: typeof window !== 'undefined' ? window.location.origin : "http://localhost:3000"
});