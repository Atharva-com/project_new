import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  Cloud,
  Lock,
  Smartphone,
  Search,
  Layers,
  RefreshCw,
  Clock,
  FileText,
  Users,
  History,
  Bell,
  CheckSquare
} from "lucide-react";

export const metadata = {
  title: "Features & Benefits | Cloud DMS",
};

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="card-custom">
    <div className="feature-icon">{icon}</div>
    <h3 className="text-lg font-semibold mb-3 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default function FeaturesPage() {
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
                    <span className="ml-1 font-medium text-gray-500 md:ml-2">Features</span>
                  </div>
                </li>
              </ol>
            </nav>
            <h1 className="page-title text-center">Features & Benefits</h1>
            <p className="text-xl text-center text-gray-600 max-w-3xl">
              Our Cloud-Based Document Management System offers a comprehensive set of
              features designed to revolutionize your document workflows.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-title">Core Features</h2>
            <p className="text-gray-600 text-lg">
              Explore the powerful capabilities that make our document management system 
              a complete solution for modern organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <FeatureCard
              icon={<Cloud size={24} />}
              title="Cloud Storage"
              description="Securely store all your documents in the cloud with automatic backups and version history tracking to prevent data loss."
            />

            <FeatureCard
              icon={<Layers size={24} />}
              title="Centralized Access"
              description="Access all your documents from a single, organized repository with customizable folder structures and metadata."
            />

            <FeatureCard
              icon={<Smartphone size={24} />}
              title="Remote Accessibility"
              description="Work from anywhere with secure access to documents across all your devices through web, mobile, and desktop applications."
            />

            <FeatureCard
              icon={<Lock size={24} />}
              title="Enhanced Security"
              description="Keep documents protected with enterprise-grade encryption, granular access controls, and compliance with security standards."
            />

            <FeatureCard
              icon={<Search size={24} />}
              title="Intelligent Search"
              description="Find documents instantly with full-text search, OCR technology, and advanced filters for quick information retrieval."
            />

            <FeatureCard
              icon={<RefreshCw size={24} />}
              title="Seamless Integration"
              description="Connect with existing business tools and applications through APIs and pre-built integrations for a unified workflow."
            />

            <FeatureCard
              icon={<Clock size={24} />}
              title="Version Control"
              description="Track document changes over time with robust version history, allowing you to review or restore previous versions as needed."
            />

            <FeatureCard
              icon={<FileText size={24} />}
              title="Document Processing"
              description="Edit, annotate, sign, and collaborate on documents directly within the platform without downloading or using separate applications."
            />

            <FeatureCard
              icon={<Users size={24} />}
              title="Collaboration Tools"
              description="Work together efficiently with real-time collaboration, comments, tasks, and approval workflows built into the system."
            />

            <FeatureCard
              icon={<History size={24} />}
              title="Audit Trails"
              description="Maintain comprehensive logs of all document activities for compliance, security, and process improvement purposes."
            />

            <FeatureCard
              icon={<Bell size={24} />}
              title="Automated Notifications"
              description="Stay informed with customizable alerts for document updates, workflow tasks, and important deadlines."
            />

            <FeatureCard
              icon={<CheckSquare size={24} />}
              title="Compliance Management"
              description="Meet regulatory requirements with retention policies, legal holds, and compliance reporting capabilities."
            />
          </div>
        </div>
      </section>

      <section className="page-section bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Business Benefits</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Enhanced Efficiency</h3>
                  <p className="text-gray-600">
                    Workers can reduce search time for documents and document sharing operations
                    becoming more productive. Automated workflows eliminate manual processes and
                    reduce bottlenecks in document approval and processing.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Cost Reduction</h3>
                  <p className="text-gray-600">
                    The system decreases physical storage costs together with printing expenses
                    and IT support charges. Centralized management reduces duplication of efforts
                    and minimizes resource waste across departments.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Improved Security</h3>
                  <p className="text-gray-600">
                    Electronic data encryption naturally protects documents while performing
                    automatic backups so data remains secure from breaches. Access controls
                    ensure only authorized personnel can view sensitive information.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Remote Flexibility</h3>
                  <p className="text-gray-600">
                    The system provides remote accessibility which allows users to safely reach
                    company files from any supported device through secure means. This supports
                    remote work flexibility and enhances business continuity.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                width={600}
                height={450}
                alt="Business people collaborating on documents"
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="page-section bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Explore Our Solution?
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Experience the benefits of our Cloud-Based Document Management System firsthand.
              Request a demo or explore our comprehensive documentation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/demo" className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors">
                Access Demo
              </Link>
              <Link href="/training" className="bg-primary-foreground/20 hover:bg-primary-foreground/30 border border-white/30 text-white px-6 py-3 rounded-md font-medium transition-colors">
                View Training Resources
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
