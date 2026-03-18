export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://www.mgeglobal.in/sitemap.xml",
    host: "https://www.mgeglobal.in",
  };
}
