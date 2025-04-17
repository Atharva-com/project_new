import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="absolute inset-y-0 right-0 w-1/2 bg-primary/5"></div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center py-16 md:py-20 lg:py-24">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Cloud-Based Document Management System
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              Modernizing document storage and access with an advanced cloud solution. 
              Enhance security, boost efficiency, and reduce operational costs.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/features" className="btn-primary flex items-center">
                <span>Explore Features</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              
              <Link href="/demo" className="btn-outline">
                Access Demo
              </Link>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                width={600}
                height={400}
                alt="Digital documents in the cloud"
                className="w-full h-auto object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary rounded-lg p-6 text-white shadow-lg max-w-xs hidden md:block">
              <p className="font-semibold mb-1">Implementation Timeline</p>
              <p className="text-sm opacity-90">Full deployment within 4 months</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
