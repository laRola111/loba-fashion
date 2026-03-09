"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import Image from "next/image";

export function SplashLoader({ onComplete }: { onComplete: () => void }) {
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const { t } = useI18n();

    useEffect(() => {
        // Detect mobile layout to render the solid logo instead of video
        if (typeof window !== "undefined" && window.innerWidth < 1024) {
            setIsMobile(true);
            const mobileTimer = setTimeout(() => {
                handleComplete();
            }, 2500);
            return () => clearTimeout(mobileTimer);
        }

        // Desktop video timeout
        const fallbackTimer = setTimeout(() => {
            handleComplete();
        }, 7000);

        return () => clearTimeout(fallbackTimer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                    {!isMobile && (
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
                    )}

                    <div className="relative w-full h-full max-w-4xl max-h-[80vh] flex items-center justify-center p-4">
                        {isMobile ? (
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <Image
                                    src="/logo_loba-web.png"
                                    alt="Loba Fashion"
                                    width={280}
                                    height={100}
                                    className="object-contain"
                                    priority
                                />
                            </motion.div>
                        ) : (
                            <video
                                ref={videoRef}
                                autoPlay
                                muted
                                playsInline
                                webkit-playsinline="true"
                                preload="auto"
                                onEnded={handleComplete}
                                className="w-full h-full object-contain"
                            >
                                <source src="/loba-web-intro.mp4" type="video/mp4" />
                                {t.splash.noVideo}
                            </video>
                        )}
                    </div>

                    {/* Skip button for development or impatient users */}
                    <button
                        onClick={handleComplete}
                        className="absolute bottom-12 right-6 md:bottom-8 md:right-8 px-4 py-2 text-sm text-slate-400 hover:text-brand-600 transition-colors bg-white/50 backdrop-blur-sm rounded-full cursor-pointer"
                    >
                        {t.splash.skip}
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
