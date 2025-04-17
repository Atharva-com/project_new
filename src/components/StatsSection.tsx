import React from "react";
import { Clock, DollarSign, Shield } from "lucide-react";
import Image from "next/image";

type StatCardProps = {
  icon: React.ReactNode;
  value: string;
  label: string;
  description: string;
};

const StatCard = ({ icon, value, label, description }: StatCardProps) => (
  <div className="card-custom flex flex-col items-center text-center">
    <div className="feature-icon">{icon}</div>
    <div className="text-3xl font-bold text-primary mb-2">{value}</div>
    <h3 className="text-lg font-semibold text-gray-800 mb-2">{label}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export const StatsSection = () => {
  return (
    <section className="bg-gray-50 page-section">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-title">Why Choose DocuNimbus?</h2>
          <p className="text-gray-600 text-lg">
            Our smart cloud document solution delivers measurable benefits
            that transform how your organization manages information.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCard 
            icon={<Clock size={24} />}
            value="40%"
            label="Time Saved"
            description="Reduce time spent searching for and sharing documents with intuitive organization and instant access."
          />
          
          <StatCard 
            icon={<DollarSign size={24} />}
            value="30%"
            label="Cost Reduction"
            description="Lower expenses from physical storage, printing, and IT support with our cloud-based solution."
          />
          
          <StatCard 
            icon={<Shield size={24} />}
            value="256-bit"
            label="Enterprise Security"
            description="Bank-level encryption and automated backups ensure your documents remain protected and compliant."
          />
        </div>
        
        <div className="mt-16 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Experience the Difference</h3>
              <p className="text-gray-600 mb-6">
                See how DocuNimbus compares to traditional document management systems with our interactive demo.
                Discover the intuitive interface and powerful features that make document management effortless.
              </p>
              <a 
                href="https://demo.docunimbus.io" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary inline-block"
              >
                Try the Demo
              </a>
            </div>
            <div className="md:w-1/2">
              <Image 
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                width={600}
                height={400}
                alt="DocuNimbus interface comparison"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
