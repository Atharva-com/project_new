import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, FileText, Video, Download, Plus, Minus } from "lucide-react";
export const metadata = {
  title: "Training & Support | Cloud DMS"
};
export default function TrainingPage() {
  return <>
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
                    <span className="ml-1 font-medium text-gray-500 md:ml-2">Training</span>
                  </div>
                </li>
              </ol>
            </nav>
            <h1 className="page-title text-center">Training & Support</h1>
            <p className="text-xl text-center text-gray-600 max-w-3xl">
              Access training materials and resources to help you effectively use
              the new Cloud-Based Document Management System.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-custom flex flex-col">
              <div className="mb-4 text-primary">
                <FileText size={36} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">User Guides</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Step-by-step guides to help you navigate the system and perform common tasks.
                Available as downloadable PDFs or viewable online.
              </p>
              <a href="#guides" className="btn-primary inline-flex items-center justify-center">
                <span>View Guides</span>
              </a>
            </div>

            <div className="card-custom flex flex-col">
              <div className="mb-4 text-primary">
                <Video size={36} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Video Tutorials</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Watch demonstrations of key features and workflows to help you
                understand how to use the system effectively.
              </p>
              <a href="#videos" className="btn-primary inline-flex items-center justify-center">
                <span>Watch Tutorials</span>
              </a>
            </div>

            <div className="card-custom flex flex-col">
              <div className="mb-4 text-primary">
                <Download size={36} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Quick Start Guides</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Get up and running quickly with one-page reference sheets for
                essential functions and common tasks.
              </p>
              <a href="#quickstart" className="btn-primary inline-flex items-center justify-center">
                <span>Download Guides</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="guides" className="page-section bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title">User Guides</h2>
          <p className="text-lg text-gray-600 mb-8">
            Comprehensive documentation to help you master every aspect of the system.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Getting Started Guide</h3>
                <p className="text-gray-600 mb-4">
                  Learn the basics of the Cloud DMS system including login, navigation, and essential features.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <FileText className="w-4 h-4 mr-2" />
                  <span>PDF • 12 pages</span>
                </div>
                <a href="#" className="text-primary font-medium hover:text-primary/80 flex items-center">
                  <Download className="w-4 h-4 mr-2" />
                  <span>Download Guide</span>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Document Upload & Management</h3>
                <p className="text-gray-600 mb-4">
                  Learn how to upload, organize, and manage your documents effectively in the system.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <FileText className="w-4 h-4 mr-2" />
                  <span>PDF • 18 pages</span>
                </div>
                <a href="#" className="text-primary font-medium hover:text-primary/80 flex items-center">
                  <Download className="w-4 h-4 mr-2" />
                  <span>Download Guide</span>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Advanced Search Techniques</h3>
                <p className="text-gray-600 mb-4">
                  Master the search functionality to quickly find the documents you need.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <FileText className="w-4 h-4 mr-2" />
                  <span>PDF • 10 pages</span>
                </div>
                <a href="#" className="text-primary font-medium hover:text-primary/80 flex items-center">
                  <Download className="w-4 h-4 mr-2" />
                  <span>Download Guide</span>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Collaboration & Sharing</h3>
                <p className="text-gray-600 mb-4">
                  Learn to share documents, collaborate with team members, and manage permissions.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <FileText className="w-4 h-4 mr-2" />
                  <span>PDF • 15 pages</span>
                </div>
                <a href="#" className="text-primary font-medium hover:text-primary/80 flex items-center">
                  <Download className="w-4 h-4 mr-2" />
                  <span>Download Guide</span>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Security & Permissions</h3>
                <p className="text-gray-600 mb-4">
                  Understand document security, access control, and permission management.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <FileText className="w-4 h-4 mr-2" />
                  <span>PDF • 14 pages</span>
                </div>
                <a href="#" className="text-primary font-medium hover:text-primary/80 flex items-center">
                  <Download className="w-4 h-4 mr-2" />
                  <span>Download Guide</span>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Mobile Access Guide</h3>
                <p className="text-gray-600 mb-4">
                  Access your documents from mobile devices and work remotely with full functionality.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <FileText className="w-4 h-4 mr-2" />
                  <span>PDF • 8 pages</span>
                </div>
                <a href="#" className="text-primary font-medium hover:text-primary/80 flex items-center">
                  <Download className="w-4 h-4 mr-2" />
                  <span>Download Guide</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="videos" className="page-section">
        <div className="container-custom">
          <h2 className="section-title">Video Tutorials</h2>
          <p className="text-lg text-gray-600 mb-8">
            Watch step-by-step demonstrations of key features and processes.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="card-custom p-0 overflow-hidden">
              <div className="aspect-video relative bg-gray-800">
                <Image src="https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" alt="System overview tutorial thumbnail" fill className="object-cover opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary transition-colors">
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[16px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">System Overview Tutorial</h3>
                <p className="text-gray-600">
                  A comprehensive overview of the Cloud DMS interface and key features.
                </p>
                <div className="flex items-center text-sm text-gray-500 mt-3">
                  <Video className="w-4 h-4 mr-2" />
                  <span>Duration: 12:34</span>
                </div>
              </div>
            </div>

            <div className="card-custom p-0 overflow-hidden">
              <div className="aspect-video relative bg-gray-800">
                <Image src="https://picsum.photos/200" alt="Document upload and management tutorial thumbnail" fill className="object-cover opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary transition-colors">
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[16px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Document Upload & Management</h3>
                <p className="text-gray-600">
                  Learn how to upload, categorize, and manage documents in the system.
                </p>
                <div className="flex items-center text-sm text-gray-500 mt-3">
                  <Video className="w-4 h-4 mr-2" />
                  <span>Duration: 08:42</span>
                </div>
              </div>
            </div>

            <div className="card-custom p-0 overflow-hidden">
              <div className="aspect-video relative bg-gray-800">
                <Image src="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" alt="Advanced search techniques tutorial thumbnail" fill className="object-cover opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary transition-colors">
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[16px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Advanced Search Techniques</h3>
                <p className="text-gray-600">
                  Master the powerful search capabilities to quickly find any document.
                </p>
                <div className="flex items-center text-sm text-gray-500 mt-3">
                  <Video className="w-4 h-4 mr-2" />
                  <span>Duration: 06:18</span>
                </div>
              </div>
            </div>

            <div className="card-custom p-0 overflow-hidden">
              <div className="aspect-video relative bg-gray-800">
                <Image src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" alt="Collaboration and sharing tutorial thumbnail" fill className="object-cover opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary transition-colors">
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[16px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Collaboration & Sharing</h3>
                <p className="text-gray-600">
                  Learn effective ways to collaborate with team members and share documents securely.
                </p>
                <div className="flex items-center text-sm text-gray-500 mt-3">
                  <Video className="w-4 h-4 mr-2" />
                  <span>Duration: 09:55</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="quickstart" className="page-section bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title">Quick Start Guides</h2>
          <p className="text-lg text-gray-600 mb-8">
            One-page reference guides to help you perform common tasks quickly.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <a href="#" className="bg-white rounded-lg border border-gray-200 shadow-sm p-5 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Login & Navigation</h3>
              <p className="text-gray-600 mb-4">
                Quick guide to accessing the system and navigating the interface.
              </p>
              <div className="flex items-center text-primary font-medium">
                <Download className="w-4 h-4 mr-2" />
                <span>Download PDF</span>
              </div>
            </a>

            <a href="#" className="bg-white rounded-lg border border-gray-200 shadow-sm p-5 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Document Upload</h3>
              <p className="text-gray-600 mb-4">
                Simple step-by-step guide to uploading and categorizing documents.
              </p>
              <div className="flex items-center text-primary font-medium">
                <Download className="w-4 h-4 mr-2" />
                <span>Download PDF</span>
              </div>
            </a>

            <a href="#" className="bg-white rounded-lg border border-gray-200 shadow-sm p-5 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Search Cheat Sheet</h3>
              <p className="text-gray-600 mb-4">
                Reference sheet with search syntax and examples for quick access.
              </p>
              <div className="flex items-center text-primary font-medium">
                <Download className="w-4 h-4 mr-2" />
                <span>Download PDF</span>
              </div>
            </a>

            <a href="#" className="bg-white rounded-lg border border-gray-200 shadow-sm p-5 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">File Sharing Guide</h3>
              <p className="text-gray-600 mb-4">
                How to securely share documents both internally and externally.
              </p>
              <div className="flex items-center text-primary font-medium">
                <Download className="w-4 h-4 mr-2" />
                <span>Download PDF</span>
              </div>
            </a>

            <a href="#" className="bg-white rounded-lg border border-gray-200 shadow-sm p-5 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Mobile Access</h3>
              <p className="text-gray-600 mb-4">
                Setup guide for accessing the system from mobile devices.
              </p>
              <div className="flex items-center text-primary font-medium">
                <Download className="w-4 h-4 mr-2" />
                <span>Download PDF</span>
              </div>
            </a>

            <a href="#" className="bg-white rounded-lg border border-gray-200 shadow-sm p-5 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Security Reference</h3>
              <p className="text-gray-600 mb-4">
                Quick reference for permission settings and security features.
              </p>
              <div className="flex items-center text-primary font-medium">
                <Download className="w-4 h-4 mr-2" />
                <span>Download PDF</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section id="faq" className="page-section">
        <div className="container-custom">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto text-center">
            Find answers to common questions about using the Cloud-Based Document Management System.
          </p>

          <div className="max-w-3xl mx-auto space-y-4">
            <details className="group bg-white rounded-lg border border-gray-200 shadow-sm">
              <summary className="flex justify-between items-center font-medium cursor-pointer p-4">
                <span>How do I reset my password?</span>
                <span className="transition group-open:rotate-180">
                  <Plus className="h-5 w-5 text-gray-500 group-open:hidden" />
                  <Minus className="h-5 w-5 text-gray-500 hidden group-open:block" />
                </span>
              </summary>
              <div className="px-4 pb-4 pt-2 text-gray-600">
                <p>
                  To reset your password, click on the "Forgot Password" link on the login page.
                  You will receive an email with instructions to create a new password.
                  If you don't receive the email, please check your spam folder or contact support.
                </p>
              </div>
            </details>

            <details className="group bg-white rounded-lg border border-gray-200 shadow-sm">
              <summary className="flex justify-between items-center font-medium cursor-pointer p-4">
                <span>How do I organize my documents into folders?</span>
                <span className="transition group-open:rotate-180">
                  <Plus className="h-5 w-5 text-gray-500 group-open:hidden" />
                  <Minus className="h-5 w-5 text-gray-500 hidden group-open:block" />
                </span>
              </summary>
              <div className="px-4 pb-4 pt-2 text-gray-600">
                <p>
                  In the main document view, click on "New Folder" to create a folder.
                  You can then drag and drop documents into the folder, or select
                  "Move to" when viewing a document to organize your files.
                  You can also create subfolders for more detailed organization.
                </p>
              </div>
            </details>

            <details className="group bg-white rounded-lg border border-gray-200 shadow-sm">
              <summary className="flex justify-between items-center font-medium cursor-pointer p-4">
                <span>How do I share documents with external users?</span>
                <span className="transition group-open:rotate-180">
                  <Plus className="h-5 w-5 text-gray-500 group-open:hidden" />
                  <Minus className="h-5 w-5 text-gray-500 hidden group-open:block" />
                </span>
              </summary>
              <div className="px-4 pb-4 pt-2 text-gray-600">
                <p>
                  Select the document you want to share, then click the "Share" button.
                  Enter the email address of the external recipient and select the appropriate
                  permission level (view, comment, or edit). You can also set an expiration date
                  for the shared link if needed for security purposes.
                </p>
              </div>
            </details>

            <details className="group bg-white rounded-lg border border-gray-200 shadow-sm">
              <summary className="flex justify-between items-center font-medium cursor-pointer p-4">
                <span>What file types are supported by the system?</span>
                <span className="transition group-open:rotate-180">
                  <Plus className="h-5 w-5 text-gray-500 group-open:hidden" />
                  <Minus className="h-5 w-5 text-gray-500 hidden group-open:block" />
                </span>
              </summary>
              <div className="px-4 pb-4 pt-2 text-gray-600">
                <p>
                  The Cloud DMS supports a wide range of file types including:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Documents: PDF, DOCX, DOC, TXT, RTF, ODT</li>
                  <li>Spreadsheets: XLSX, XLS, CSV, ODS</li>
                  <li>Presentations: PPTX, PPT, ODP</li>
                  <li>Images: JPG, PNG, GIF, BMP, TIFF</li>
                  <li>Email: MSG, EML</li>
                  <li>And many more standard file formats</li>
                </ul>
              </div>
            </details>

            <details className="group bg-white rounded-lg border border-gray-200 shadow-sm">
              <summary className="flex justify-between items-center font-medium cursor-pointer p-4">
                <span>Is there a file size limit for uploads?</span>
                <span className="transition group-open:rotate-180">
                  <Plus className="h-5 w-5 text-gray-500 group-open:hidden" />
                  <Minus className="h-5 w-5 text-gray-500 hidden group-open:block" />
                </span>
              </summary>
              <div className="px-4 pb-4 pt-2 text-gray-600">
                <p>
                  Individual files up to 100MB can be uploaded through the standard interface. 
                  For larger files (up to 2GB), use the bulk upload tool which is designed for 
                  handling larger documents and multiple files at once. If you need to upload files 
                  larger than 2GB, please contact system administrators for assistance.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="page-section bg-primary text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Need Additional Help?</h2>
              <p className="text-lg opacity-90 mb-6">
                Our support team is available to answer your questions and provide
                assistance with the Cloud Document Management System.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="rounded-full bg-white/20 p-2 mr-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Support</h3>
                    <p className="opacity-90">support@clouddms.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="rounded-full bg-white/20 p-2 mr-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone Support</h3>
                    <p className="opacity-90">(123) 456-7890</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Link href="/contact" className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors inline-block">
                  Contact Support
                </Link>
              </div>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Schedule Training</h3>
              <p className="opacity-90 mb-6">
                Need personalized training for your team? Contact us to schedule
                a custom training session tailored to your specific needs.
              </p>
              <Link href="/contact" className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors inline-block">
                Request Training
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>;
}