import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata = {
  title: "About the Project | Cloud DMS",
};

export default function AboutPage() {
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
                    <span className="ml-1 font-medium text-gray-500 md:ml-2">About</span>
                  </div>
                </li>
              </ol>
            </nav>
            <h1 className="page-title text-center">About the Project</h1>
            <p className="text-xl text-center text-gray-600 max-w-3xl">
              Our initiative focuses on implementing an advanced approach for document management
              that optimizes storage operations and boosts allied features and safety functions.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Project Overview</h2>
              <p className="text-gray-600 mb-4">
                The Cloud-Based Document Management System initiative aims to transform how our organization
                handles documents by moving from traditional storage methods to a centralized cloud system.
              </p>
              <p className="text-gray-600 mb-4">
                Through this migration, we achieve enhanced efficiency together with cost reduction and 
                unified document access at every site. The system provides a comprehensive solution for 
                document storage, retrieval, sharing, and security.
              </p>
              <p className="text-gray-600 mb-4">
                With a planned implementation period of 4 months and a budget of $20,000, this project 
                represents a strategic investment in our operational infrastructure.
              </p>
            </div>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                width={600}
                height={400}
                alt="Project planning and implementation"
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="page-section bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Project Objectives</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-custom">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Enhanced Efficiency</h3>
              <p className="text-gray-600">
                Reduce the time employees spend searching for documents and streamline 
                document sharing operations for increased productivity.
              </p>
            </div>
            
            <div className="card-custom">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Cost Reduction</h3>
              <p className="text-gray-600">
                Decrease physical storage costs, printing expenses, and IT support charges
                through digital transformation of document management.
              </p>
            </div>
            
            <div className="card-custom">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Security Enhancement</h3>
              <p className="text-gray-600">
                Implement electronic data encryption with automatic backups to keep documents
                secure from breaches and ensure data integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Image
                src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                width={600}
                height={400}
                alt="Budget and financial planning"
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Project Cost Breakdown</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium text-gray-800">Cloud-based DMS Subscription</span>
                  <span className="text-primary font-semibold">$10,000 per year</span>
                </div>
                
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium text-gray-800">Implementation and Integration</span>
                  <span className="text-primary font-semibold">$7,500 (one-time)</span>
                </div>
                
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium text-gray-800">Employee Training & Support</span>
                  <span className="text-primary font-semibold">$2,500</span>
                </div>
                
                <div className="flex justify-between items-center pt-2">
                  <span className="font-bold text-gray-900">Total Estimated Budget</span>
                  <span className="text-primary font-bold">$20,000</span>
                </div>
              </div>
              
              <p className="text-gray-600 mt-6">
                This investment is expected to yield significant returns through improved 
                efficiency, reduced operational costs, and enhanced data security.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section bg-accent">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">Why This Project Matters</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our organization should implement a Cloud-Based Document Management System because 
              it will improve document processes through efficiency and reduced operational costs
              and strengthened data security systems.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/features" className="btn-primary">
                See All Features
              </Link>
              <Link href="/timeline" className="btn-outline">
                View Timeline
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
