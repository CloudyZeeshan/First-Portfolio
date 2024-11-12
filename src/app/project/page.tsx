"use client";
import React, { useState } from "react";
import Link from "next/link";
import "/src/app/globals.css";
import Footer from "../components/Footer";
import Image from "next/image";

export default function Projects() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center fixed w-full h-16 bg-transparent px-8 z-50">
        <h1 className="text-2xl text-white">My Portfolio</h1>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-yellow-500 text-white">Home</Link>
          <Link href="/project" className="hover:text-yellow-500 text-white">Projects</Link>
          <Link href="/about" className="hover:text-yellow-500 text-white">About</Link>
          <Link href="/contact" className="hover:text-yellow-500 text-white">Contact</Link>
        </div>
        <div className="md:hidden cursor-pointer" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <div className="w-6 h-1 bg-white mb-1"></div>
          <div className="w-6 h-1 bg-white mb-1"></div>
          <div className="w-6 h-1 bg-white"></div>
        </div>
        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-gray-800 p-5 flex flex-col space-y-4 md:hidden">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link href="/project" onClick={() => setIsMobileMenuOpen(false)}>Projects</Link>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          </div>
        )}
      </nav>

      <section className="flex flex-col items-center justify-center min-h-screen bg-gray-900 py-20 px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-blue-500 mb-4">My Projects</h2>
          <p className="text-lg text-gray-300">A collection of my recent works and web development projects.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
          {/* Project 1 */}
          <Link href="https://weather-widget-kappa.vercel.app/" target="_blank">
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer">
              <Image src="/project1.jpg" alt="Weather Widget" className="w-full h-56 object-cover rounded-lg mb-4" width={300} height={300}/>
              <h3 className="text-2xl text-white font-bold mb-2">Weather Widget</h3>
              <p className="text-gray-400">Real-time weather details in a card.</p>
            </div>
          </Link>

          {/* Project 2 */}
          <Link href="https://count-down-blue-six.vercel.app/" target="_blank">
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer">
              <Image src="/project2.jpg" alt="Countdown Timer" className="w-full h-56 object-cover rounded-lg mb-4" width={300} height={300}/>
              <h3 className="text-2xl text-white font-bold mb-2">Countdown Timer</h3>
              <p className="text-gray-400">Countdown timer for upcoming events.</p>
            </div>
          </Link>

          {/* Project 3 */}
          <Link href="https://todo-list-blond-two.vercel.app/" target="_blank">
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer">
              <Image src="/project3.jpg" alt="Project Three" className="w-full h-56 object-cover rounded-lg mb-4" width={300} height={300}/>
              <h3 className="text-2xl text-white font-bold mb-2">Todo List</h3>
              <p className="text-gray-400">A simple todo list application.</p>
            </div>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}