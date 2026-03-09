"use client";

import { cn } from "@/lib/utils";
import { Marquee } from "@/registry/magicui/marquee";

const reviews = [
    {
        name: "María Fernanda",
        username: "@mafer_estilo",
        body: "Me encantó el perfume de dama que pedí. Floral y dulce justo como me gusta. Huele riquísimo todo el día.",
    },
    {
        name: "Carlos",
        username: "@carlosj_90",
        body: "Llegó súper rápido y la fragancia maderosa está excelente. Volveré a comprar seguro.",
    },
    {
        name: "Diana T.",
        username: "@dianat",
        body: "Huele a producto de lujo absoluto y la atención por WhatsApp fue muy amable, 100% recomendados.",
    },
    {
        name: "Andrea",
        username: "@andre_lovey",
        body: "¡Qué maravilla de empaque! El de caballero huele muy elegante, ideal para un regalo especial.",
    },
    {
        name: "Santiago",
        username: "@santi.p.g",
        body: "Es la segunda vez que pido el cítrico y me dura bastantes horas en la piel. Buena calidad / precio.",
    },
    {
        name: "Valeria Guzmán",
        username: "@val.guzman",
        body: "Me sorprendió la calidad de la fragancia. Tiene un toque avainillado súper sofisticado. Recomendadísimo.",
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    name,
    username,
    body,
}: {
    name: string;
    username: string;
    body: string;
}) => {
    return (
        <figure
            className={cn(
                "relative h-auto w-64 md:w-80 cursor-pointer overflow-hidden rounded-2xl border p-5",
                "border-brand-200 bg-brand-50/20 hover:bg-brand-50/60 transition-colors shadow-sm"
            )}
        >
            <div className="flex flex-row items-center gap-3 mb-3">
                {/* Usamos logo de Loba Fashion como avatar genérico para la marca o simplemente la inicial */}
                <div className="w-10 h-10 rounded-full bg-brand-200 flex items-center justify-center text-brand-800 font-bold font-serif">
                    {name.charAt(0)}
                </div>
                <div className="flex flex-col">
                    <figcaption className="text-sm font-bold text-foreground font-serif">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium text-slate-500">{username}</p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm text-slate-700 leading-relaxed transition-colors duration-200">
                "{body}"
            </blockquote>
        </figure>
    );
};

export function ReviewsSection() {
    return (
        <section className="py-24 bg-brand-50/30 border-t border-gray-100">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
                    Lo que dicen nuestros clientes
                </h2>
                <p className="text-slate-500 max-w-2xl mx-auto">
                    Descubre las experiencias de quienes ya probaron las fragancias de Loba Fashion.
                </p>
            </div>

            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-transparent">
                <Marquee pauseOnHover className="[--duration:25s]">
                    {firstRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:25s] mt-4">
                    {secondRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>

                {/* Gradient Fades for standard Marquee feel */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 max-w-xs bg-gradient-to-r from-brand-50/50 to-transparent"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 max-w-xs bg-gradient-to-l from-brand-50/50 to-transparent"></div>
            </div>
        </section>
    );
}
