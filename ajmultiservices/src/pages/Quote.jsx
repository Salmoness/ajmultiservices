import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/About";
import Testimonials from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import { Button, buttonVariants } from "@/components/ui/button";

export default function Quote() {
    return (
        <>
            <Header />
            <section className="relative bg-gray-900 text-white overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-40"
                    style={{
                    backgroundImage: "url('https://source.unsplash.com/1600x900/?technology,futuristic')"
                    }}
                ></div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-6 pb-24 pt-22 flex flex-col items-center text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                        Quote Request
                    </h1>
                    <p className="mt-6 text-lg sm:text-xl max-w-2xl text-gray-200">
                        Get in touch with us today for a free quote. You can call us on the below phone number during business hours or fill out the form and we will be in touch as soon as possible.
                    </p>

                    {/* Call-to-Action Buttons */}
                    <div className="mt-16 flex flex-col gap-4 text-gray-400">
                        <a
                            href="tel:3211111111"
                            className="flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-2xl rounded-md transition"
                        >
                            <svg className="mr-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                            </svg>
                            <p>
                                +1 407 881 5267
                            </p>
                        </a>
                        <p>Monday to Friday 8am-5pm</p>
                    </div>
                </div>
            </section>
            <QuoteForm />
            
            <Footer />
        </>
    );
}