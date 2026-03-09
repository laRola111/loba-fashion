import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { StoreSection } from "@/components/StoreSection";
import { ReviewsSection } from "@/components/ReviewsSection";

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col relative w-full overflow-x-hidden">
            <Navbar />
            <Hero />
            <div className="flex-1 bg-background">
                <StoreSection />
                <ReviewsSection />
            </div>
            <Footer />
        </main>
    );
}
