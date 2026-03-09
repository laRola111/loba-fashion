import type { Metadata } from "next";
import { Montserrat, Michroma } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
});

const michroma = Michroma({
    weight: "400",
    variable: "--font-michroma",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Loba Fashion | Fragancias que definen tu estilo",
    description: "Descubre aromas exclusivos para dama y caballero. Catálogo de perfumes Premium de Madame Chantal con envíos y compra directa por WhatsApp.",
    keywords: ["Perfumes", "Loba Fashion", "Madame Chantal", "Fragancias", "Lociones", "Comprar perfumes"],
    openGraph: {
        title: "Loba Fashion | Perfumes y Fragancias",
        description: "Catálogo de perfumes Premium para dama y caballero.",
        url: "https://lobafashion.com",
        siteName: "Loba Fashion",
        images: [
            {
                url: "/pixel-image-demo.jpg", // Placeholder until real logo/banner is uploaded
                width: 1200,
                height: 630,
                alt: "Loba Fashion Banner",
            },
        ],
        locale: "es_MX",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export const viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
};

import { ClientProviders } from "./ClientProviders";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${montserrat.variable} ${michroma.variable} antialiased selection:bg-brand-500 selection:text-white`}>
                <ClientProviders>
                    {children}
                </ClientProviders>
            </body>
        </html>
    );
}
