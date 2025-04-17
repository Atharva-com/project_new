"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, ExternalLink } from "lucide-react";
import { DocumentManager } from "@/components/DocumentManager";

export default function DemoDMSPage() {
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
                    <span className="ml-1 font-medium text-gray-500 md:ml-2">Interactive Demo</span>
                  </div>
                </li>
              </ol>
            </nav>
            <h1 className="page-title text-center">DocuNimbus Interactive Demo</h1>
            <p className="text-xl text-center text-gray-600 max-w-3xl">
              Experience the power of DocuNimbus firsthand with our interactive document management interface.
              Browse, preview, and organize documents just like you would in the full system.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container-custom">
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Try DocuNimbus Now</h2>
            <p className="text-gray-600 mb-6">
              This interactive demo showcases key features of our document management system. You can:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Document Organization</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <span>Browse through folders and subfolders</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <span>Search for documents by name</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <span>Star important documents for quick access</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Document Preview</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <span>View PDF documents with page navigation</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <span>Zoom in/out for detailed document review</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <span>Preview images and videos directly in the interface</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
              <p className="text-blue-800 text-sm">
                <strong>Note:</strong> This is a demonstration with sample documents. In the full version, you can upload your own documents, 
                collaborate with team members, set permissions, and access many more advanced features.
              </p>
            </div>
          </div>
          
          <DocumentManager />
          
          <div className="mt-10 text-center">
            <h3 className="text-xl font-bold mb-4">Ready to experience the full power of DocuNimbus?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              The interactive demo shows just a fraction of what DocuNimbus can do. Contact us to learn about our 
              complete feature set including advanced security, workflow automation, AI-powered document processing, and more.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="https://demo.docunimbus.io" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center"
              >
                <span>Access Full Demo</span>
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
              <Link href="/contact" className="btn-outline">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
