"use client";

import { useI18n } from "@/lib/i18n";
import { Menu, X, Globe } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function Navbar() {
    const { t, locale, setLocale } = useI18n();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/nav-logo.png"
                        alt="Loba Fashion Logo"
                        width={140}
                        height={50}
                        className="object-contain cursor-pointer transition-transform hover:scale-105"
                    />
                </div>

                {/* Desktop Nav removed as requested */}

                {/* Actions */}
                <div className="flex items-center gap-2 md:gap-4">
                    <button
                        onClick={toggleLocale}
                        className="flex items-center gap-1.5 text-sm font-medium hover:text-brand-600 transition-colors duration-200 cursor-pointer p-2"
                        aria-label="Toggle language"
                    >
                        <Globe className="w-4 h-4 md:w-5 md:h-5" />
                        <span className="uppercase text-xs md:text-sm">{locale}</span>
                    </button>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-2 hover:bg-brand-50 rounded-full transition-colors duration-200 cursor-pointer"
                        aria-label="Menu"
                    >
                        {isMenuOpen ? <X className="w-5 h-5 md:w-6 md:h-6" /> : <Menu className="w-5 h-5 md:w-6 md:h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Categories Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="bg-white border-t border-gray-100 overflow-hidden shadow-lg"
                    >
                        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-2">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 px-2">Categorías</span>
                            {[
                                { name: "Todas las Fragancias", hash: "#store", filter: "all" },
                                { name: "Dama", hash: "#store", filter: "female" },
                                { name: "Caballero", hash: "#store", filter: "male" },
                                { name: "Unisex", hash: "#store", filter: "unisex" },
                            ].map((cat) => (
                                <a
                                    key={cat.name}
                                    href={cat.hash}
                                    onClick={() => {
                                        setIsMenuOpen(false);
                                        window.dispatchEvent(new CustomEvent('setGlobalFilter', { detail: cat.filter }));
                                    }}
                                    className="px-4 py-3 rounded-lg hover:bg-brand-50 font-medium text-slate-700 hover:text-brand-600 transition-colors text-left"
                                >
                                    {cat.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
