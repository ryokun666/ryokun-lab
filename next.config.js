/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL:
      process.env.NODE_ENV === "production"
        ? "https://ryokun-lab-ryomen666.vercel.app"
        : "http://localhost:3000",
  },
};

module.exports = nextConfig;
