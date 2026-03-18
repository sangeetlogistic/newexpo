import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { organizationSchema } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.mgeglobal.in"),
  title: {
    default:
      "Maheshwari Global Exports | Agricultural Exporter from India | Rice & Spice Export Company",
    template: "%s | Maheshwari Global Exports",
  },
  description:
    "Maheshwari Global Exports is a Gujarat-based merchant export house specializing in rice, spices, pulses, and fresh produce exports. Structured sourcing, verified quality, and disciplined global delivery.",
  keywords:
    "agricultural exporter from india, rice exporter india, spice exporter india, pulses exporter india, merchant exporter india, gujarat export company, b2b agricultural exporter, basmati rice exporter, indian turmeric exporter",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Maheshwari Global Exports",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        {/* Global Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Navbar />
        <main>{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
