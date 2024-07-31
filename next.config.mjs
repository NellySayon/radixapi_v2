/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    env: {
        //ADMIN_API_LINK: 'http://192.168.178.61:5002', 
        ADMIN_API_LINK: 'https://admin.radixapi.net',
        RDXAPI_LINK: 'https://api.radixapi.net/v1',
        RDXAPI_BEARER: 'DfhCBjX0rUV5oRZvhccSza4FAzzkd4qJH8CmDMffiWI',
        ROLA_ORIGIN: 'http://localhost:3000',
        // DAPP_ACCOUNT: 'account_tdx_2_128r82lar0qsnkav5ap3hsua2njwcl5c45q3ps82x7jgz5krleeqw8x',
        // NETWORK_ID: '2',
        // PACKAGE_ADDRESS: 'package_tdx_2_1phmw0h4nu3wepwma3vnagpvcgzzftxpurz68xqg3fnpxwe6rqvvzum',
        // COMPONENT_ADDRESS: 'component_tdx_2_1crhglt65sx9cpp9w7w2gp2wqx69sy600nd26fw0easj7eg4439qdht',
        // BADGE_RESOURCE_ADDRESS: 'resource_tdx_2_1nt6xn4cvg2gu3yc8sespvekek0tmtus2aes0twlh3mvsf3x9fs0t7q',
        // GATEWAY_API: 'https://stokenet.radixdlt.com',    
        // XRD_ADDRESS: 'resource_tdx_2_1tknxxxxxxxxxradxrdxxxxxxxxx009923554798xxxxxxxxxtfd2jc',   
        DAPP_ACCOUNT: 'account_rdx16xz467phhcv969yutwqxv7acy9n2q5ml7hdngfwa5f3vtnldclz49d',
        NETWORK_ID: '1',        
        PACKAGE_ADDRESS: 'package_rdx1pkjwrp6nwkphdv8x34nzyegekz36nxtaa9mm5tfuvckqct70esgcpz',
        COMPONENT_ADDRESS: 'component_rdx1crqe9rlfx2fjurf2d9p9mlnyhu9qhk942fuwfeppxkw3y6aue6xdxq',
        BADGE_RESOURCE_ADDRESS: 'resource_rdx1ngp6s7995nlslsp8v4j36w356ue88cgd9tx5v856fvam7cpermlktz', 
        GATEWAY_API: 'https://mainnet.radixdlt.com',
        XRD_ADDRESS: 'resource_rdx1tknxxxxxxxxxradxrdxxxxxxxxx009923554798xxxxxxxxxradxrd', 
    },
  };

export default nextConfig;
