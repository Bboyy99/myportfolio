import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brandon | Software Developer",
  description: "Software developer specializing in web development and programming",
  openGraph: {
    title: 'Brandon | Software Developer',
    description: 'Software developer specializing in web development and programming',
    url: 'your-future-domain.com',
    siteName: 'Brandon\'s Portfolio',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100`}>
        {children}
      </body>
    </html>
  );
}
