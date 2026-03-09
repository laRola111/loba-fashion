"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import Image from "next/image";

export function SplashLoader({ onComplete }: { onComplete: () => void }) {
    const [isPlaying, setIsPlaying] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);
    const { t } = useI18n();

    useEffect(() => {
        // Optional fallback: If the video doesn't play automatically or get stuck, 
        // complete after 7 seconds max (adjust based on actual video length)
        const fallbackTimer = setTimeout(() => {
            handleComplete();
        }, 7000);

        return () => clearTimeout(fallbackTimer);
    }, []);

    const handleComplete = () => {
        if (isPlaying) {
            setIsPlaying(false);
            // Wait for exit animation to finish before removing from DOM
            setTimeout(onComplete, 800);
        }
    };

    return (
        <AnimatePresence>
            {isPlaying && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
                >
                    <div className="absolute top-8 left-8 z-[110]">
                        <Image
                            src="/logo_loba-web.png"
                            alt="Loba Fashion"
                            width={120}
                            height={40}
                            className="object-contain"
                            priority
                        />
                    </div>
                    <div className="relative w-full h-full max-w-4xl max-h-[80vh] flex items-center justify-center">
                        <video
                            ref={videoRef}
                            autoPlay
                            muted
                            playsInline
                            onEnded={handleComplete}
                            className="w-full h-full object-contain"
                        >
                            <source src="/loba-web-intro.mp4" type="video/mp4" />
                            {t.splash.noVideo}
                        </video>
                    </div>

                    {/* Skip button for development or impatient users */}
                    <button
                        onClick={handleComplete}
                        className="absolute bottom-8 right-8 px-4 py-2 text-sm text-slate-400 hover:text-brand-600 transition-colors bg-white/50 backdrop-blur-sm rounded-full cursor-pointer"
                    >
                        {t.splash.skip}
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
