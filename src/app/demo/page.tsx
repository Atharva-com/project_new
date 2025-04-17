"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, LogIn, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function DemoPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleDemoRequest = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      // Reset form
      setEmail("");
      setPassword("");
      setName("");
      setCompany("");
    }, 1500);
  };

  return (
    <>
      <section className="bg-gray-50 py-12">
        <div className="container-custom">
          <div className="flex flex-col items-center">
            <nav className="flex py-3 mb-6" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <Link href="/" className="text-gray-700 hover:text-primary">
                    Home
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                    <span className="ml-1 font-medium text-gray-500 md:ml-2">Demo</span>
                  </div>
                </li>
              </ol>
            </nav>
            <h1 className="page-title text-center">Demo & Access Portal</h1>
            <p className="text-xl text-center text-gray-600 max-w-3xl">
              Experience the Cloud-Based Document Management System firsthand with our
              interactive demo or log in to access the full system.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">System Login</h2>
              <p className="text-gray-600 mb-6">
                Current users can access the Cloud DMS system using their credentials below.
              </p>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="your.email@company.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="••••••••"
                    required
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                      Remember me
                    </label>
                  </div>
                  
                  <div className="text-sm">
                    <a href="#" className="text-primary hover:text-primary/80 font-medium">
                      Forgot password?
                    </a>
                  </div>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center items-center btn-primary"
                  >
                    <LogIn className="mr-2 h-5 w-5" />
                    Sign In
                  </button>
                </div>
              </form>
              
              <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                <p className="text-sm text-gray-600">
                  Need help logging in? Contact your system administrator or
                  <Link href="/contact" className="text-primary hover:text-primary/80 font-medium ml-1">
                    contact support
                  </Link>
                  .
                </p>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Request Demo Access</h2>
              <p className="text-gray-600 mb-6">
                Want to explore the system before implementation? Fill out the form below to request
                access to our interactive demo environment with sample data.
              </p>
              
              {success ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 border border-green-200 rounded-md p-6 text-center"
                >
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                    <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-green-800 mb-2">Demo Request Submitted!</h3>
                  <p className="text-green-700">
                    Thank you for your interest! We'll send your demo login credentials to your email shortly.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="mt-4 text-sm font-medium text-green-700 hover:text-green-500"
                  >
                    Submit another request
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleDemoRequest} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="demo-email" className="block text-sm font-medium text-gray-700 mb-1">
                      Work Email Address
                    </label>
                    <input
                      type="email"
                      id="demo-email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="your.email@company.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Acme Inc."
                      required
                    />
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="w-full btn-primary flex justify-center items-center"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        <>
                          Request Demo Access
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="page-section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-title">Interactive System Preview</h2>
            <p className="text-gray-600 text-lg mb-8">
              See how the Cloud-Based Document Management System works with our
              interactive preview of key features.
            </p>
          </div>
          
          <div className="bg-white rounded-lg overflow-hidden shadow-md mb-8">
            <div className="relative h-[400px] md:h-[500px]">
              <Image 
                src="https://images.unsplash.com/photo-1616511011080-263aadad714b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80"
                fill
                alt="Cloud DMS Interface Preview"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center p-6">
                <a 
                  href="#"
                  className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors inline-flex items-center"
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Watch Interface Tour
                </a>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Modern, Intuitive Interface</h3>
              <p className="text-gray-600">
                Our cloud-based DMS features a clean, modern interface designed for ease of use.
                The dashboard provides quick access to recent documents, favorites, and key tools.
                Customizable views allow each user to optimize their workflow.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Document Search & Filters</h3>
                <p className="text-gray-600 mb-4">
                  Powerful search capabilities allow you to find documents instantly using keywords,
                  metadata, or content.
                </p>
                <a href="#" className="text-primary hover:underline flex items-center text-sm">
                  <span>Learn more</span>
                  <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Collaboration Tools</h3>
                <p className="text-gray-600 mb-4">
                  Comment, share, and collaborate on documents in real-time with team members
                  across your organization.
                </p>
                <a href="#" className="text-primary hover:underline flex items-center text-sm">
                  <span>Learn more</span>
                  <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Mobile Accessibility</h3>
                <p className="text-gray-600 mb-4">
                  Access your documents from anywhere using our mobile-friendly interface
                  or dedicated mobile applications.
                </p>
                <a href="#" className="text-primary hover:underline flex items-center text-sm">
                  <span>Learn more</span>
                  <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to See More?
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Contact our team for a personalized demonstration or to discuss how the
              Cloud-Based Document Management System can be customized for your organization.
            </p>
            <Link href="/contact" className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors inline-block">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
