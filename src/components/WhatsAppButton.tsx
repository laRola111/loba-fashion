"use client";

import { MessageCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function WhatsAppButton() {
    const { t } = useI18n();
    // Teléfono de la marca: (737) 802-2228
    const phoneNumber = "17378022228";
    const message = encodeURIComponent(t.whatsapp.generalMessage);

    return (
        <a
            href={`https://wa.me/${phoneNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-[90] flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20bd5a] hover:scale-110 transition-all duration-300"
            aria-label="Contactar por WhatsApp"
        >
            <MessageCircle className="w-7 h-7" />
        </a>
    );
}
