import React from "react";
import Link from "next/link";

export const CTASection = () => {
  return (
    <section className="bg-primary text-white py-16">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Document Management?
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join our implementation process and be part of the digital transformation. 
            Access our demo or contact the project team for more information.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/demo" className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors">
              Access Demo
            </Link>
            <Link href="/contact" className="bg-primary-foreground/20 hover:bg-primary-foreground/30 border border-white/30 text-white px-6 py-3 rounded-md font-medium transition-colors">
              Contact Project Team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
