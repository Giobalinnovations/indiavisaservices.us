/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    //RazorPay keys
    RAZORPAY_KEY: 'rzp_test_MPk03m4RFBEKxh',
    RAZORPAY_SECRET: 'hmlyM2C6m5GwTy6iuozCBfBe',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'evisastorage.s3.ap-south-1.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'storageevisa.s3.ap-south-1.amazonaws.com',
      },
    ],
  },
  // assetPrefix: 'https://e-visa-delta.vercel.app',
};

module.exports = nextConfig;
