import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-12 pb-8 border-t border-gray-200">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Cloud DMS</h3>
            <p className="text-gray-600 mb-4">
              Optimizing document management through an advanced cloud-based system that enhances
              efficiency, security, and accessibility.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-primary">
                  About the Project
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-gray-600 hover:text-primary">
                  Features & Benefits
                </Link>
              </li>
              <li>
                <Link href="/timeline" className="text-gray-600 hover:text-primary">
                  Implementation Timeline
                </Link>
              </li>
              <li>
                <Link href="/training" className="text-gray-600 hover:text-primary">
                  Training Resources
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Help & Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/training#faq" className="text-gray-600 hover:text-primary">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-primary">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link href="/training#guides" className="text-gray-600 hover:text-primary">
                  User Guides
                </Link>
              </li>
              <li>
                <Link href="/demo" className="text-gray-600 hover:text-primary">
                  Demo Access
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-gray-400" />
                <span className="text-gray-600">support@clouddms.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-gray-400" />
                <span className="text-gray-600">(123) 456-7890</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Cloud DMS Project. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-500 text-sm hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-500 text-sm hover:text-primary">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
