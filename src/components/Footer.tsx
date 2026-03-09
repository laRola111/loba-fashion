"use client";

import { useI18n } from "@/lib/i18n";

export function Footer() {
    const { t } = useI18n();

    return (
        <footer className="w-full border-t border-gray-200 bg-background py-12">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-col items-center md:items-start">
                    <span className="font-serif text-2xl font-bold text-brand-600 ">
                        Loba Fashion
                    </span>
                    <p className="text-sm text-slate-500 mt-2">
                        © {new Date().getFullYear()} Loba Fashion. {t.footer.rights}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                        Creada por <a href="https://ruedalarolamedia.com/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-600 transition-colors font-medium">Rueda la Rola Media</a> año 2026.
                    </p>
                </div>

                <div className="flex gap-6 text-sm text-slate-600 ">
                    <a href="#" className="hover:text-brand-600 transition-colors">Instagram</a>
                    <a href="#" className="hover:text-brand-600 transition-colors">WhatsApp</a>
                    <a href="#" className="hover:text-brand-600 transition-colors">TikTok</a>
                </div>
            </div>
        </footer>
    );
}
