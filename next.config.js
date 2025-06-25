/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */


/** @type {import("next").NextConfig} */
const config = {
    images: {
        remotePatterns: [
            {
                hostname: 'facebook.com',
            },
            {
                hostname: 'www.facebook.com',
            },
        ],
    },
};

export default config;
