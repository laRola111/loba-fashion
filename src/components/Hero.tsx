"use client";

import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { ShimmerButton } from "@/registry/magicui/shimmer-button";

export function Hero() {
    const { t } = useI18n();

    return (
        <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-brand-50 pt-16">
            {/* Decorative Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 z-0 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-200/30 blur-3xl rounded-full z-0 pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-6 inline-block"
                >
                    <span className="px-4 py-1.5 rounded-full border border-brand-300 bg-white/50 backdrop-blur-sm text-sm font-medium text-brand-700 ">
                        Premium Collection
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6 leading-tight"
                >
                    {t.hero.title}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto"
                >
                    {t.hero.subtitle}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex justify-center"
                >
                    <a href="#store">
                        <ShimmerButton className="shadow-2xl px-12 h-14" shimmerDuration="2.5s">
                            <span className="relative z-10 text-center font-bold tracking-tight text-white lg:text-lg">
                                {t.hero.cta}
                            </span>
                        </ShimmerButton>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
