import React from "react";
import { Button } from "./ui/button";

export default function Header() {
    return (
        <header className="sticky top-0 z-51 bg-black/80 backdrop-blur-md px-6 py-8 flex justify-between items-center border-b border-gray-800">
            <h1 className="text-2xl font-bold tracking-widest">AJ MULTISERVICES</h1>
            <nav className="space-x-6 font-bold tracking-wider">
                <Button href="#" variant="ghost" className="hover:text-gray-700">Home</Button>
                <Button href="#" variant="ghost" className="hover:text-gray-700">Gallery</Button>
                <Button href="#" variant="ghost" className="hover:text-gray-700">Contact</Button>
            </nav>
            <Button variant="secondary" size="lg" className="cursor-pointer">Get a free quote</Button>
        </header>
    );
}