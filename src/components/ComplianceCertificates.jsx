"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const certificates = [
  {
    name: "APEDA",
    subtitle: "Export Registration",
    imageSrc: "/assets/apeda.png",
    accent: "#16a34a",
  },
  {
    name: "FSSAI",
    subtitle: "Food Safety License",
    imageSrc: "/assets/fssai.jpg",
    accent: "#f97316",
  },
];

function CertificateBadge({ certificate }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <Link
      href="/assets/MGEReport.pdf"
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none", display: "block" }}
    >
      <div
        className="certificate-badge"
        style={{
          position: "relative",
          background: "#ffffff",
          border: "1px solid #dbeafe",
          borderRadius: "20px",
          padding: "16px",
          boxShadow: "0 12px 30px rgba(15, 23, 42, 0.06)",
          overflow: "hidden",
          height: "100%",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "0 auto auto 0",
            width: "100%",
            height: "3px",
            background: `linear-gradient(90deg, ${certificate.accent}, #3395f0)`,
          }}
        />

        <div
          className="certificate-badge-inner"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
          }}
        >
          <div
            className="certificate-media"
            style={{
              width: "84px",
              minWidth: "84px",
              height: "84px",
              borderRadius: "18px",
              border: "1px solid #e5eefc",
              background: "linear-gradient(135deg, #fbfdff, #f2f7ff)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              padding: "10px",
            }}
          >
            {imageFailed ? (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#ffffff",
                  color: "#0052b3",
                  fontWeight: 800,
                  fontSize: "14px",
                  fontFamily: "Poppins, sans-serif",
                  letterSpacing: "0.08em",
                }}
              >
                {certificate.name}
              </div>
            ) : (
              <Image
                src={certificate.imageSrc}
                alt={certificate.name}
                width={180}
                height={120}
                onError={() => setImageFailed(true)}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            )}
          </div>

          <div className="certificate-copy" style={{ minWidth: 0, flex: 1 }}>
            <div
              className="certificate-meta"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "8px",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "999px",
                  background: certificate.accent,
                  boxShadow: `0 0 0 6px ${certificate.accent}18`,
                }}
              />
              <span
                style={{
                  color: "#0073e6",
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                }}
              >
                Verified Document
              </span>
            </div>

            <div
              className="certificate-title"
              style={{
                color: "#0a0a0a",
                fontWeight: 800,
                fontFamily: "Poppins, sans-serif",
                fontSize: "18px",
                lineHeight: 1.2,
                marginBottom: "4px",
              }}
            >
              {certificate.name}
            </div>

            <div
              className="certificate-subtitle"
              style={{
                color: "#6b7280",
                fontSize: "13px",
                lineHeight: 1.6,
                marginBottom: "12px",
              }}
            >
              {certificate.subtitle}
            </div>

            <div
              className="certificate-cta"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "8px 12px",
                borderRadius: "999px",
                background: "#f8fbff",
                border: "1px solid #dbeafe",
                color: "#0052b3",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Open Report
              <span style={{ color: "#3395f0" }}>PDF</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function ComplianceCertificates() {
  return (
    <section
      style={{
        padding: "28px 2rem 16px",
        background:
          "linear-gradient(180deg, rgba(244,245,247,0.55) 0%, #ffffff 100%)",
      }}
    >
      <div
        className="compliance-shell"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          background: "linear-gradient(135deg, #fbfdff 0%, #f4f9ff 100%)",
          border: "1px solid #dbeafe",
          borderRadius: "28px",
          padding: "22px",
          boxShadow: "0 18px 50px rgba(0, 115, 230, 0.06)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(260px, 320px) 1fr",
            gap: "20px",
            alignItems: "center",
          }}
          className="compliance-wrap"
        >
          <div>
            <div
              className="compliance-pill"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#ffffff",
                border: "1px solid #dbeafe",
                borderRadius: "999px",
                padding: "6px 12px",
                marginBottom: "14px",
              }}
            >
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  background: "#16a34a",
                  borderRadius: "999px",
                }}
              />
              <span
                style={{
                  color: "#0073e6",
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                }}
              >
                Trust & Compliance
              </span>
            </div>

            <h2
              className="compliance-title"
              style={{
                fontSize: "clamp(1.35rem, 2vw, 1.85rem)",
                fontWeight: 800,
                color: "#0a0a0a",
                fontFamily: "Poppins, sans-serif",
                lineHeight: 1.2,
                margin: "0 0 10px",
              }}
            >
              Registered export credentials buyers expect to see
            </h2>

            <p
              className="compliance-desc"
              style={{
                color: "#6b7280",
                fontSize: "14px",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              Compact proof badges that open your supporting report instantly.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: "16px",
            }}
            className="certificate-grid"
          >
            {certificates.map((certificate) => (
              <CertificateBadge
                key={certificate.name}
                certificate={certificate}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .certificate-badge {
          transition: transform 0.24s ease, box-shadow 0.24s ease, border-color 0.24s ease;
        }
        .certificate-badge:hover {
          transform: translateY(-3px);
          box-shadow: 0 20px 38px rgba(0, 115, 230, 0.12);
          border-color: #93c5fd;
        }
        @media(max-width:980px){
          .compliance-wrap{grid-template-columns:1fr!important}
        }
        @media(max-width:680px){
          .compliance-shell{
            padding:16px!important;
            border-radius:22px!important;
          }
          .compliance-pill{
            padding:5px 10px!important;
            margin-bottom:12px!important;
          }
          .compliance-title{
            font-size:1.72rem!important;
            line-height:1.08!important;
            margin-bottom:8px!important;
          }
          .compliance-desc{
            font-size:13px!important;
            line-height:1.65!important;
          }
          .certificate-grid{grid-template-columns:1fr!important;gap:12px!important}
          .certificate-badge{
            border-radius:18px!important;
            padding:14px!important;
          }
          .certificate-badge-inner{
            gap:12px!important;
            align-items:center!important;
          }
          .certificate-media{
            width:72px!important;
            min-width:72px!important;
            height:72px!important;
            border-radius:16px!important;
            padding:8px!important;
          }
          .certificate-meta{
            gap:6px!important;
            margin-bottom:6px!important;
          }
          .certificate-meta span:last-child{
            font-size:9px!important;
            letter-spacing:0.12em!important;
          }
          .certificate-title{
            font-size:15px!important;
            margin-bottom:2px!important;
          }
          .certificate-subtitle{
            font-size:12px!important;
            margin-bottom:10px!important;
            line-height:1.45!important;
          }
          .certificate-cta{
            width:100%;
            justify-content:center;
            font-size:10px!important;
            padding:8px 10px!important;
            gap:8px!important;
          }
        }
        @media(max-width:420px){
          .compliance-shell{
            padding:14px!important;
          }
          .compliance-title{
            font-size:1.48rem!important;
          }
          .certificate-badge-inner{
            align-items:flex-start!important;
          }
          .certificate-copy{
            padding-top:2px;
          }
        }
      `}</style>
    </section>
  );
}
