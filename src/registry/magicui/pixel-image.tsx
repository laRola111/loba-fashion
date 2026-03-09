"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface PixelImageProps {
    src: string;
    alt?: string;
    className?: string;
    customGrid?: { rows: number; cols: number };
    grayscaleAnimation?: boolean;
}

export function PixelImage({
    src,
    alt = "image",
    className,
    customGrid = { rows: 8, cols: 8 },
    grayscaleAnimation = true,
}: PixelImageProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: "-50px" });

    const [grid, setGrid] = useState<{ id: number; delay: number }[]>([]);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined" && window.innerWidth < 768) {
            setIsMobile(true);
            return;
        }

        const totalPixels = customGrid.rows * customGrid.cols;
        const newGrid = Array.from({ length: totalPixels }).map((_, i) => ({
            id: i,
            // Randomize the delay for a more organic pixelated reveal
            delay: Math.random() * 0.5,
        }));
        setGrid(newGrid);
    }, [customGrid.rows, customGrid.cols]);

    if (isMobile) {
        return (
            <div
                ref={containerRef}
                className={cn("relative overflow-hidden w-full h-full bg-slate-100 dark:bg-slate-900", className)}
            >
                <motion.img
                    src={src}
                    alt={alt}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                />
            </div>
        );
    }

    return (
        <div
            ref={containerRef}
            className={cn("relative overflow-hidden w-full h-full bg-slate-100 dark:bg-slate-900", className)}
        >
            {/* The actual image */}
            <motion.img
                src={src}
                alt={alt}
                className="absolute inset-0 w-full h-full object-cover"
                initial={grayscaleAnimation ? { filter: "grayscale(100%)" } : {}}
                animate={
                    isInView
                        ? grayscaleAnimation
                            ? { filter: "grayscale(0%)" }
                            : {}
                        : {}
                }
                transition={{ duration: 1.5, ease: "easeOut" }}
            />

            {/* The overlay grid */}
            <div
                className="absolute inset-0 z-10 grid"
                style={{
                    gridTemplateRows: `repeat(${customGrid.rows}, 1fr)`,
                    gridTemplateColumns: `repeat(${customGrid.cols}, 1fr)`
                }}
            >
                {grid.map((pixel) => (
                    <motion.div
                        key={pixel.id}
                        initial={{ opacity: 1 }}
                        animate={isInView ? { opacity: 0 } : { opacity: 1 }}
                        transition={{ duration: 0.3, delay: pixel.delay, ease: "easeInOut" }}
                        className="w-full h-full bg-background"
                    />
                ))}
            </div>
        </div>
    );
}
