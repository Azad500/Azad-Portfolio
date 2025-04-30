//backend yazilana qeder
/** @type {import('next').NextConfig} */

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: `
        default-src 'self';
        script-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com;
        style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
        font-src 'self' https://fonts.gstatic.com;
        img-src 'self' data:;
      `
      .replace(/\s{2,}/g, " ")
      .trim(),
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "geolocation=(), microphone=(), camera=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;

//backend yazildiqdan sonra
//  @type {import('next').NextConfig}
// const nextConfig = {};

// export default nextConfig;
