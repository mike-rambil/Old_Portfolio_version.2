const NEW_SITE = 'https://michealpb.com';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // The projects and blog moved to the new site. Permanent redirects keep old links and search rankings pointed there.
  async redirects() {
    return ['/portfolio', '/portfolio/:path*', '/blog', '/blog/:path*'].map(
      (source) => ({ source, destination: NEW_SITE, permanent: true })
    );
  },
};

export default nextConfig;
