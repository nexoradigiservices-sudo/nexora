import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChatWidget } from "@/components/ChatWidget";

export const metadata = {
  metadataBase: new URL("https://nexora.digital"),
  title: {
    default: "Nexora Digital | Full-Service Digital Solutions Company",
    template: "%s | Nexora Digital"
  },
  description:
    "Premium full-service digital solutions for web, mobile, APIs, cloud, SEO, digital marketing, automation, analytics, and technical support.",
  keywords: [
    "digital solutions company",
    "web development",
    "mobile app development",
    "SEO agency",
    "digital marketing",
    "cloud hosting",
    "business automation"
  ],
  openGraph: {
    title: "Nexora Digital",
    description: "Enterprise-grade digital products, automation, marketing, and growth systems.",
    type: "website",
    url: "https://nexora.digital",
    siteName: "Nexora Digital"
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
