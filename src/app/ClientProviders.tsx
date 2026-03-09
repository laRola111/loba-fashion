"use client";

import { ReactNode, useState } from "react";
import { I18nProvider } from "@/lib/i18n";
import { SplashLoader } from "@/components/SplashLoader";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function ClientProviders({ children }: { children: ReactNode }) {
    const [splashFinished, setSplashFinished] = useState(false);

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
