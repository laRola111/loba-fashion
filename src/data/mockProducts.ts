export interface Product {
    id: string;
    name: string;
    brand: string;
    gender: "female" | "male" | "unisex";
    category: string[];
    price: number;
    image_url: string;
    description: string;
    upcoming?: boolean;
}

export const mockProducts: Product[] = [
    {
        id: "p-01",
        name: "Bamboo Unisex",
        brand: "Madame Chantal / Sassenach",
        gender: "unisex",
        category: ["Fresco", "Equilibrado", "Próximamente"],
        price: 0.00,
        image_url: "/images/bamboo.webp",
        description: "Fragancia que transmite naturalidad y energía con notas verdes y limpias.",
        upcoming: true
    },
    {
        id: "p-02",
        name: "Tabaco Velo de Alquitrán",
        brand: "Madame Chantal / Sassenach",
        gender: "male",
        category: ["Amaderado", "Especiado", "Próximamente"],
        price: 0.00,
        image_url: "/images/tabaco.webp",
        description: "Aroma profundo y envolvente con presencia intensa, cálida y fondo robusto.",
        upcoming: true
    },
    {
        id: "p-03",
        name: "Montanna Savage",
        brand: "Madame Chantal / Montanna Savage",
        gender: "male",
        category: ["Sofisticado", "Intenso", "Próximamente"],
        price: 0.00,
        image_url: "/images/montanna-savage.webp",
        description: "Refleja la fuerza de la naturaleza con notas intensas que evocan metal y cuero.",
        upcoming: true
    },
    {
        id: "p-04",
        name: "Miel de Amor",
        brand: "Madame Chantal",
        gender: "female",
        category: ["Dulce", "Floral"],
        price: 750.00,
        image_url: "/images/miel-de-amor.webp",
        description: "Aroma cálido y reconfortante con acordes florales cremosos y fondo avainillado."
    },
    {
        id: "p-05",
        name: "Fiori Púrpura",
        brand: "Madame Chantal",
        gender: "female",
        category: ["Intenso", "Dulce"],
        price: 750.00,
        image_url: "/images/flori-purpura.webp",
        description: "Mezcla de frescura aromática con un fondo dulce y sensual."
    },
    {
        id: "p-06",
        name: "Agave Destilado",
        brand: "Madame Chantal",
        gender: "unisex",
        category: ["Fresco", "Cítrico"],
        price: 750.00,
        image_url: "/images/agave-destilado.webp",
        description: "Frescura inigualable inspirada en los campos de agave."
    },
    {
        id: "p-07",
        name: "Amada Canela",
        brand: "Madame Chantal",
        gender: "female",
        category: ["Dulce", "Especiado"],
        price: 750.00,
        image_url: "/images/amada-canela.webp",
        description: "Toques cálidos de canela para resaltar la feminidad y dulzura."
    },
    {
        id: "p-08",
        name: "Amar Yaya",
        brand: "Madame Chantal",
        gender: "female",
        category: ["Floral", "Sensual"],
        price: 750.00,
        image_url: "/images/amar-yaya.webp",
        description: "Un tributo a la belleza floral con destellos luminosos."
    },
    {
        id: "p-09",
        name: "Amargo Café",
        brand: "Madame Chantal",
        gender: "male",
        category: ["Amaderado", "Intenso"],
        price: 750.00,
        image_url: "/images/amargo-cafe.webp",
        description: "Fragancia imponente con fuertes notas de granos de café tostado."
    },
    {
        id: "p-10",
        name: "Barrica 1405",
        brand: "Madame Chantal",
        gender: "male",
        category: ["Amaderado", "Elegante"],
        price: 750.00,
        image_url: "/images/barrica-1405.webp",
        description: "Esencia madurada que recuerda a maderas finas y cuero."
    },
    {
        id: "p-11",
        name: "Café Amargo",
        brand: "Madame Chantal",
        gender: "male",
        category: ["Amaderado", "Especiado"],
        price: 750.00,
        image_url: "/images/cafe-amargo.webp",
        description: "Variante intensa de granos seleccionados con toques especiados."
    },
    {
        id: "p-12",
        name: "Palmie",
        brand: "Madame Chantal",
        gender: "female",
        category: ["Fresco", "Floral"],
        price: 750.00,
        image_url: "/images/palmie.webp",
        description: "Aroma jovial y refrescante, ideal para el día a día."
    },
    {
        id: "p-13",
        name: "Santo Cedro",
        brand: "Madame Chantal",
        gender: "male",
        category: ["Amaderado", "Fresco"],
        price: 750.00,
        image_url: "/images/santo-cedro.webp",
        description: "Elegancia pura extraída de la esencia del cedro natural."
    },
    {
        id: "p-14",
        name: "Sueño de Chocolate",
        brand: "Madame Chantal",
        gender: "female",
        category: ["Dulce", "Gourmand"],
        price: 750.00,
        image_url: "/images/sueño-de-chocolate.webp",
        description: "Deliciosa combinación de cacao y vainilla para enamorar."
    }
];
