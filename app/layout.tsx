import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ATS Resume Checker — Score Your Resume Instantly",
  description: "Check if your resume passes ATS filters. Get actionable fixes for better keyword matching and land more interviews."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ccd751ac-beda-41a8-b0b0-dcc1b29bcd2c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
