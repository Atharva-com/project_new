import React from "react";
import Link from "next/link";
import { ExternalLink, Mail } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="bg-primary text-white py-16">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience DocuNimbus?
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Interested in a full walkthrough or implementation support? 
            Try our interactive demo or contact our team for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://demo.docunimbus.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors flex items-center justify-center"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Launch Demo
            </a>
            <Link 
              href="/contact" 
              className="bg-primary-foreground/20 hover:bg-primary-foreground/30 border border-white/30 text-white px-6 py-3 rounded-md font-medium transition-colors flex items-center justify-center"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
