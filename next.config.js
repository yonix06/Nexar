/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["lh3.googleusercontent.com", "vercel.com"],
  },

  // Si en dehors de l'arborescence classique ou sur un autre protocole, on l'ajoute ici
  async redirects() {
    return [
      {
        source: "/auteur",
        destination: "https://github.com/yonix06/",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
