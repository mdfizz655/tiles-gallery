/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // এটি বিল্ড করার সময় টাইপ এরর থাকলেও প্রোজেক্ট লাইভ করতে দিবে
    ignoreBuildErrors: true,
  },
  eslint: {
    // এটি ইএস-লিন্ট এরর ইগনোর করবে
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
