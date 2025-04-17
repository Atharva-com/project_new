"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

export default function TimelinePage() {
  // Data for Gantt chart
  const timelineData = [
    {
      name: "System Selection",
      research: [1, 2],
      vendor: [2, 3],
      roadmap: [3, 4],
    },
    {
      name: "Implementation",
      infrastructure: [5, 8],
      migration: [7, 11],
      integration: [9, 12],
    },
    {
      name: "Training",
      preparation: [9, 10],
      sessions: [10, 12],
      feedback: [12, 13],
    },
    {
      name: "Testing",
      pilot: [13, 14],
      optimization: [14, 15],
      deployment: [15, 16],
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  // Convert timeline data for recharts
  const chartData = [
    { name: "Week 1", "Research": 1, "Vendor Selection": 0, "Implementation Plan": 0, "Cloud Setup": 0, "File Migration": 0, "System Integration": 0, "Training": 0, "Pilot Test": 0, "Optimization": 0, "Full Deployment": 0 },
    { name: "Week 2", "Research": 1, "Vendor Selection": 1, "Implementation Plan": 0, "Cloud Setup": 0, "File Migration": 0, "System Integration": 0, "Training": 0, "Pilot Test": 0, "Optimization": 0, "Full Deployment": 0 },
    { name: "Week 3", "Research": 0, "Vendor Selection": 1, "Implementation Plan": 1, "Cloud Setup": 0, "File Migration": 0, "System Integration": 0, "Training": 0, "Pilot Test": 0, "Optimization": 0, "Full Deployment": 0 },
    { name: "Week 4", "Research": 0, "Vendor Selection": 0, "Implementation Plan": 1, "Cloud Setup": 0, "File Migration": 0, "System Integration": 0, "Training": 0, "Pilot Test": 0, "Optimization": 0, "Full Deployment": 0 },
    { name: "Week 5", "Research": 0, "Vendor Selection": 0, "Implementation Plan": 0, "Cloud Setup": 1, "File Migration": 0, "System Integration": 0, "Training": 0, "Pilot Test": 0, "Optimization": 0, "Full Deployment": 0 },
    { name: "Week 6", "Research": 0, "Vendor Selection": 0, "Implementation Plan": 0, "Cloud Setup": 1, "File Migration": 0, "System Integration": 0, "Training": 0, "Pilot Test": 0, "Optimization": 0, "Full Deployment": 0 },
    { name: "Week 7", "Research": 0, "Vendor Selection": 0, "Implementation Plan": 0, "Cloud Setup": 1, "File Migration": 1, "System Integration": 0, "Training": 0, "Pilot Test": 0, "Optimization": 0, "Full Deployment": 0 },
    { name: "Week 8", "Research": 0, "Vendor Selection": 0, "Implementation Plan": 0, "Cloud Setup": 1, "File Migration": 1, "System Integration": 0, "Training": 0, "Pilot Test": 0, "Optimization": 0, "Full Deployment": 0 },
    { name: "Week 9", "Research": 0, "Vendor Selection": 0, "Implementation Plan": 0, "Cloud Setup": 0, "File Migration": 1, "System Integration": 1, "Training": 1, "Pilot Test": 0, "Optimization": 0, "Full Deployment": 0 },
    { name: "Week 10", "Research": 0, "Vendor Selection": 0, "Implementation Plan": 0, "Cloud Setup": 0, "File Migration": 1, "System Integration": 1, "Training": 1, "Pilot Test": 0, "Optimization": 0, "Full Deployment": 0 },
    { name: "Week 11", "Research": 0, "Vendor Selection": 0, "Implementation Plan": 0, "Cloud Setup": 0, "File Migration": 1, "System Integration": 1, "Training": 0, "Pilot Test": 0, "Optimization": 0, "Full Deployment": 0 },
    { name: "Week 12", "Research": 0, "Vendor Selection": 0, "Implementation Plan": 0, "Cloud Setup": 0, "File Migration": 0, "System Integration": 1, "Training": 1, "Pilot Test": 0, "Optimization": 0, "Full Deployment": 0 },
    { name: "Week 13", "Research": 0, "Vendor Selection": 0, "Implementation Plan": 0, "Cloud Setup": 0, "File Migration": 0, "System Integration": 0, "Training": 1, "Pilot Test": 1, "Optimization": 0, "Full Deployment": 0 },
    { name: "Week 14", "Research": 0, "Vendor Selection": 0, "Implementation Plan": 0, "Cloud Setup": 0, "File Migration": 0, "System Integration": 0, "Training": 0, "Pilot Test": 1, "Optimization": 1, "Full Deployment": 0 },
    { name: "Week 15", "Research": 0, "Vendor Selection": 0, "Implementation Plan": 0, "Cloud Setup": 0, "File Migration": 0, "System Integration": 0, "Training": 0, "Pilot Test": 0, "Optimization": 1, "Full Deployment": 1 },
    { name: "Week 16", "Research": 0, "Vendor Selection": 0, "Implementation Plan": 0, "Cloud Setup": 0, "File Migration": 0, "System Integration": 0, "Training": 0, "Pilot Test": 0, "Optimization": 0, "Full Deployment": 1 },
  ];

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
                    <span className="ml-1 font-medium text-gray-500 md:ml-2">Timeline</span>
                  </div>
                </li>
              </ol>
            </nav>
            <h1 className="page-title text-center">Implementation Timeline</h1>
            <p className="text-xl text-center text-gray-600 max-w-3xl">
              Our project follows a strategic 4-month implementation timeline,
              ensuring a smooth transition to the new document management system.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-title">Project Gantt Chart</h2>
            <p className="text-gray-600 text-lg">
              Visual representation of our implementation schedule across the 16-week timeline.
            </p>
          </div>

          <div className="card-custom p-4 md:p-6 mb-16">
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={chartData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={[0, 1]} hide />
                  <YAxis dataKey="name" type="category" width={80} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Research" stackId="a" fill="#3B82F6" />
                  <Bar dataKey="Vendor Selection" stackId="a" fill="#60A5FA" />
                  <Bar dataKey="Implementation Plan" stackId="a" fill="#93C5FD" />
                  <Bar dataKey="Cloud Setup" stackId="a" fill="#2563EB" />
                  <Bar dataKey="File Migration" stackId="a" fill="#1D4ED8" />
                  <Bar dataKey="System Integration" stackId="a" fill="#1E40AF" />
                  <Bar dataKey="Training" stackId="a" fill="#818CF8" />
                  <Bar dataKey="Pilot Test" stackId="a" fill="#4F46E5" />
                  <Bar dataKey="Optimization" stackId="a" fill="#4338CA" />
                  <Bar dataKey="Full Deployment" stackId="a" fill="#3730A3" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-title">Detailed Implementation Plan</h2>
            <p className="text-gray-600 text-lg">
              Our comprehensive roadmap ensures a successful transition to the cloud-based document management system.
            </p>
          </div>

          <motion.div 
            className="max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="show"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="mb-16">
              <h3 className="text-2xl font-bold text-primary mb-6">Month 1: System Selection and Planning</h3>
              
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Key Activities:</h4>
                
                <div className="space-y-4">
                  <div className="pl-4 border-l-4 border-primary">
                    <h5 className="font-medium text-gray-800 mb-2">Research and Evaluation</h5>
                    <p className="text-gray-600 mb-1">• Compile requirements for the DMS solution</p>
                    <p className="text-gray-600 mb-1">• Research available cloud-based DMS platforms</p>
                    <p className="text-gray-600">• Evaluate solutions against requirements matrix</p>
                  </div>
                  
                  <div className="pl-4 border-l-4 border-primary">
                    <h5 className="font-medium text-gray-800 mb-2">Vendor Selection</h5>
                    <p className="text-gray-600 mb-1">• Request proposals from shortlisted vendors</p>
                    <p className="text-gray-600 mb-1">• Conduct demonstration sessions</p>
                    <p className="text-gray-600">• Negotiate contract terms and pricing</p>
                  </div>
                  
                  <div className="pl-4 border-l-4 border-primary">
                    <h5 className="font-medium text-gray-800 mb-2">Implementation Roadmap</h5>
                    <p className="text-gray-600 mb-1">• Develop detailed implementation plan</p>
                    <p className="text-gray-600 mb-1">• Define success criteria and KPIs</p>
                    <p className="text-gray-600">• Establish project governance structure</p>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <h4 className="font-semibold text-gray-800 mb-2">Deliverables:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Vendor selection report</li>
                    <li>Signed contract with selected vendor</li>
                    <li>Detailed project plan with timeline</li>
                    <li>Resource allocation plan</li>
                  </ul>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="mb-16">
              <h3 className="text-2xl font-bold text-primary mb-6">Months 2-3: Implementation and Integration</h3>
              
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Key Activities:</h4>
                
                <div className="space-y-4">
                  <div className="pl-4 border-l-4 border-primary">
                    <h5 className="font-medium text-gray-800 mb-2">Cloud Infrastructure Setup</h5>
                    <p className="text-gray-600 mb-1">• Configure cloud environment</p>
                    <p className="text-gray-600 mb-1">• Set up security protocols and access controls</p>
                    <p className="text-gray-600">• Establish backup and recovery systems</p>
                  </div>
                  
                  <div className="pl-4 border-l-4 border-primary">
                    <h5 className="font-medium text-gray-800 mb-2">File Migration</h5>
                    <p className="text-gray-600 mb-1">• Develop migration strategy and document classification system</p>
                    <p className="text-gray-600 mb-1">• Prepare existing documents for migration</p>
                    <p className="text-gray-600">• Migrate files to the cloud system with metadata tagging</p>
                  </div>
                  
                  <div className="pl-4 border-l-4 border-primary">
                    <h5 className="font-medium text-gray-800 mb-2">System Integration</h5>
                    <p className="text-gray-600 mb-1">• Identify integration points with existing systems</p>
                    <p className="text-gray-600 mb-1">• Configure APIs and connectors</p>
                    <p className="text-gray-600 mb-1">• Implement single sign-on (SSO) capabilities</p>
                    <p className="text-gray-600">• Perform integration testing</p>
                  </div>
                  
                  <div className="pl-4 border-l-4 border-primary">
                    <h5 className="font-medium text-gray-800 mb-2">Employee Training</h5>
                    <p className="text-gray-600 mb-1">• Develop training materials and documentation</p>
                    <p className="text-gray-600 mb-1">• Conduct department-specific training sessions</p>
                    <p className="text-gray-600">• Create user guides and reference documentation</p>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <h4 className="font-semibold text-gray-800 mb-2">Deliverables:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Operational cloud infrastructure</li>
                    <li>Migrated document repository</li>
                    <li>Integrated systems with data flow validation</li>
                    <li>Training materials and documentation</li>
                    <li>Initial group of trained users</li>
                  </ul>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-primary mb-6">Month 4: Testing and Deployment</h3>
              
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Key Activities:</h4>
                
                <div className="space-y-4">
                  <div className="pl-4 border-l-4 border-primary">
                    <h5 className="font-medium text-gray-800 mb-2">Pilot Testing</h5>
                    <p className="text-gray-600 mb-1">• Select pilot user group</p>
                    <p className="text-gray-600 mb-1">• Deploy system to pilot group</p>
                    <p className="text-gray-600">• Collect and analyze feedback</p>
                  </div>
                  
                  <div className="pl-4 border-l-4 border-primary">
                    <h5 className="font-medium text-gray-800 mb-2">System Optimization</h5>
                    <p className="text-gray-600 mb-1">• Address issues identified during pilot testing</p>
                    <p className="text-gray-600 mb-1">• Optimize system performance</p>
                    <p className="text-gray-600">• Refine user interfaces based on feedback</p>
                  </div>
                  
                  <div className="pl-4 border-l-4 border-primary">
                    <h5 className="font-medium text-gray-800 mb-2">Full Deployment</h5>
                    <p className="text-gray-600 mb-1">• Roll out system to all departments</p>
                    <p className="text-gray-600 mb-1">• Provide go-live support</p>
                    <p className="text-gray-600">• Monitor system adoption and performance</p>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <h4 className="font-semibold text-gray-800 mb-2">Deliverables:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Pilot test results and optimization report</li>
                    <li>Fully deployed cloud-based DMS across the organization</li>
                    <li>System performance metrics</li>
                    <li>Post-implementation review document</li>
                    <li>Support and maintenance plan</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="page-section bg-accent">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">Current Progress</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our project is currently underway, with key milestones being met according to schedule.
              Stay updated on our progress and upcoming activities.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/training" className="btn-primary">
                Access Training Resources
              </Link>
              <Link href="/contact" className="btn-outline">
                Contact Project Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
