import React, { CSSProperties, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    shimmerColor?: string;
    shimmerSize?: string;
    borderRadius?: string;
    shimmerDuration?: string;
    background?: string;
    className?: string;
    children?: React.ReactNode;
}

export const ShimmerButton = forwardRef<HTMLButtonElement, ShimmerButtonProps>(
    (
        {
            shimmerColor = "#ffffff",
            shimmerSize = "0.05em",
            shimmerDuration = "3s",
            borderRadius = "100px",
            background = "#FF2424", // using brand primary red
            className,
            children,
            ...props
        },
        ref,
    ) => {
        return (
            <button
                style={
                    {
                        "--spread": "90deg",
                        "--shimmer-color": shimmerColor,
                        "--radius": borderRadius,
                        "--speed": shimmerDuration,
                        "--cut": shimmerSize,
                        "--bg": background,
                    } as CSSProperties
                }
                className={cn(
                    "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap px-6 py-3 text-white [background:var(--bg)] [border-radius:var(--radius)] transform-gpu transition-all duration-300 ease-in-out active:translate-y-[1px] hover:scale-[1.02]",
                    className,
                )}
                ref={ref}
                {...props}
            >
                <div className="absolute inset-0 overflow-visible [container-type:size]">
                    <div className="absolute inset-0 h-[100cqh] [aspect-ratio:1] [border-radius:0] [mask:none]">
                        <div className="absolute -inset-full w-auto rotate-0 animate-[shimmer-spin_var(--speed)_linear_infinite] [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]" />
                    </div>
                </div>
                <div className="relative z-10 w-full flex items-center justify-center">{children}</div>
                <div className="absolute [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)] z-[1]" />
            </button>
        );
    },
);

ShimmerButton.displayName = "ShimmerButton";
