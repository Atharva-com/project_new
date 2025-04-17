import React from "react";
import { Clock, DollarSign, Shield, Users } from "lucide-react";

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
          <h2 className="section-title">Business Impact</h2>
          <p className="text-gray-600 text-lg">
            Our Cloud-Based Document Management System delivers measurable benefits
            across efficiency, cost, security, and accessibility metrics.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCard 
            icon={<Clock size={24} />}
            value="40%"
            label="Time Saved"
            description="Employees spend less time searching for documents and sharing files with colleagues."
          />
          
          <StatCard 
            icon={<DollarSign size={24} />}
            value="$20,000"
            label="Annual Savings"
            description="Reduced costs from physical storage, printing, and IT support expenses."
          />
          
          <StatCard 
            icon={<Shield size={24} />}
            value="100%"
            label="Security Compliance"
            description="Encrypted storage and automatic backups ensure documents remain protected."
          />
          
          <StatCard 
            icon={<Users size={24} />}
            value="24/7"
            label="Accessibility"
            description="Secure remote access to company files from any supported device."
          />
        </div>
      </div>
    </section>
  );
};
