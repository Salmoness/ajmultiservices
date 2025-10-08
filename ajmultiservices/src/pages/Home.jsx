import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/About";
import Testimonials from "@/components/TestimonialsSection";

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <div className="bg-gray-900 text-center p-4 text-lg text-gray-200">
                Te pintamos tu casita
            </div>
            <AboutSection />
            <Testimonials />
            <div className="text-black h-40 bg-emerald-300">
                Get a free quote again
            </div>
            <div className="text-black h-20 bg-purple-200">
                Footer section copyright info bla bla
            </div>
        </>
    );
}