import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  icons: "/tch_logo.ico",
  title: "Tech-Convergence Hub",
  description: "UEH Technology Convergence Hub concept website",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
