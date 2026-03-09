"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type Locale = "es" | "en";

export const translations = {
    es: {
        nav: {
            women: "Dama",
            men: "Caballero",
            about: "Nosotros",
            contact: "Contacto",
        },
        hero: {
            title: "Fragancias que definen tu estilo.",
            subtitle: "Descubre aromas exclusivos que capturan tu esencia. Premium, elegantes y únicos.",
            cta: "Ver Catálogo",
        },
        store: {
            title: "Nuestro Catálogo",
            search: "Buscar perfume...",
            all: "Todos",
            women: "Dama",
            men: "Caballero",
            addToCart: "Añadir al Carrito",
            price: "Precio",
            categories: "Categorías",
            emptyState: "No se encontraron perfumes con ese criterio.",
            upcoming: "Próximamente",
            notAvailable: "No disponible",
        },
        footer: {
            rights: "Todos los derechos reservados.",
        },
        splash: {
            skip: "Saltar Intro",
            noVideo: "Tu navegador no soporta el formato de video.",
        },
        whatsapp: {
            generalMessage: "¡Hola! Me interesan los productos de Loba Fashion. ¿Me pueden ayudar a finalizar mi compra?",
            productMessage: "¡Hola! Me interesa agregar a mi compra el producto: *{name}* ({brand}). ¿Me podrían asistir?",
        }
    },
    en: {
        nav: {
            women: "Women",
            men: "Men",
            about: "About Us",
            contact: "Contact",
        },
        hero: {
            title: "Fragrances that define your style.",
            subtitle: "Discover exclusive scents that capture your essence. Premium, elegant and unique.",
            cta: "View Catalog",
        },
        store: {
            title: "Our Catalog",
            search: "Search perfume...",
            all: "All",
            women: "Women",
            men: "Men",
            addToCart: "Add to Cart",
            price: "Price",
            categories: "Categories",
            emptyState: "No perfumes found with that criteria.",
            upcoming: "Coming Soon",
            notAvailable: "Not Available",
        },
        footer: {
            rights: "All rights reserved.",
        },
        splash: {
            skip: "Skip Intro",
            noVideo: "Your browser does not support the video tag.",
        },
        whatsapp: {
            generalMessage: "Hello! I am interested in Loba Fashion products. Can you help me finish my purchase?",
            productMessage: "Hello! I am interested in adding the product: *{name}* ({brand}) to my purchase. Can you assist me?",
        }
    }
};

type Translations = typeof translations.es;

interface I18nContextType {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    t: Translations;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
    const [locale, setLocale] = useState<Locale>("es");

    return (
        <I18nContext.Provider value={{ locale, setLocale, t: translations[locale] }}>
            {children}
        </I18nContext.Provider>
    );
}

export function useI18n() {
    const context = useContext(I18nContext);
    if (!context) {
        throw new Error("useI18n must be used within an I18nProvider");
    }
    return context;
}
