import Image from "next/image";
import { Product } from "@/data/mockProducts";
import { useI18n } from "@/lib/i18n";
import { ShimmerButton } from "@/registry/magicui/shimmer-button";
import { PixelImage } from "@/registry/magicui/pixel-image";

export function ProductCard({ product }: { product: Product }) {
    const { t } = useI18n();

    const handleBuy = () => {
        const phoneNumber = "17378022228";
        const baseMessage = t.whatsapp.productMessage;
        const message = encodeURIComponent(baseMessage.replace("{name}", product.name).replace("{brand}", product.brand));
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
    };

    return (
        <div className="group flex flex-col bg-background rounded-2xl overflow-hidden border border-gray-200 hover:border-brand-300 transition-colors shadow-sm cursor-pointer h-full relative">
            {product.upcoming && (
                <div className="absolute top-4 right-4 z-[25] bg-amber-500 text-white text-[10px] md:text-xs font-bold px-3 py-1.5 rounded-full shadow-md uppercase tracking-wider border border-amber-600">
                    {t.store.upcoming}
                </div>
            )}

            <div className="relative aspect-[3/4] overflow-hidden bg-brand-50/50 ">
                <PixelImage
                    src={product.image_url}
                    alt={product.name}
                    customGrid={{ rows: 6, cols: 6 }}
                    grayscaleAnimation
                    className="transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
                    {product.category.slice(0, 2).map((cat) => (
                        <span
                            key={cat}
                            className="px-2 py-1 text-xs font-medium bg-white/80 backdrop-blur-sm rounded-full text-brand-800 "
                        >
                            {cat}
                        </span>
                    ))}
                </div>
            </div>

            <div className="p-5 flex flex-col flex-1 relative z-10 bg-background">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif text-lg font-bold text-foreground pr-2">
                        {product.name}
                    </h3>
                    {product.price > 0 && (
                        <span className="font-medium text-brand-600 whitespace-nowrap">
                            ${product.price.toFixed(2)}
                        </span>
                    )}
                </div>

                <p className="text-sm text-slate-500 flex-1 line-clamp-2 mb-4">
                    {product.description}
                </p>

                {product.upcoming ? (
                    <button
                        disabled
                        className="w-full h-12 rounded-[16px] bg-slate-200 text-slate-500 font-semibold cursor-not-allowed"
                    >
                        {t.store.notAvailable}
                    </button>
                ) : (
                    <ShimmerButton
                        onClick={handleBuy}
                        className="w-full h-12"
                        borderRadius="16px"
                        shimmerDuration="2s"
                    >
                        <span className="relative z-10 font-semibold text-white drop-shadow-md">{t.store.addToCart}</span>
                    </ShimmerButton>
                )}
            </div>
        </div>
    );
}
