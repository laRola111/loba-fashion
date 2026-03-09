"use client";

import { ReactNode, useState, useEffect } from "react";
import { I18nProvider } from "@/lib/i18n";
import { SplashLoader } from "@/components/SplashLoader";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function ClientProviders({ children }: { children: ReactNode }) {
    const [splashFinished, setSplashFinished] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // If not mounted yet (SSR context), just render an empty provider wrapper 
    // to prevent hydration mismatch and avoid blocking the server with the video
    if (!mounted) {
        return (
            <I18nProvider>
                <div className="opacity-0 h-screen overflow-hidden">
                    {children}
                </div>
            </I18nProvider>
        );
    }

    return (
        <I18nProvider>
            {!splashFinished && <SplashLoader onComplete={() => setSplashFinished(true)} />}
            <div className={`transition-opacity duration-1000 ${splashFinished ? 'opacity-100' : 'opacity-0 h-screen overflow-hidden'}`}>
                {children}
                <WhatsAppButton />
            </div>
        </I18nProvider>
    );
}
