import React from "react";
import Image from "next/image";
import { 
  Cloud, 
  Lock, 
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
            DocuNimbus offers powerful document management capabilities designed for modern businesses.
            Below are just a few of our core features.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <FeatureCard 
            icon={<Cloud size={24} />}
            title="Centralized Cloud Storage"
            description="Access documents from anywhere, anytime. All your files in one secure, organized repository."
          />
          
          <FeatureCard 
            icon={<Lock size={24} />}
            title="Secure Access & Backup"
            description="256-bit encryption and automated cloud backups ensure your documents remain protected and available."
          />
          
          <FeatureCard 
            icon={<RefreshCw size={24} />}
            title="Seamless Integration"
            description="Works with your existing tools and workflows for a smooth transition and enhanced productivity."
          />
        </div>
        
        <div className="bg-accent rounded-lg shadow-md p-8 text-center">
          <p className="text-lg text-gray-700 italic mb-4">
            More features available upon full implementation. Contact us to learn more.
          </p>
          <Link href="/contact" className="btn-primary inline-block">
            Request Full Feature List
          </Link>
        </div>
        
        <div className="flex flex-col md:flex-row items-center bg-primary text-white rounded-lg shadow-md overflow-hidden mt-16">
          <div className="md:w-1/2 p-8 md:p-10">
            <h3 className="text-2xl font-bold mb-4">Want to experience the future of document management?</h3>
            <p className="opacity-90 mb-6">
              Try our interactive demo to see how DocuNimbus can transform your document workflows.
            </p>
            <a 
              href="https://demo.docunimbus.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors inline-flex items-center"
            >
              Launch Demo
            </a>
          </div>
          <div className="md:w-1/2">
            <Image 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              width={600}
              height={400}
              alt="DocuNimbus demo interface"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
