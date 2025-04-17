import React from "react";
import Link from "next/link";
import { CalendarDays, CheckCircle, CircleAlert } from "lucide-react";

export const TimelinePreview = () => {
  return (
    <section className="page-section bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-title">Implementation Timeline</h2>
          <p className="text-gray-600 text-lg">
            Our structured approach ensures a smooth transition to the new document management system.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {/* Month 1 */}
            <div className="relative flex">
              <div className="hidden md:flex flex-col items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div className="h-full w-0.5 bg-primary/20"></div>
              </div>
              
              <div className="md:ml-8 border border-gray-200 rounded-lg shadow-sm p-6 bg-white w-full">
                <div className="flex items-center mb-4">
                  <div className="md:hidden w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">System Selection and Planning</h3>
                </div>
                
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <CalendarDays className="w-4 h-4 mr-1" />
                  <span>Month 1</span>
                </div>
                
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Research and evaluate available cloud-based DMS solutions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Select vendors through selection procedures and perform contract negotiation</span>
                  </li>
                  <li className="flex items-start">
                    <CircleAlert className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Develop an implementation roadmap</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Month 2-3 */}
            <div className="relative flex">
              <div className="hidden md:flex flex-col items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div className="h-full w-0.5 bg-primary/20"></div>
              </div>
              
              <div className="md:ml-8 border border-gray-200 rounded-lg shadow-sm p-6 bg-white w-full">
                <div className="flex items-center mb-4">
                  <div className="md:hidden w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Implementation and Integration</h3>
                </div>
                
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <CalendarDays className="w-4 h-4 mr-1" />
                  <span>Months 2-3</span>
                </div>
                
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CircleAlert className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Establish cloud infrastructure and perform file migration process</span>
                  </li>
                  <li className="flex items-start">
                    <CircleAlert className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Integrate the system with current business applications</span>
                  </li>
                  <li className="flex items-start">
                    <CircleAlert className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Train employees on system usage and best practices</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Month 4 */}
            <div className="relative flex">
              <div className="hidden md:flex flex-col items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
              </div>
              
              <div className="md:ml-8 border border-gray-200 rounded-lg shadow-sm p-6 bg-white w-full">
                <div className="flex items-center mb-4">
                  <div className="md:hidden w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Testing and Deployment</h3>
                </div>
                
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <CalendarDays className="w-4 h-4 mr-1" />
                  <span>Month 4</span>
                </div>
                
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CircleAlert className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Conduct a pilot test with a small group of users</span>
                  </li>
                  <li className="flex items-start">
                    <CircleAlert className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Optimize system performance and handle feedback</span>
                  </li>
                  <li className="flex items-start">
                    <CircleAlert className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Deploy the system to every department of the organization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link href="/timeline" className="btn-outline">
              View Complete Timeline
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
