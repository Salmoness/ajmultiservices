import React from "react";

export default function AboutSection() {
    return (
        <section className=" flex flex-col text-center py-16 bg-white w-full">
            <div className="mb-8 flex flex-col justify-center items-center max-w-4xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-6 lg:text-6xl leading-tight tracking-tight">
                    Your local interior and exterior painters and decorators.
                </h2>

                <p className="text-gray-700 mb-6 leading-relaxed font-semibold tracking-wide text-lg text-center">
                    From painting your home’s interior walls and ceiling, to the external roof and fence, we can do it all. Our attention to detail and artistic vision means that we always provide our clients with decorations that reflect their taste and style.
                    Our team will work with you from concept through to completion to make certain that your space is exactly what you wanted.
                </p>
                <div>
                    <button className="h-14 text-lg mt-4 bg-blue-200 text-gray-700 font-semibold py-2 px-6 rounded-full hover:bg-blue-600 hover:text-white transition">
                        Learn more about us
                    </button>
                </div>
            </div>
            <div className="text-5xl flex justify-evenly items-center bg-blue-300 h-75 w-full">
                <div>Servicio 1</div>
                <div>Servicio 2</div>
                <div>Servicio 3</div>
                <div>Servicio 4</div>
            </div>
        </section>
    );
} 