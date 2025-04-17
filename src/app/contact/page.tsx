"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight, Mail, Phone, MapPin, Send, FileText, Users, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [isInterested, setIsInterested] = useState<string>("full-features");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      // Reset form
      setName("");
      setEmail("");
      setCompany("");
      setMessage("");
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
                    <span className="ml-1 font-medium text-gray-500 md:ml-2">Contact</span>
                  </div>
                </li>
              </ol>
            </nav>
            <h1 className="page-title text-center">Contact Us</h1>
            <p className="text-xl text-center text-gray-600 max-w-3xl">
              Interested in a full walkthrough or implementation support? 
              Fill out the form and our team will reach out with more information.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <h2 className="text-xl font-semibold mb-6 text-gray-800">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Email</h3>
                      <p className="text-gray-600">info@docunimbus.io</p>
                      <p className="text-gray-600">support@docunimbus.io</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Phone</h3>
                      <p className="text-gray-600">Sales: (123) 456-7890</p>
                      <p className="text-gray-600">Support: (123) 456-7891</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Address</h3>
                      <p className="text-gray-600">
                        DocuNimbus Headquarters<br />
                        123 Cloud Avenue<br />
                        Suite 200<br />
                        San Francisco, CA 94105
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 mt-6 pt-6">
                  <h3 className="font-medium text-gray-800 mb-3">Business Hours</h3>
                  <p className="text-gray-600 mb-1">Monday - Friday: 9:00 AM - 5:00 PM PT</p>
                  <p className="text-gray-600">Support available 24/7 for enterprise clients</p>
                </div>
              </div>
              
              <div className="bg-primary text-white rounded-lg shadow-md p-6 mt-6">
                <h3 className="text-lg font-semibold mb-4">Try Our Demo</h3>
                <p className="opacity-90 mb-4">
                  Experience DocuNimbus firsthand with our interactive demo environment.
                </p>
                <a 
                  href="https://demo.docunimbus.io" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-primary hover:bg-gray-100 px-4 py-2 rounded-md font-medium transition-colors inline-flex items-center text-sm"
                >
                  Launch Demo
                </a>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <h2 className="text-xl font-semibold mb-6 text-gray-800">Request More Information</h2>
                
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
                    <h3 className="text-lg font-medium text-green-800 mb-2">Request Received!</h3>
                    <p className="text-green-700">
                      Thank you for your interest in DocuNimbus. A member of our team will contact you
                      within 24 hours with the information you requested.
                    </p>
                    <button
                      onClick={() => setSuccess(false)}
                      className="mt-4 text-sm font-medium text-green-700 hover:text-green-500"
                    >
                      Submit another request
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Name
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
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Work Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="your.email@company.com"
                          required
                        />
                      </div>
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
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        I'm interested in:
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id="full-features"
                            name="interest"
                            value="full-features"
                            checked={isInterested === "full-features"}
                            onChange={() => setIsInterested("full-features")}
                            className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                          />
                          <label htmlFor="full-features" className="ml-2 block text-sm text-gray-700">
                            Complete feature list
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id="pricing"
                            name="interest"
                            value="pricing"
                            checked={isInterested === "pricing"}
                            onChange={() => setIsInterested("pricing")}
                            className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                          />
                          <label htmlFor="pricing" className="ml-2 block text-sm text-gray-700">
                            Pricing information
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id="implementation"
                            name="interest"
                            value="implementation"
                            checked={isInterested === "implementation"}
                            onChange={() => setIsInterested("implementation")}
                            className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                          />
                          <label htmlFor="implementation" className="ml-2 block text-sm text-gray-700">
                            Implementation process
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id="consultation"
                            name="interest"
                            value="consultation"
                            checked={isInterested === "consultation"}
                            onChange={() => setIsInterested("consultation")}
                            className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                          />
                          <label htmlFor="consultation" className="ml-2 block text-sm text-gray-700">
                            Schedule a consultation
                          </label>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Additional Information
                      </label>
                      <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Tell us about your specific needs or questions..."
                      ></textarea>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        id="privacy"
                        name="privacy"
                        type="checkbox"
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                        required
                      />
                      <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                        I agree to the{" "}
                        <Link href="/privacy" className="text-primary hover:underline">
                          privacy policy
                        </Link>
                      </label>
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        className="btn-primary flex items-center justify-center"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-5 w-5" />
                            Submit Request
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-title">Why Choose DocuNimbus?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our cloud document solution offers comprehensive features that go beyond what you see in the demo.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="bg-primary/10 p-3 rounded-full inline-flex mb-4">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Complete Feature Set</h3>
              <p className="text-gray-600">
                Our full implementation includes advanced workflows, AI-powered document processing, 
                and enterprise-grade integrations not shown in the demo.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="bg-primary/10 p-3 rounded-full inline-flex mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Dedicated Support</h3>
              <p className="text-gray-600">
                Get personalized implementation assistance, training for your team, 
                and ongoing technical support from our document management experts.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="bg-primary/10 p-3 rounded-full inline-flex mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Rapid Implementation</h3>
              <p className="text-gray-600">
                Our streamlined implementation process gets your organization up and running 
                with DocuNimbus in weeks, not months, with minimal disruption.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Transform Your Document Management?</h2>
            <p className="text-lg opacity-90 mb-8">
              Try our interactive demo today or contact us for a personalized consultation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="https://demo.docunimbus.io" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors"
              >
                Launch Demo
              </a>
              <button
                onClick={() => {
                  const contactForm = document.getElementById('name');
                  if (contactForm) {
                    contactForm.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-primary-foreground/20 hover:bg-primary-foreground/30 border border-white/30 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
