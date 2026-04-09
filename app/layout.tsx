import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ServiceNow CSA — Exam Preparation",
  description: "Practice platform for the ServiceNow Certified System Administrator (CSA) certification exam.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
