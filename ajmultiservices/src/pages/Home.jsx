import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/About";
import Testimonials from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import { Button, buttonVariants } from "@/components/ui/button";
import { Link } from "react-router";

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
            <div className="flex flex-col justify-center items-center text-black bg-emerald-800">
                <div className="flex flex-col justify-center items-center p-20">
                    <h3 className="text-3xl font-semibold tracking-wide text-white">Contact us for a free quote!</h3>
                    <Link to="/quote" className="mt-12 mb-4">
                        <Button className="cursor-pointer transition-all duration-200 hover:bg-gray-200 hover:text-black hover" variant="" size="lg">Get a Quote</Button>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
}