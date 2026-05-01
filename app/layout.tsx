import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GlossGo — Beauty, On Demand",
  description: "Book trusted beauty professionals instantly. Discover stylists, salons, barbers, nail techs, and makeup artists near you.",
  keywords: "beauty, booking, salon, stylist, makeup, nails, hair, barber, on-demand",
  openGraph: {
    title: "GlossGo — Beauty, On Demand",
    description: "Book trusted beauty professionals instantly.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white">
        {children}
      </body>
    </html>
  );
}
