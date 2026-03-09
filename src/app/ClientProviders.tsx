"use client";

import { ReactNode, useState, useEffect } from "react";
import { I18nProvider } from "@/lib/i18n";
import { SplashLoader } from "@/components/SplashLoader";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function ClientProviders({ children }: { children: ReactNode }) {
    const [splashFinished, setSplashFinished] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Instantly bypass splash for mobile/tablets to prevent white screens
        if (typeof window !== "undefined" && window.innerWidth < 1024) {
            setIsMobile(true);
            setSplashFinished(true);
        }
    }, []);

    // If not mounted yet (SSR context), just render an empty provider wrapper 
    if (!mounted) {
        return (
            <I18nProvider>
                {children}
            </I18nProvider>
        );
    }

    return (
        <I18nProvider>
            {!splashFinished && <SplashLoader onComplete={() => setSplashFinished(true)} />}
            {children}
            <WhatsAppButton />
        </I18nProvider>
    );
}
