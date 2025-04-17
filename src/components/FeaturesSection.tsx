import React from "react";
import Image from "next/image";
import { 
  Cloud, 
  Lock, 
  Smartphone, 
  Search, 
  Layers, 
  RefreshCw 
} from "lucide-react";
import Link from "next/link";

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="card-custom">
    <div className="feature-icon">{icon}</div>
    <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export const FeaturesSection = () => {
  return (
    <section className="page-section">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-title">Key Features</h2>
          <p className="text-gray-600 text-lg">
            Our cloud-based document management solution offers a comprehensive set of features
            designed to transform how your organization handles documents.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <FeatureCard 
            icon={<Cloud size={24} />}
            title="Cloud Storage"
            description="Securely store all your documents in the cloud with automatic backups and version history."
          />
          
          <FeatureCard 
            icon={<Layers size={24} />}
            title="Centralized Access"
            description="Access all your documents from a single, organized repository with powerful search capabilities."
          />
          
          <FeatureCard 
            icon={<Smartphone size={24} />}
            title="Remote Accessibility"
            description="Work from anywhere with secure access to documents across all your devices."
          />
          
          <FeatureCard 
            icon={<Lock size={24} />}
            title="Enhanced Security"
            description="Advanced encryption, access controls, and compliance features keep your data protected."
          />
          
          <FeatureCard 
            icon={<Search size={24} />}
            title="Intelligent Search"
            description="Find documents instantly with powerful search capabilities including OCR and metadata filtering."
          />
          
          <FeatureCard 
            icon={<RefreshCw size={24} />}
            title="Seamless Integration"
            description="Connect with your existing business tools and workflows for maximum efficiency."
          />
        </div>
        
        <div className="flex flex-col md:flex-row items-center bg-accent rounded-lg shadow-md overflow-hidden">
          <div className="md:w-1/2 p-8 md:p-10">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Ready to Transform Your Document Management?</h3>
            <p className="text-gray-600 mb-6">
              Discover how our Cloud-Based DMS can help your organization achieve greater efficiency,
              security, and productivity with your document workflows.
            </p>
            <Link href="/features" className="btn-primary inline-block">
              View All Features
            </Link>
          </div>
          <div className="md:w-1/2">
            <Image 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              width={600}
              height={400}
              alt="Document management interface"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
