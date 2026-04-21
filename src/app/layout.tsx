import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { DemoModalProvider } from "@/components/demo-modal";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Skillbot — AI-Powered Learning & Placement Platform for Institutions",
  description:
    "One platform for AI-powered training, coding, assessment, and campus hiring. Transform your institution with mock interviews, LMS, proctored exams, and placement automation.",
  keywords: [
    "AI placement platform",
    "campus hiring",
    "mock interviews",
    "coding platform",
    "LMS",
    "proctoring",
    "university training",
    "student assessment",
  ],
  openGraph: {
    title: "Skillbot — AI-Powered Learning & Placement Platform",
    description:
      "One platform for AI-powered training, coding, assessment, and campus hiring.",
    url: "https://skillbot.ai",
    siteName: "Skillbot",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skillbot — AI-Powered Learning & Placement Platform",
    description:
      "One platform for AI-powered training, coding, assessment, and campus hiring.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Skillbot",
              applicationCategory: "EducationalApplication",
              operatingSystem: "Web",
              description:
                "AI-powered training, coding, assessment, and campus hiring platform for institutions.",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                description: "Contact us for pricing",
              },
              creator: {
                "@type": "Organization",
                name: "Skillbot",
                url: "https://skillbot.ai",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased`}>
        <ThemeProvider>
          <DemoModalProvider>{children}</DemoModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
