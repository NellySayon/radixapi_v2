/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    env: {
      DAPP_ACCOUNT: 'account_tdx_2_12xt65u0sse280tatxcgyp06c0fc9vcv90j6h6npxj4zp8aty8flrsv',
      NETWORK_ID: '2',        
      GATEWAY_API: 'https://stokenet.radixdlt.com',      
    },
  };

export default nextConfig;
