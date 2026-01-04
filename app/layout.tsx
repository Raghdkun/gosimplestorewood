import type { Metadata } from "next";
import "./globals.css";
import LoadingScreen from "@/components/ui/LoadingScreen";

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
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap"
          as="style"
        />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap"
          as="style"
        />
        
        {/* Font Loading Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if ('fonts' in document) {
                  Promise.all([
                    document.fonts.load('400 16px Inter'),
                    document.fonts.load('500 16px Inter'),
                    document.fonts.load('600 16px Manrope'),
                  ]).then(function() {
                    document.documentElement.classList.add('fonts-loaded');
                  }).catch(function() {
                    document.documentElement.classList.add('fonts-loaded');
                  });
                } else {
                  document.documentElement.classList.add('fonts-loaded');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="bg-background-dark text-white font-display antialiased selection:bg-primary selection:text-white overflow-x-hidden min-h-screen flex flex-col">
        <LoadingScreen>
          {children}
        </LoadingScreen>
      </body>
    </html>
  );
}
