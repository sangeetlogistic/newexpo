import AnimatedSection from "@/components/AnimatedSection";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import ContactClient from "./ContactClient";
import Image from "next/image";
import imgOffice from "../../../public/assets/office.avif";

export const metadata = buildMetadata({
  title:
    "Contact Us | Request Quote — Agro Export India | Contact Indian Rice & Spice Exporter",
  description:
    "Contact Maheshwari Global Exports to request a quotation for rice, spices, pulses, and fresh produce exports from India. Based in Rajkot, Gujarat. We respond within 24 hours.",
  keywords: [
    "contact indian rice exporter",
    "request quote agro export india",
    "contact spice exporter india",
    "agricultural export enquiry india",
    "rajkot gujarat exporter contact",
    "rice export quotation india",
    "indian pulses exporter contact",
    "b2b agro export inquiry",
  ],
  path: "/contact",
});

export default function Contact() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ]);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* PAGE HEADER — Dark cinematic (matching why-choose-us & other pages) */}
      <section
        style={{
          paddingTop: "160px",
          paddingBottom: "110px",
          position: "relative",
          overflow: "hidden",
          background: "#0a0a0a",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imgOffice.src}
          alt="Modern office representing Maheshwari Global Exports contact and enquiry center in Rajkot Gujarat"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 40%",
            opacity: 1,
          }}
          loading="eager"
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(100deg, rgba(10,10,10,0.92) 40%, rgba(10,10,10,0.45) 100%)",
          }}
        />
        <div
          className="bg-texture"
          style={{ position: "absolute", inset: 0 }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 10,
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 2rem",
          }}
        >
          <AnimatedSection>
            {/* Breadcrumb pill — matching why-choose-us */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(0,115,230,0.18)",
                border: "1px solid rgba(0,115,230,0.35)",
                borderRadius: "999px",
                padding: "6px 16px",
                marginBottom: "28px",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  background: "#0073e6",
                  borderRadius: "50%",
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  color: "#3395f0",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                Get In Touch
              </span>
            </div>

            <h1
              style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 900,
                color: "#fff",
                fontFamily: "Poppins, sans-serif",
                marginBottom: "20px",
                maxWidth: "720px",
                lineHeight: 1.1,
              }}
            >
              Contact Maheshwari
              <br />
              <span
                style={{
                  background: "linear-gradient(90deg, #0073e6, #3395f0)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Global Exports
              </span>
            </h1>
            <p
              style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "17px",
                maxWidth: "520px",
                lineHeight: 1.9,
                marginBottom: "44px",
              }}
            >
              Ready to source premium Indian agricultural products? Tell us what
              you need and we&apos;ll respond with a structured proposal within
              24 hours.
            </p>

            {/* Quick stats — matching why-choose-us style */}
            <div style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}>
              {[
                { value: "24h", label: "Response Time" },
                { value: "20+", label: "Global Markets" },
                { value: "50+", label: "Product Variants" },
                { value: "100%", label: "Quality Assured" },
              ].map((s) => (
                <div
                  key={s.label}
                  style={{
                    borderLeft: "2px solid #0073e6",
                    paddingLeft: "16px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 800,
                      color: "#fff",
                      fontSize: "22px",
                      lineHeight: 1,
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      color: "rgba(255,255,255,0.45)",
                      fontSize: "11px",
                      marginTop: "4px",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <ContactClient />
    </>
  );
}
