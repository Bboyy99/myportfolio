"use client";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="group">
      <div className="relative flex items-center">
        <div className="flex items-center justify-center">
          {/* Main hexagon */}
          <div className="relative w-10 h-10 transform transition-transform duration-300 group-hover:rotate-12">
            {/* Background hexagon */}
            <div className="absolute inset-0 bg-indigo-600 transform rotate-45 rounded-lg" />
            
            {/* Overlay hexagon for effect */}
            <div className="absolute inset-0 bg-indigo-500 transform rotate-45 rounded-lg opacity-50 translate-x-0.5 translate-y-0.5" />
            
            {/* Text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white font-bold text-lg tracking-wider transform -rotate-12 group-hover:rotate-0 transition-transform duration-300">
                BC
              </span>
            </div>
          </div>
          
          {/* Decorative dots */}
          <div className="absolute -right-1 top-0 flex flex-col gap-1">
            <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
            <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
          </div>
        </div>
      </div>
    </Link>
  );
} 