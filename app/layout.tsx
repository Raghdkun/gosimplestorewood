import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GoSimple Store - Crafted for Your Lifestyle",
  description: "Experience the perfect blend of natural aesthetics and modern utility. Handcrafted pieces that blend the raw beauty of burnt wood with the elegance of glass.",
  keywords: ["furniture", "home decor", "burnt wood", "glass", "artisan", "handcrafted"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="bg-background-dark text-white font-display antialiased selection:bg-primary selection:text-white overflow-x-hidden min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
