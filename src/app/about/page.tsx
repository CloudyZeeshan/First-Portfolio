"use client";
// src/pages/about.tsx
import React, { useState } from "react";
import Image from "next/image";
import "/src/app/globals.css";
import Link from "next/link";
import Footer from "../components/Footer";

export default function About() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const skills = [
    { name: "Typescript", percentage: "60%" },
    { name: "React", percentage: "45%" },
    { name: "Next.js", percentage: "70%" },
    { name: "HTML & CSS", percentage: "60%" },
    { name: "Responsive Design", percentage: "50%" },
    { name: "Git & Version Control", percentage: "75%" },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full bg-transparent flex justify-between items-center px-8 py-4 z-50">
        <div className="text-white text-2xl">My Portfolio</div>
        <div className="hidden md:flex gap-6 text-white">
          <Link href="/" className="hover:text-yellow-400 text-white">Home</Link>
          <Link href="/project" className="hover:text-yellow-400 text-white">Projects</Link>
          <Link href="/about" className="hover:text-yellow-400 text-white">About</Link>
          <Link href="/contact" className="hover:text-yellow-400 text-white">Contact</Link>
        </div>
        <div
          className="md:hidden flex flex-col justify-around items-center w-8 h-6 cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="block h-1 w-full bg-white"></span>
          <span className="block h-1 w-full bg-white"></span>
          <span className="block h-1 w-full bg-white"></span>
        </div>
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-gray-800 flex flex-col items-center py-4 space-y-2 text-white">
            <Link href="/" className="hover:text-yellow-400">Home</Link>
            <Link href="/project" className="hover:text-yellow-400">Projects</Link>
            <Link href="/about" className="hover:text-yellow-400">About</Link>
            <Link href="/contact" className="hover:text-yellow-400">Contact</Link>
          </div>
        )}
      </nav>

      <section className="flex flex-col items-center justify-center min-h-screen bg-gray-900 pt-24">
        <div className="max-w-screen-md mx-4 lg:mx-auto flex flex-col items-center space-y-8 text-white">
          <div className="rounded-full overflow-hidden shadow-lg w-36 h-36">
            <Image src="/image.png" alt="Muhammad Hamza, Web Developer" width={144} height={144} />
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-500 mb-4">About Me</h2>
            <p className="text-lg leading-relaxed">
              Hello! I’m Zeeshan Haider, a passionate web developer focused on crafting engaging and
              user-friendly experiences. With expertise in JavaScript, Next.js, and React, I build
              web applications that are both visually appealing and highly functional.
            </p>
            <p className="text-lg leading-relaxed">
              In my free time, I love exploring new technologies, working on open-source projects, and
              enhancing my skills to stay at the forefront of the industry.
            </p>
          </div>
          <div className="w-full">
            <h3 className="text-2xl text-blue-500 text-center mb-6">Technical Skills</h3>
            <ul className="flex flex-wrap justify-center gap-6 mb-4">
              {skills.map((skill, index) => (
                <li
                  key={index}
                  className="group relative bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg cursor-pointer transform transition-all duration-300 hover:shadow-blue-500/60 hover:shadow-lg hover:-translate-y-1"
                >
                  <span>{skill.name}</span>
                  <span
                    className="absolute left-1/2 bottom-[-1.5rem] transform -translate-x-1/2 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 text-sm bg-green-500 text-white px-2 py-1 rounded-md"
                    style={{
                      boxShadow: "0 0 10px rgba(76, 175, 80, 0.6), 0 0 20px rgba(76, 175, 80, 0.8)"
                    }}
                  >
                    {skill.percentage}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}