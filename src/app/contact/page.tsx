"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight, Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
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
      setSubject("");
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
              Get in touch with our project team for questions, support, or feedback
              about the Cloud-Based Document Management System.
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
                      <p className="text-gray-600">support@clouddms.com</p>
                      <p className="text-gray-600">info@clouddms.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Phone</h3>
                      <p className="text-gray-600">Support: (123) 456-7890</p>
                      <p className="text-gray-600">General: (123) 456-7891</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Address</h3>
                      <p className="text-gray-600">
                        Cloud DMS Project Office<br />
                        123 Business Park Drive<br />
                        Suite 200<br />
                        Anytown, ST 12345
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 mt-6 pt-6">
                  <h3 className="font-medium text-gray-800 mb-3">Project Team Hours</h3>
                  <p className="text-gray-600 mb-1">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p className="text-gray-600">Support available 24/7 for critical issues</p>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <h2 className="text-xl font-semibold mb-6 text-gray-800">Send Us a Message</h2>
                
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
                    <h3 className="text-lg font-medium text-green-800 mb-2">Message Sent Successfully!</h3>
                    <p className="text-green-700">
                      Thank you for contacting us. A member of our team will respond to your
                      inquiry as soon as possible.
                    </p>
                    <button
                      onClick={() => setSuccess(false)}
                      className="mt-4 text-sm font-medium text-green-700 hover:text-green-500"
                    >
                      Send another message
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
                          Email Address
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
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="How can we help you?"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={6}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Please provide details about your inquiry or question..."
                        required
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
                            Send Message
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
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 mb-8">
              Find answers to common questions or contact us for specific inquiries.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">What types of support are available?</h3>
                <p className="text-gray-600">
                  We provide email, phone, and in-person support options for all aspects of the
                  Cloud DMS implementation and usage.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">How quickly can I expect a response?</h3>
                <p className="text-gray-600">
                  For standard inquiries, we respond within 24 business hours. Critical issues
                  are addressed within 2-4 hours.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Can I request custom training?</h3>
                <p className="text-gray-600">
                  Yes, we offer customized training sessions for departments with specific needs.
                  Contact us to schedule a session.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">How do I report technical issues?</h3>
                <p className="text-gray-600">
                  Technical issues can be reported via our support email, phone line, or
                  through the in-app support ticket system.
                </p>
              </div>
            </div>
            
            <div className="mt-8">
              <Link href="/training#faq" className="text-primary hover:text-primary/80 font-medium">
                View all FAQs →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Join Our Newsletter</h2>
            <p className="text-gray-600 mb-8">
              Stay updated on the Cloud DMS implementation project, upcoming training sessions,
              and system enhancements.
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex">
                <input
                  type="email"
                  className="w-full px-3 py-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your email address"
                  required
                />
                <button
                  type="submit"
                  className="bg-primary text-white px-4 py-3 rounded-r-md hover:bg-primary/90 transition-colors focus:outline-none"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
