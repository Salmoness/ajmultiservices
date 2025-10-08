import React from "react";
import { Button } from "./ui/button";

export default function Footer() {
    return (
        <div className="divide-y z-51 bg-black/80 backdrop-blur-md px-6 py-6 flex flex-col justify-between items-center border-b border-gray-800">
            <div className="p-4 pb-8 flex justify-between items-center w-full">
                <div className="flex flex-col space-x-6 font-light tracking-widest">
                    <p className="">321 111 1111</p>
                    <p className="">Alejandro Martinez</p>
                    <p className="">AJ Multiservices LLC</p>
                </div>            
                <h1 className="text-2xl font-bold tracking-widest">AJ MULTISERVICES</h1>
            </div>
            <div className="flex justify-between items-center w-full pt-6 text-sm text-gray-300 space-x-6">
                <p className="text-sm font-light tracking-widest">&copy; 2024 AJ Multiservices. All rights reserved.</p>
                <div className="flex space-x-4 font-light tracking-wide">
                    <a href="">Privacy Policy</a>
                    <a href="">Terms and Conditions</a>
                    <a href="">Website Disclaimer</a>
                </div>
            </div>
        </div>
    );
}