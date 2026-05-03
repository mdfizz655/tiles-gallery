export const auth = betterAuth({
    database: mongodbAdapter(await clientPromise.then(res => res.db())),
    emailAndPassword: {
        enabled: true
    },
    // এই অংশটুকু যোগ করুন যাতে ভার্সেলের সব সাব-ডোমেইন থেকে ডাটা আসে
    advanced: {
        crossSubDomainCookies: {
            enabled: true
        }
    },
    secret: process.env.BETTER_AUTH_SECRET,
});