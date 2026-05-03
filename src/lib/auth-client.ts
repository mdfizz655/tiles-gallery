import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
    // কোনো হার্ডকোডেড লিঙ্ক দিবেন না, এটি অটোমেটিক কাজ করবে
    baseURL: typeof window !== 'undefined' ? window.location.origin : undefined
});