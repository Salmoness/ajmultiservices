import React from "react";

export default function Header() {
    return (
        <header className="sticky top-0 z-51 bg-black/80 backdrop-blur-md px-6 py-8 flex justify-between items-center border-b border-gray-800">
            <h1 className="text-2xl font-bold tracking-widest">AJ MULTISERVICES</h1>
            <nav className="space-x-6">
                <a href="#" className="hover:text-gray-400">Home</a>
                <a href="#" className="hover:text-gray-400">Gallery</a>
                <a href="#" className="hover:text-gray-400">Contact</a>
            </nav>
        </header>
    );
}