export default function sitemap() {
  const BASE_URL = "https://www.mgeglobal.in";
  const now = new Date().toISOString();

  const pages = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" },
    { url: "/about", priority: 0.8, changeFrequency: "monthly" },
    { url: "/products", priority: 0.9, changeFrequency: "weekly" },
    { url: "/process", priority: 0.8, changeFrequency: "monthly" },
    { url: "/markets", priority: 0.8, changeFrequency: "monthly" },
    { url: "/why-choose-us", priority: 0.7, changeFrequency: "monthly" },
    { url: "/contact", priority: 0.9, changeFrequency: "monthly" },
  ];

  return pages.map((page) => ({
    url: `${BASE_URL}${page.url}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
