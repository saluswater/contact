import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const metadata: Metadata = {
  title: "Salus Water - Pure Alkaline Water for Optimal Health",
  description: "Transform your health with Salus Water's advanced alkaline purification system. Perfect for hair, skin, kidney health, and cancer prevention. Join thousands who have transformed their wellness journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet"
        />
        <style>{`
          /* Coolvetica Local Fonts */
          @font-face {
            font-family: 'Coolvetica';
            src: url('/contact/fonts/coolvetica/Coolvetica Rg.otf') format('opentype');
            font-weight: 400;
            font-style: normal;
            font-display: swap;
          }
          
          @font-face {
            font-family: 'Coolvetica';
            src: url('/contact/fonts/coolvetica/Coolvetica Hv Comp.otf') format('opentype');
            font-weight: 700;
            font-style: normal;
            font-display: swap;
          }
          
          @font-face {
            font-family: 'Coolvetica';
            src: url('/contact/fonts/coolvetica/Coolvetica Rg Cond.otf') format('opentype');
            font-weight: 500;
            font-style: normal;
            font-display: swap;
          }
          
          @font-face {
            font-family: 'Coolvetica';
            src: url('/contact/fonts/coolvetica/Coolvetica Rg It.otf') format('opentype');
            font-weight: 400;
            font-style: italic;
            font-display: swap;
          }
          
          /* Fallback fonts */
          @font-face {
            font-family: 'Inter-Fallback';
            src: local('-apple-system'), local('BlinkMacSystemFont'), local('Segoe UI');
            font-weight: 300 700;
            font-display: swap;
          }
        `}</style>
      </head>
      <body className="antialiased font-sans">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
