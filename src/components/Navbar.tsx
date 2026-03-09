"use client";

import { useI18n } from "@/lib/i18n";
import { ShoppingBag, Globe } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export function Navbar() {
    const { t, locale, setLocale } = useI18n();

    const toggleLocale = () => {
        setLocale(locale === "es" ? "en" : "es");
    };

    return (
        <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-gray-200 "
        >
            <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Image
                        src="/logo_loba--navbar.png"
                        alt="Loba Fashion Logo"
                        width={140}
                        height={50}
                        className="object-contain cursor-pointer transition-transform hover:scale-105"
                        priority
                    />
                </div>

                {/* Desktop Nav removed as requested */}

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={toggleLocale}
                        className="flex items-center gap-1.5 text-sm font-medium hover:text-brand-600 transition-colors duration-200 cursor-pointer"
                        aria-label="Toggle language"
                    >
                        <Globe className="w-4 h-4" />
                        <span className="uppercase">{locale}</span>
                    </button>

                    <button className="relative p-2 hover:bg-brand-50 :bg-white/5 rounded-full transition-colors duration-200 cursor-pointer">
                        <ShoppingBag className="w-5 h-5" />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-brand-500 rounded-full"></span>
                    </button>
                </div>
            </div>
        </motion.header>
    );
}
