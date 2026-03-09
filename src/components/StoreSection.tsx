"use client";

import { useState, useMemo, useEffect } from "react";
import { mockProducts } from "@/data/mockProducts";
import { ProductCard } from "@/components/ProductCard";
import { useI18n } from "@/lib/i18n";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

export function StoreSection() {
    const { t } = useI18n();
    const [search, setSearch] = useState("");
    const [genderFilter, setGenderFilter] = useState<"all" | "female" | "male" | "unisex">("all");

    useEffect(() => {
        const handleGlobalFilter = (e: Event) => {
            const customEvent = e as CustomEvent;
            setGenderFilter(customEvent.detail);
        };
        window.addEventListener('setGlobalFilter', handleGlobalFilter);
        return () => window.removeEventListener('setGlobalFilter', handleGlobalFilter);
    }, []);

    const filteredProducts = useMemo(() => {
        return mockProducts.filter((product) => {
            const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase()) ||
                product.category.some(c => c.toLowerCase().includes(search.toLowerCase()));
            const matchesGender = genderFilter === "all" || product.gender === genderFilter;

            return matchesSearch && matchesGender;
        });
    }, [search, genderFilter]);

    return (
        <section id="store" className="py-24 max-w-7xl mx-auto px-4">
            <div className="mb-12 text-center">
                <h2 className="text-4xl font-serif font-bold text-foreground mb-4">{t.store.title}</h2>
                <div className="flex justify-center mt-2 w-16 h-1 bg-brand-400 mx-auto rounded-full" />
            </div>

            <div className="flex flex-col md:flex-row gap-8 mb-12 items-center justify-between bg-background p-4 rounded-3xl border border-gray-200 shadow-sm">

                {/* Search */}
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                        type="text"
                        placeholder={t.store.search}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 rounded-2xl bg-slate-50 border-none outline-none focus:ring-2 focus:ring-brand-500/50 transition-shadow text-foreground placeholder:text-slate-400"
                    />
                </div>

                {/* Filters */}
                <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                    <button
                        onClick={() => setGenderFilter("all")}
                        className={`px-6 py-2.5 rounded-xl font-medium whitespace-nowrap transition-colors duration-200 cursor-pointer ${genderFilter === "all"
                            ? "bg-brand-600 text-white shadow-md shadow-brand-500/20"
                            : "bg-slate-50 text-slate-600 hover:bg-slate-100 :bg-white/10"
                            }`}
                    >
                        {t.store.all}
                    </button>
                    <button
                        onClick={() => setGenderFilter("female")}
                        className={`px-6 py-2.5 rounded-xl font-medium whitespace-nowrap transition-colors duration-200 cursor-pointer ${genderFilter === "female"
                            ? "bg-brand-600 text-white shadow-md shadow-brand-500/20"
                            : "bg-slate-50 text-slate-600 hover:bg-slate-100 :bg-white/10"
                            }`}
                    >
                        {t.store.women}
                    </button>
                    <button
                        onClick={() => setGenderFilter("male")}
                        className={`px-6 py-2.5 rounded-xl font-medium whitespace-nowrap transition-colors duration-200 cursor-pointer ${genderFilter === "male"
                            ? "bg-brand-600 text-white shadow-md shadow-brand-500/20"
                            : "bg-slate-50 text-slate-600 hover:bg-slate-100 :bg-white/10"
                            }`}
                    >
                        {t.store.men}
                    </button>
                </div>
            </div>

            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                    {filteredProducts.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                        >
                            <ProductCard product={product} />
                        </motion.div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-24 text-slate-500 text-lg">
                    No se encontraron perfumes con ese criterio.
                </div>
            )}
        </section>
    );
}
