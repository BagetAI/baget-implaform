import type { Metadata } from "next";
import { Inter, Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

export const metadata: Metadata = {
  title: "ImplaForm | Precision Molded. Chairside Perfected.",
  description: "Create patient-specific emergence profiles in seconds. Eliminate $250+ lab fees with our universal molding tray.",
  metadataBase: new URL("https://baget-implaform.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} ${jakarta.variable} font-jakarta bg-white text-slate-900`}>
        {children}
      </body>
    </html>
  );
}
