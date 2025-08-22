import type { Metadata } from "next";
import {
  Space_Grotesk,
  Poppins,
  Playfair_Display,
  Montserrat,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";

// Fonts
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playFairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Digically",
  description:
    "SEO | Social Media Marketing | Paid Ads Full-service digital marketing agency delivering measurable growth",
  icons: "/favicon.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${playFairDisplay.variable} ${poppins.variable} ${montserrat.variable} antialiased bg-gradient-to-br from-purple-600 via-red-500 to-orange-500`}
      >
        <Navbar />
        <div className="pt-16 font-poppins">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
