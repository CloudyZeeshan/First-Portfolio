"use client";
import React, { useState } from "react";
import "/src/app/globals.css";
import Footer from "../components/Footer";
// import emailjs from "emailjs-com";
import Link from "next/link";

// Define the type for form data
interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle form field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSubmitting(true);

    //   Send email with EmailJS
      emailjs.send('service_xrfxi5n', 'template_0647fby', {
        from_name: formData.name,      // Matches {{from_name}} in the template
        reply_to: formData.email,      // Matches {{reply_to}} in the template
        message: formData.message,     // Matches {{message}} in the template
      }, 'aGp_ldt94_65TG_mr')
        .then(() => {
          setIsSubmitted(true);
          setFormData({ name: '', email: '', message: '' });
          setIsSubmitting(false);
        })
        .catch(() => {
          alert('There was an error sending your message. Please try again.');
          setIsSubmitting(false);
        });
    } else {
      alert('Please fill out all fields.');
    }
  };

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

      <section className="flex justify-center items-center min-h-screen bg-gray-900 py-20 px-6">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-white max-w-md w-full">
          <h2 className="text-3xl font-bold text-blue-500 mb-6">Contact Me</h2>
          {isSubmitted ? (
            <div className="bg-blue-500 p-4 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-2">Thank you for reaching out!</h3>
              <p>I will get back to you as soon as possible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:outline-none"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:outline-none"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:outline-none h-32"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full p-3 rounded-lg font-bold ${isSubmitting ? 'bg-gray-500' : 'bg-blue-500 hover:bg-yellow-500'} transition-colors duration-300`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}