"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
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
  CheckSquare,
  Shield,
  Database,
  Zap,
  Workflow,
  FileSearch,
  Share2,
  Fingerprint,
  BarChart2,
  Settings,
  Sliders,
  Briefcase,
  Globe,
  Server,
  Key,
  AlertCircle,
  Inbox,
  PenTool,
  Folder,
  FolderPlus,
  Tag,
  Eye,
  EyeOff,
  MessageSquare,
  Calendar,
  HardDrive,
  Cpu,
  Wifi,
  Award,
  Clipboard,
  ClipboardCheck,
  Filter,
  GitBranch,
  Maximize2,
  Minimize2,
  Monitor,
  Paperclip,
  Printer,
  Save,
  Upload,
  Download,
  UserPlus,
  UserCheck,
  UserX,
  Users as UsersIcon,
  Trash2,
  Repeat,
  RotateCcw,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Info,
  HelpCircle,
  ExternalLink,
  ChevronDown,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  Check
} from "lucide-react";

// Feature category type
type FeatureCategory = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  borderColor: string;
  iconBgColor: string;
  iconColor: string;
};

// Feature item type
type FeatureItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
  categoryId: string;
  isNew?: boolean;
  isEnterprise?: boolean;
};

// Feature comparison type
type FeatureComparison = {
  category: string;
  features: {
    name: string;
    docuNimbus: boolean;
    traditional: boolean;
    competitors: boolean;
  }[];
};

// Feature card component with hover effects
const FeatureCard = ({ icon, title, description, isNew, isEnterprise, categoryId }: FeatureItem & { categoryId: string }) => {
  // Get category colors based on categoryId
  const getCategoryColors = () => {
    const categoryMap: Record<string, { light: string, hover: string, iconBg: string }> = {
      "document-management": { light: "bg-blue-50", hover: "hover:bg-blue-100", iconBg: "bg-blue-100" },
      "security": { light: "bg-red-50", hover: "hover:bg-red-100", iconBg: "bg-red-100" },
      "collaboration": { light: "bg-green-50", hover: "hover:bg-green-100", iconBg: "bg-green-100" },
      "integration": { light: "bg-purple-50", hover: "hover:bg-purple-100", iconBg: "bg-purple-100" },
      "automation": { light: "bg-amber-50", hover: "hover:bg-amber-100", iconBg: "bg-amber-100" },
      "analytics": { light: "bg-indigo-50", hover: "hover:bg-indigo-100", iconBg: "bg-indigo-100" },
      "infrastructure": { light: "bg-cyan-50", hover: "hover:bg-cyan-100", iconBg: "bg-cyan-100" },
      "user-experience": { light: "bg-teal-50", hover: "hover:bg-teal-100", iconBg: "bg-teal-100" }
    };
    
    return categoryMap[categoryId] || { light: "bg-gray-50", hover: "hover:bg-gray-100", iconBg: "bg-gray-100" };
  };
  
  const colors = getCategoryColors();
  
  return (
    <motion.div 
      className={`relative overflow-hidden rounded-xl border border-gray-200 shadow-sm transition-all duration-300 ${colors.light} ${colors.hover} hover:shadow-md`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="p-6">
        <div className={`p-3 rounded-full inline-flex mb-4 ${colors.iconBg}`}>
          {icon}
        </div>
        
        <div className="flex items-center mb-3">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <div className="flex ml-2 gap-1">
            {isNew && (
              <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                New
              </span>
            )}
            {isEnterprise && (
              <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
                Enterprise
              </span>
            )}
          </div>
        </div>
        
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

// Category card component with improved styling
const CategoryCard = ({ 
  category, 
  isActive, 
  onClick,
  count
}: { 
  category: FeatureCategory; 
  isActive: boolean; 
  onClick: () => void;
  count: number;
}) => (
  <div 
    className={`p-5 rounded-xl cursor-pointer transition-all duration-300 transform ${
      isActive 
        ? `${category.bgColor} border-2 ${category.borderColor} shadow-md scale-[1.02]` 
        : 'bg-white border-2 border-gray-100 hover:border-gray-200 hover:shadow-sm'
    }`}
    onClick={onClick}
  >
    <div className={`p-3 rounded-full inline-flex mb-3 ${category.iconBgColor}`}>
      <div className={category.iconColor}>
        {category.icon}
      </div>
    </div>
    <h3 className="text-lg font-semibold mb-1 text-gray-800">{category.title}</h3>
    <div className="flex justify-between items-center">
      <p className="text-sm text-gray-600">{category.description}</p>
      <span className={`text-sm font-medium px-2 py-1 rounded-full ${
        isActive ? 'bg-white/30 text-gray-800' : 'bg-gray-100 text-gray-600'
      }`}>
        {count}
      </span>
    </div>
  </div>
);

export default function FeaturesPage() {
  // Define feature categories with enhanced styling
  const categories: FeatureCategory[] = [
    {
      id: "document-management",
      title: "Document Management",
      description: "Core document handling capabilities",
      icon: <FileText className="h-6 w-6" />,
      color: "blue",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-500",
      iconBgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      id: "security",
      title: "Security & Compliance",
      description: "Protection and regulatory features",
      icon: <Shield className="h-6 w-6" />,
      color: "red",
      bgColor: "bg-red-50",
      borderColor: "border-red-500",
      iconBgColor: "bg-red-100",
      iconColor: "text-red-600"
    },
    {
      id: "collaboration",
      title: "Collaboration & Sharing",
      description: "Team productivity features",
      icon: <Users className="h-6 w-6" />,
      color: "green",
      bgColor: "bg-green-50",
      borderColor: "border-green-500",
      iconBgColor: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      id: "integration",
      title: "Integration & Connectivity",
      description: "Connect with other systems",
      icon: <RefreshCw className="h-6 w-6" />,
      color: "purple",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-500",
      iconBgColor: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      id: "automation",
      title: "Automation & Workflow",
      description: "Process automation capabilities",
      icon: <Zap className="h-6 w-6" />,
      color: "amber",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-500",
      iconBgColor: "bg-amber-100",
      iconColor: "text-amber-600"
    },
    {
      id: "analytics",
      title: "Analytics & Reporting",
      description: "Insights and intelligence",
      icon: <BarChart2 className="h-6 w-6" />,
      color: "indigo",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-500",
      iconBgColor: "bg-indigo-100",
      iconColor: "text-indigo-600"
    },
    {
      id: "infrastructure",
      title: "Infrastructure & Performance",
      description: "System architecture features",
      icon: <Server className="h-6 w-6" />,
      color: "cyan",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-500",
      iconBgColor: "bg-cyan-100",
      iconColor: "text-cyan-600"
    },
    {
      id: "user-experience",
      title: "User Experience",
      description: "Interface and accessibility",
      icon: <Sliders className="h-6 w-6" />,
      color: "teal",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-500",
      iconBgColor: "bg-teal-100",
      iconColor: "text-teal-600"
    }
  ];

  // Define all features
  const allFeatures: FeatureItem[] = [
    // Document Management
    {
      icon: <Cloud size={24} />,
      title: "Cloud Storage",
      description: "Securely store all your documents in the cloud with automatic backups and version history tracking to prevent data loss.",
      categoryId: "document-management"
    },
    {
      icon: <Folder size={24} />,
      title: "Hierarchical Folder Structure",
      description: "Organize documents in a familiar folder hierarchy with unlimited nesting levels for intuitive navigation and organization.",
      categoryId: "document-management"
    },
    {
      icon: <FolderPlus size={24} />,
      title: "Custom Folder Templates",
      description: "Create and save folder structure templates for quick setup of new projects or departments with consistent organization.",
      categoryId: "document-management",
      isNew: true
    },
    {
      icon: <Tag size={24} />,
      title: "Metadata Management",
      description: "Add custom metadata fields to documents for enhanced categorization, filtering, and searchability across your organization.",
      categoryId: "document-management"
    },
    {
      icon: <FileSearch size={24} />,
      title: "Full-Text Search",
      description: "Powerful search capabilities that index document content, metadata, and annotations for instant retrieval of information.",
      categoryId: "document-management"
    },
    {
      icon: <Clock size={24} />,
      title: "Version Control",
      description: "Track document changes over time with robust version history, allowing you to review or restore previous versions as needed.",
      categoryId: "document-management"
    },
    {
      icon: <GitBranch size={24} />,
      title: "Document Branching",
      description: "Create parallel versions of documents for different purposes while maintaining relationships between document variants.",
      categoryId: "document-management",
      isEnterprise: true
    },
    {
      icon: <Paperclip size={24} />,
      title: "Document Relationships",
      description: "Link related documents together to create document networks that help users discover connected information.",
      categoryId: "document-management"
    },
    {
      icon: <PenTool size={24} />,
      title: "Document Annotation",
      description: "Add comments, highlights, and markup directly to documents without altering the original file for collaborative review.",
      categoryId: "document-management"
    },
    {
      icon: <Trash2 size={24} />,
      title: "Retention & Archiving",
      description: "Set retention policies to automatically archive or delete documents based on age, type, or custom rules.",
      categoryId: "document-management"
    },
    {
      icon: <RotateCcw size={24} />,
      title: "Document Recovery",
      description: "Restore accidentally deleted documents from the recycle bin within the retention period to prevent data loss.",
      categoryId: "document-management"
    },
    {
      icon: <Filter size={24} />,
      title: "Advanced Filtering",
      description: "Filter documents by multiple criteria including type, date, author, status, and custom metadata for quick access.",
      categoryId: "document-management"
    },
    
    // Security & Compliance
    {
      icon: <Lock size={24} />,
      title: "256-bit Encryption",
      description: "Bank-grade encryption for documents both in transit and at rest to ensure data security against unauthorized access.",
      categoryId: "security"
    },
    {
      icon: <Key size={24} />,
      title: "Role-Based Access Control",
      description: "Define user roles with specific permissions to control who can view, edit, share, or delete documents across your organization.",
      categoryId: "security"
    },
    {
      icon: <Fingerprint size={24} />,
      title: "Multi-Factor Authentication",
      description: "Add an extra layer of security with MFA options including SMS, authenticator apps, and biometric verification.",
      categoryId: "security"
    },
    {
      icon: <Eye size={24} />,
      title: "Document Watermarking",
      description: "Apply visible or invisible watermarks to sensitive documents to track origin and discourage unauthorized sharing.",
      categoryId: "security",
      isNew: true
    },
    {
      icon: <EyeOff size={24} />,
      title: "Information Rights Management",
      description: "Control what users can do with documents even after download, including preventing printing, copying, or forwarding.",
      categoryId: "security",
      isEnterprise: true
    },
    {
      icon: <Shield size={24} />,
      title: "Compliance Management",
      description: "Meet regulatory requirements with built-in compliance features for GDPR, HIPAA, SOX, and other standards.",
      categoryId: "security"
    },
    {
      icon: <AlertCircle size={24} />,
      title: "Security Alerts",
      description: "Receive notifications about suspicious activities, unauthorized access attempts, or potential security breaches.",
      categoryId: "security"
    },
    {
      icon: <History size={24} />,
      title: "Comprehensive Audit Trails",
      description: "Maintain detailed logs of all document activities including viewing, editing, printing, and sharing for compliance and security.",
      categoryId: "security"
    },
    {
      icon: <CheckSquare size={24} />,
      title: "Legal Holds",
      description: "Place documents on legal hold to prevent modification or deletion during litigation or investigations.",
      categoryId: "security",
      isEnterprise: true
    },
    {
      icon: <Database size={24} />,
      title: "Data Loss Prevention",
      description: "Automatically detect and prevent the sharing of sensitive information based on content analysis and policy rules.",
      categoryId: "security",
      isEnterprise: true
    },
    {
      icon: <Globe size={24} />,
      title: "Geographic Restrictions",
      description: "Restrict document access based on geographic location to comply with data sovereignty requirements.",
      categoryId: "security",
      isEnterprise: true
    },
    {
      icon: <AlertTriangle size={24} />,
      title: "Risk Assessment",
      description: "Automated scanning of documents to identify potential security risks or compliance issues before they become problems.",
      categoryId: "security",
      isNew: true
    },
    
    // Collaboration & Sharing
    {
      icon: <Share2 size={24} />,
      title: "Secure External Sharing",
      description: "Share documents with external users via secure links with optional password protection and expiration dates.",
      categoryId: "collaboration"
    },
    {
      icon: <Users size={24} />,
      title: "Real-Time Collaboration",
      description: "Multiple users can view and edit documents simultaneously with real-time updates and presence indicators.",
      categoryId: "collaboration"
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Commenting & Discussion",
      description: "Facilitate document discussions with threaded comments, @mentions, and resolution tracking for effective feedback.",
      categoryId: "collaboration"
    },
    {
      icon: <Workflow size={24} />,
      title: "Approval Workflows",
      description: "Route documents through customizable approval processes with notifications, reminders, and status tracking.",
      categoryId: "collaboration"
    },
    {
      icon: <UserPlus size={24} />,
      title: "Team Workspaces",
      description: "Create dedicated spaces for teams or projects with shared access, custom permissions, and collaborative features.",
      categoryId: "collaboration"
    },
    {
      icon: <Calendar size={24} />,
      title: "Document Scheduling",
      description: "Schedule document reviews, updates, or archiving based on time-based triggers or events.",
      categoryId: "collaboration",
      isNew: true
    },
    {
      icon: <Bell size={24} />,
      title: "Smart Notifications",
      description: "Receive customizable alerts about document changes, mentions, approaching deadlines, or workflow tasks.",
      categoryId: "collaboration"
    },
    {
      icon: <UserCheck size={24} />,
      title: "Co-Authoring",
      description: "Simultaneously edit documents with multiple users, seeing changes in real-time with conflict resolution.",
      categoryId: "collaboration"
    },
    {
      icon: <ClipboardCheck size={24} />,
      title: "Task Management",
      description: "Create and assign document-related tasks with due dates, priorities, and progress tracking.",
      categoryId: "collaboration"
    },
    {
      icon: <Inbox size={24} />,
      title: "Activity Feeds",
      description: "Stay updated with personalized feeds showing recent activities on documents you follow or have access to.",
      categoryId: "collaboration"
    },
    {
      icon: <Clipboard size={24} />,
      title: "Document Templates",
      description: "Create and use templates for common document types to ensure consistency and save time.",
      categoryId: "collaboration"
    },
    {
      icon: <UserX size={24} />,
      title: "Access Revocation",
      description: "Instantly revoke access to shared documents, even after they've been downloaded or shared externally.",
      categoryId: "collaboration",
      isEnterprise: true
    },
    
    // Integration & Connectivity
    {
      icon: <RefreshCw size={24} />,
      title: "API Integration",
      description: "Connect with existing business tools and applications through comprehensive REST APIs for seamless data flow.",
      categoryId: "integration"
    },
    {
      icon: <Briefcase size={24} />,
      title: "Microsoft Office Integration",
      description: "Edit Office documents directly within the platform or use Office desktop apps with automatic syncing.",
      categoryId: "integration"
    },
    {
      icon: <Smartphone size={24} />,
      title: "Mobile Applications",
      description: "Access documents on the go with native iOS and Android apps featuring offline access and synchronization.",
      categoryId: "integration"
    },
    {
      icon: <Printer size={24} />,
      title: "Print Management",
      description: "Control and track document printing with watermarking, print quotas, and detailed print logs.",
      categoryId: "integration"
    },
    {
      icon: <Upload size={24} />,
      title: "Bulk Import Tools",
      description: "Migrate large document collections from other systems with metadata mapping and structure preservation.",
      categoryId: "integration"
    },
    {
      icon: <Download size={24} />,
      title: "Batch Export",
      description: "Export multiple documents with their metadata and version history for backup or migration purposes.",
      categoryId: "integration"
    },
    {
      icon: <Monitor size={24} />,
      title: "Desktop Sync",
      description: "Synchronize selected documents to desktop computers for offline access with automatic conflict resolution.",
      categoryId: "integration"
    },
    {
      icon: <Layers size={24} />,
      title: "Third-Party Connectors",
      description: "Pre-built integrations with popular business tools like Salesforce, SAP, SharePoint, and Google Workspace.",
      categoryId: "integration",
      isEnterprise: true
    },
    {
      icon: <Save size={24} />,
      title: "Email Integration",
      description: "Save emails and attachments directly to the document management system with metadata extraction.",
      categoryId: "integration"
    },
    {
      icon: <Repeat size={24} />,
      title: "Webhook Support",
      description: "Configure webhooks to trigger external systems or processes when document events occur.",
      categoryId: "integration",
      isNew: true
    },
    {
      icon: <Maximize2 size={24} />,
      title: "Single Sign-On",
      description: "Streamline authentication with SSO support for SAML, OAuth, and other enterprise identity providers.",
      categoryId: "integration",
      isEnterprise: true
    },
    {
      icon: <Minimize2 size={24} />,
      title: "Embedded Viewer",
      description: "Embed document viewers in other applications or websites with customizable permissions and branding.",
      categoryId: "integration"
    },
    
    // Automation & Workflow
    {
      icon: <Zap size={24} />,
      title: "Workflow Automation",
      description: "Design custom document workflows with conditional logic, parallel processing, and automated actions.",
      categoryId: "automation"
    },
    {
      icon: <FileText size={24} />,
      title: "Document Generation",
      description: "Automatically create documents from templates using data from integrated systems or form submissions.",
      categoryId: "automation"
    },
    {
      icon: <Cpu size={24} />,
      title: "AI-Powered Classification",
      description: "Automatically categorize and tag incoming documents based on content analysis and machine learning.",
      categoryId: "automation",
      isNew: true
    },
    {
      icon: <Search size={24} />,
      title: "Intelligent OCR",
      description: "Extract text and data from scanned documents and images with advanced optical character recognition.",
      categoryId: "automation"
    },
    {
      icon: <Settings size={24} />,
      title: "Business Rules Engine",
      description: "Create and manage rules that automatically trigger actions based on document properties or events.",
      categoryId: "automation",
      isEnterprise: true
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Automated Compliance Checks",
      description: "Verify document compliance with regulatory requirements or internal policies before processing.",
      categoryId: "automation"
    },
    {
      icon: <XCircle size={24} />,
      title: "Exception Handling",
      description: "Define processes for managing exceptions in automated workflows with escalation paths and notifications.",
      categoryId: "automation"
    },
    {
      icon: <UsersIcon size={24} />,
      title: "Dynamic Assignment",
      description: "Automatically assign tasks to users based on workload, expertise, availability, or custom rules.",
      categoryId: "automation",
      isEnterprise: true
    },
    {
      icon: <Clock size={24} />,
      title: "Scheduled Processing",
      description: "Schedule document processing tasks to run automatically at specified times or intervals.",
      categoryId: "automation"
    },
    {
      icon: <Wifi size={24} />,
      title: "Event-Driven Actions",
      description: "Trigger automated processes based on system events, external inputs, or document status changes.",
      categoryId: "automation"
    },
    {
      icon: <Award size={24} />,
      title: "Process Optimization",
      description: "Analyze workflow performance and suggest improvements to streamline document processes.",
      categoryId: "automation",
      isNew: true
    },
    {
      icon: <HelpCircle size={24} />,
      title: "Guided Assistance",
      description: "Interactive wizards that guide users through complex document processes with contextual help.",
      categoryId: "automation"
    },
    
    // Analytics & Reporting
    {
      icon: <BarChart2 size={24} />,
      title: "Document Analytics",
      description: "Gain insights into document usage, access patterns, and workflow efficiency with interactive dashboards.",
      categoryId: "analytics"
    },
    {
      icon: <Sliders size={24} />,
      title: "Custom Reports",
      description: "Create tailored reports with flexible parameters, scheduling options, and multiple export formats.",
      categoryId: "analytics"
    },
    {
      icon: <Info size={24} />,
      title: "Content Intelligence",
      description: "Extract insights from document content using natural language processing and text analytics.",
      categoryId: "analytics",
      isEnterprise: true
    },
    {
      icon: <Users size={24} />,
      title: "User Activity Monitoring",
      description: "Track and analyze user behavior and document interactions to identify usage patterns and training needs.",
      categoryId: "analytics"
    },
    {
      icon: <Clock size={24} />,
      title: "Process Analytics",
      description: "Measure workflow performance with metrics like cycle time, bottlenecks, and completion rates.",
      categoryId: "analytics"
    },
    {
      icon: <AlertTriangle size={24} />,
      title: "Anomaly Detection",
      description: "Automatically identify unusual document access patterns or workflow deviations that may indicate issues.",
      categoryId: "analytics",
      isNew: true
    },
    {
      icon: <Workflow size={24} />,
      title: "Workflow Visualization",
      description: "Interactive diagrams showing document flow through business processes with real-time status indicators.",
      categoryId: "analytics"
    },
    {
      icon: <HardDrive size={24} />,
      title: "Storage Utilization",
      description: "Monitor and forecast storage usage with recommendations for optimization and cost management.",
      categoryId: "analytics"
    },
    {
      icon: <Briefcase size={24} />,
      title: "Business Impact Analysis",
      description: "Quantify the business value of document management with ROI calculations and efficiency metrics.",
      categoryId: "analytics",
      isEnterprise: true
    },
    {
      icon: <Download size={24} />,
      title: "Export & Integration",
      description: "Export analytics data to business intelligence tools or integrate with enterprise reporting systems.",
      categoryId: "analytics"
    },
    {
      icon: <Bell size={24} />,
      title: "Proactive Alerts",
      description: "Set up alerts based on analytics thresholds to proactively address potential issues.",
      categoryId: "analytics"
    },
    {
      icon: <Layers size={24} />,
      title: "Multi-Dimensional Analysis",
      description: "Analyze document metrics across multiple dimensions including time, department, document type, and user roles.",
      categoryId: "analytics",
      isEnterprise: true
    },
    
    // Infrastructure & Performance
    {
      icon: <Server size={24} />,
      title: "Scalable Architecture",
      description: "Handle growing document volumes with a scalable infrastructure that maintains performance as your needs increase.",
      categoryId: "infrastructure"
    },
    {
      icon: <Database size={24} />,
      title: "Distributed Storage",
      description: "Store documents across multiple geographic locations for improved access speed and disaster recovery.",
      categoryId: "infrastructure",
      isEnterprise: true
    },
    {
      icon: <Shield size={24} />,
      title: "Disaster Recovery",
      description: "Comprehensive backup and recovery capabilities with automated failover and minimal downtime.",
      categoryId: "infrastructure"
    },
    {
      icon: <Cpu size={24} />,
      title: "Performance Optimization",
      description: "Automatic system tuning and caching mechanisms to ensure fast document access and processing.",
      categoryId: "infrastructure"
    },
    {
      icon: <Wifi size={24} />,
      title: "Bandwidth Management",
      description: "Optimize network usage with adaptive streaming, compression, and prioritization of critical documents.",
      categoryId: "infrastructure"
    },
    {
      icon: <Globe size={24} />,
      title: "Global Content Delivery",
      description: "Content delivery network integration for fast document access from any location worldwide.",
      categoryId: "infrastructure",
      isEnterprise: true
    },
    {
      icon: <HardDrive size={24} />,
      title: "Tiered Storage",
      description: "Automatically move documents between storage tiers based on access frequency to balance cost and performance.",
      categoryId: "infrastructure"
    },
    {
      icon: <Monitor size={24} />,
      title: "System Monitoring",
      description: "Real-time monitoring of system health, performance metrics, and resource utilization with alerting.",
      categoryId: "infrastructure"
    },
    {
      icon: <RefreshCw size={24} />,
      title: "Zero-Downtime Updates",
      description: "Apply system updates and patches without interrupting document access or ongoing workflows.",
      categoryId: "infrastructure",
      isEnterprise: true
    },
    {
      icon: <Lock size={24} />,
      title: "Data Sovereignty",
      description: "Control where your data is stored and processed to comply with regional regulations and requirements.",
      categoryId: "infrastructure"
    },
    {
      icon: <Zap size={24} />,
      title: "Accelerated Processing",
      description: "Dedicated processing resources for compute-intensive operations like OCR, rendering, and content analysis.",
      categoryId: "infrastructure",
      isNew: true
    },
    {
      icon: <Layers size={24} />,
      title: "Multi-Tenant Architecture",
      description: "Securely isolate data and configurations for different departments or organizations within the same system.",
      categoryId: "infrastructure",
      isEnterprise: true
    },
    
    // User Experience
    {
      icon: <Sliders size={24} />,
      title: "Customizable Interface",
      description: "Tailor the user interface to match your organization's branding and workflow requirements.",
      categoryId: "user-experience"
    },
    {
      icon: <Smartphone size={24} />,
      title: "Responsive Design",
      description: "Access and work with documents from any device with an interface that adapts to screen size and capabilities.",
      categoryId: "user-experience"
    },
    {
      icon: <Layers size={24} />,
      title: "Personalized Dashboard",
      description: "User-specific dashboards showing recent documents, tasks, and relevant information for improved productivity.",
      categoryId: "user-experience"
    },
    {
      icon: <Search size={24} />,
      title: "Advanced Search Experience",
      description: "Intuitive search interface with filters, saved searches, and search history for efficient information retrieval.",
      categoryId: "user-experience"
    },
    {
      icon: <FileText size={24} />,
      title: "Universal Viewer",
      description: "View over 200 file formats directly in the browser without requiring native applications or downloads.",
      categoryId: "user-experience"
    },
    {
      icon: <Maximize2 size={24} />,
      title: "Accessibility Compliance",
      description: "WCAG 2.1 AA compliant interface with screen reader support, keyboard navigation, and accessibility features.",
      categoryId: "user-experience"
    },
    {
      icon: <Globe size={24} />,
      title: "Multilingual Support",
      description: "Interface available in multiple languages with automatic translation of document content and metadata.",
      categoryId: "user-experience",
      isEnterprise: true
    },
    {
      icon: <Clock size={24} />,
      title: "Quick Actions",
      description: "Perform common tasks with one click using context-sensitive action menus and keyboard shortcuts.",
      categoryId: "user-experience"
    },
    {
      icon: <HelpCircle size={24} />,
      title: "Contextual Help",
      description: "In-app guidance, tooltips, and help resources that provide assistance based on the current task or context.",
      categoryId: "user-experience"
    },
    {
      icon: <Workflow size={24} />,
      title: "Guided Workflows",
      description: "Step-by-step interfaces that guide users through complex processes with clear instructions and validation.",
      categoryId: "user-experience"
    },
    {
      icon: <Settings size={24} />,
      title: "User Preferences",
      description: "Allow users to customize their experience with personal settings for notifications, display options, and defaults.",
      categoryId: "user-experience"
    },
    {
      icon: <Zap size={24} />,
      title: "Performance Optimization",
      description: "Fast loading times and responsive interactions with progressive loading and background processing.",
      categoryId: "user-experience",
      isNew: true
    }
  ];

  // Feature comparison data
  const featureComparisons: FeatureComparison[] = [
    {
      category: "Core Capabilities",
      features: [
        { name: "Cloud-based Storage", docuNimbus: true, traditional: false, competitors: true },
        { name: "Version Control", docuNimbus: true, traditional: false, competitors: true },
        { name: "Full-text Search", docuNimbus: true, traditional: false, competitors: true },
        { name: "Metadata Management", docuNimbus: true, traditional: false, competitors: true },
        { name: "Mobile Access", docuNimbus: true, traditional: false, competitors: true },
        { name: "Document Relationships", docuNimbus: true, traditional: false, competitors: false }
      ]
    },
    {
      category: "Security",
      features: [
        { name: "256-bit Encryption", docuNimbus: true, traditional: false, competitors: true },
        { name: "Role-based Access Control", docuNimbus: true, traditional: true, competitors: true },
        { name: "Multi-factor Authentication", docuNimbus: true, traditional: false, competitors: true },
        { name: "Audit Trails", docuNimbus: true, traditional: false, competitors: true },
        { name: "Information Rights Management", docuNimbus: true, traditional: false, competitors: false },
        { name: "Geographic Restrictions", docuNimbus: true, traditional: false, competitors: false }
      ]
    },
    {
      category: "Collaboration",
      features: [
        { name: "Real-time Co-authoring", docuNimbus: true, traditional: false, competitors: false },
        { name: "Secure External Sharing", docuNimbus: true, traditional: false, competitors: true },
        { name: "Commenting & Discussion", docuNimbus: true, traditional: false, competitors: true },
        { name: "Approval Workflows", docuNimbus: true, traditional: false, competitors: true },
        { name: "Team Workspaces", docuNimbus: true, traditional: false, competitors: true },
        { name: "Access Revocation", docuNimbus: true, traditional: false, competitors: false }
      ]
    },
    {
      category: "Intelligence",
      features: [
        { name: "AI-powered Classification", docuNimbus: true, traditional: false, competitors: false },
        { name: "Intelligent OCR", docuNimbus: true, traditional: false, competitors: true },
        { name: "Content Intelligence", docuNimbus: true, traditional: false, competitors: false },
        { name: "Process Optimization", docuNimbus: true, traditional: false, competitors: false },
        { name: "Anomaly Detection", docuNimbus: true, traditional: false, competitors: false },
        { name: "Business Impact Analysis", docuNimbus: true, traditional: false, competitors: false }
      ]
    }
  ];

  // State for active category
  const [activeCategory, setActiveCategory] = useState<string>("all");
  
  // State for view mode (grid or list)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  
  // State for sort order
  const [sortOrder, setSortOrder] = useState<"default" | "az" | "new">("default");
  
  // State for comparison view
  const [showComparison, setShowComparison] = useState<boolean>(false);
  
  // State for expanded categories in list view
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
  
  // Toggle category expansion in list view
  const toggleCategoryExpansion = (categoryId: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };
  
  // Initialize expanded categories on first render
  useEffect(() => {
    const initialExpanded = categories.reduce((acc, category) => {
      acc[category.id] = true; // Start with all expanded
      return acc;
    }, {} as Record<string, boolean>);
    
    setExpandedCategories(initialExpanded);
  }, []);
  
  // Filter features based on active category
  const filteredFeatures = activeCategory === "all" 
    ? allFeatures 
    : allFeatures.filter(feature => feature.categoryId === activeCategory);
  
  // Sort features based on sort order
  const sortedFeatures = [...filteredFeatures].sort((a, b) => {
    if (sortOrder === "az") {
      return a.title.localeCompare(b.title);
    } else if (sortOrder === "new") {
      // New features first, then alphabetical
      if (a.isNew && !b.isNew) return -1;
      if (!a.isNew && b.isNew) return 1;
      return a.title.localeCompare(b.title);
    }
    // Default sorting - by category then as they appear in the array
    if (activeCategory === "all") {
      return a.categoryId.localeCompare(b.categoryId) || 0;
    }
    return 0;
  });
  
  // Group features by category for list view
  const featuresByCategory = categories.map(category => {
    const features = allFeatures.filter(feature => feature.categoryId === category.id);
    return {
      ...category,
      features
    };
  });

  // Count features by category
  const featureCounts = categories.reduce((acc, category) => {
    acc[category.id] = allFeatures.filter(f => f.categoryId === category.id).length;
    return acc;
  }, {} as Record<string, number>);

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };
  
  // Feature item animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  // Header animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  return (
    <>
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
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
            
            <motion.div 
              className="text-center max-w-4xl"
              initial="hidden"
              animate="visible"
              variants={headerVariants}
            >
              <h1 className="text-5xl font-bold mb-6 text-gray-800 tracking-tight">
                Complete Features List
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Explore the comprehensive set of features that make DocuNimbus the most powerful 
                document management solution for modern organizations.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <button 
                  onClick={() => setShowComparison(false)}
                  className={`px-5 py-2.5 rounded-lg font-medium transition-all ${
                    !showComparison 
                      ? 'bg-primary text-white shadow-md' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Feature Explorer
                </button>
                <button 
                  onClick={() => setShowComparison(true)}
                  className={`px-5 py-2.5 rounded-lg font-medium transition-all ${
                    showComparison 
                      ? 'bg-primary text-white shadow-md' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Comparison Chart
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {!showComparison ? (
        <section className="page-section">
          <div className="container-custom">
            <div className="mb-12">
              <div className="flex justify-between items-center mb-6">
                <h2 className="section-title mb-0">Feature Categories</h2>
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    <span className="text-sm text-gray-500 mr-2">Legend:</span>
                    <span className="inline-flex items-center mr-3">
                      <span className="w-3 h-3 rounded-full bg-blue-100 border border-blue-500 mr-1"></span>
                      <span className="text-sm text-gray-600">New</span>
                    </span>
                    <span className="inline-flex items-center">
                      <span className="w-3 h-3 rounded-full bg-purple-100 border border-purple-500 mr-1"></span>
                      <span className="text-sm text-gray-600">Enterprise</span>
                    </span>
                  </div>
                  
                  <div className="flex bg-gray-100 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-2 rounded-md ${viewMode === "grid" ? "bg-white shadow-sm" : "text-gray-600 hover:bg-gray-200"}`}
                      aria-label="Grid view"
                    >
                      <Layers size={18} />
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`p-2 rounded-md ${viewMode === "list" ? "bg-white shadow-sm" : "text-gray-600 hover:bg-gray-200"}`}
                      aria-label="List view"
                    >
                      <Layers size={18} />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div 
                  className={`p-5 rounded-xl cursor-pointer transition-all duration-300 transform ${
                    activeCategory === "all" 
                      ? 'bg-primary text-white shadow-md scale-[1.02]' 
                      : 'bg-white border-2 border-gray-100 hover:border-gray-200 hover:shadow-sm'
                  }`}
                  onClick={() => setActiveCategory("all")}
                >
                  <div className={`p-3 rounded-full inline-flex mb-3 ${
                    activeCategory === "all" ? 'bg-white/20' : 'bg-primary/10'
                  }`}>
                    <Layers className={`h-6 w-6 ${
                      activeCategory === "all" ? 'text-white' : 'text-primary'
                    }`} />
                  </div>
                  <h3 className={`text-lg font-semibold mb-1 ${
                    activeCategory === "all" ? 'text-white' : 'text-gray-800'
                  }`}>All Features</h3>
                  <div className="flex justify-between items-center">
                    <p className={`text-sm ${
                      activeCategory === "all" ? 'text-white/80' : 'text-gray-600'
                    }`}>
                      Complete feature set
                    </p>
                    <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                      activeCategory === "all" ? 'bg-white/30 text-white' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {allFeatures.length}
                    </span>
                  </div>
                </div>
                
                {categories.map(category => (
                  <CategoryCard 
                    key={category.id}
                    category={category}
                    isActive={activeCategory === category.id}
                    onClick={() => setActiveCategory(category.id)}
                    count={featureCounts[category.id]}
                  />
                ))}
              </div>
            </div>
            
            {viewMode === "grid" ? (
              <motion.div 
                className="mb-12"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="section-title mb-0">
                    {activeCategory === "all" 
                      ? "All Features" 
                      : categories.find(c => c.id === activeCategory)?.title || "Features"}
                  </h2>
                  <div className="flex items-center gap-4">
                    <div className="text-gray-500">
                      Showing {filteredFeatures.length} features
                    </div>
                    
                    <div className="relative">
                      <select
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value as any)}
                        className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="default">Default Order</option>
                        <option value="az">Alphabetical (A-Z)</option>
                        <option value="new">New Features First</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none h-4 w-4" />
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {sortedFeatures.map((feature, index) => (
                    <motion.div key={`${feature.categoryId}-${index}`} variants={itemVariants}>
                      <FeatureCard {...feature} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div 
                className="mb-12"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="section-title mb-0">Features by Category</h2>
                  <div className="flex items-center gap-4">
                    <div className="text-gray-500">
                      {allFeatures.length} total features
                    </div>
                    
                    <div className="relative">
                      <select
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value as any)}
                        className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="default">Default Order</option>
                        <option value="az">Alphabetical (A-Z)</option>
                        <option value="new">New Features First</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none h-4 w-4" />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {featuresByCategory.map((category) => (
                    <motion.div 
                      key={category.id}
                      className="border border-gray-200 rounded-xl overflow-hidden"
                      variants={itemVariants}
                    >
                      <div 
                        className={`flex justify-between items-center p-5 cursor-pointer ${category.bgColor}`}
                        onClick={() => toggleCategoryExpansion(category.id)}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-full ${category.iconBgColor}`}>
                            <div className={category.iconColor}>
                              {category.icon}
                            </div>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-800">{category.title}</h3>
                            <p className="text-sm text-gray-600">{category.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                            {category.features.length} features
                          </span>
                          {expandedCategories[category.id] ? (
                            <ChevronDown className="h-5 w-5 text-gray-600" />
                          ) : (
                            <ChevronRight className="h-5 w-5 text-gray-600" />
                          )}
                        </div>
                      </div>
                      
                      {expandedCategories[category.id] && (
                        <div className="bg-white">
                          <table className="w-full">
                            <thead className="bg-gray-50 border-y border-gray-200">
                              <tr>
                                <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Feature</th>
                                <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 w-32">Type</th>
                                <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Description</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                              {category.features.map((feature, index) => (
                                <tr 
                                  key={`${category.id}-${index}`}
                                  className="hover:bg-gray-50 transition-colors"
                                >
                                  <td className="py-4 px-4">
                                    <div className="flex items-center gap-3">
                                      <div className={`p-2 rounded-full ${category.iconBgColor}`}>
                                        {feature.icon}
                                      </div>
                                      <span className="font-medium text-gray-800">{feature.title}</span>
                                    </div>
                                  </td>
                                  <td className="py-4 px-4">
                                    <div className="flex gap-1">
                                      {feature.isNew && (
                                        <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                                          New
                                        </span>
                                      )}
                                      {feature.isEnterprise && (
                                        <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
                                          Enterprise
                                        </span>
                                      )}
                                      {!feature.isNew && !feature.isEnterprise && (
                                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                                          Standard
                                        </span>
                                      )}
                                    </div>
                                  </td>
                                  <td className="py-4 px-4 text-gray-600">
                                    {feature.description}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
            
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 shadow-sm">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Need a Custom Feature?
                </h3>
                <p className="text-gray-600 mb-6">
                  Don't see what you're looking for? Our team can develop custom features 
                  tailored to your organization's specific requirements.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link 
                    href="/contact" 
                    className="btn-primary inline-flex items-center justify-center"
                  >
                    Contact Our Team
                  </Link>
                  <Link 
                    href="/demo-dms" 
                    className="btn-outline inline-flex items-center justify-center"
                  >
                    <span>Try Interactive Demo</span>
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="page-section">
          <div className="container-custom">
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="section-title mb-0">Feature Comparison</h2>
                <div className="text-gray-500">
                  See how DocuNimbus compares to alternatives
                </div>
              </div>
              
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mb-8">
                <div className="p-6 bg-gray-50 border-b border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-800">DocuNimbus vs. Traditional & Competitor Solutions</h3>
                  <p className="text-gray-600 mt-2">
                    Compare our comprehensive feature set with traditional document management systems and other cloud competitors.
                  </p>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="py-4 px-6 text-left text-sm font-medium text-gray-700 border-b border-gray-200 w-1/3">Feature</th>
                        <th className="py-4 px-6 text-center text-sm font-medium text-primary border-b border-gray-200">
                          <div className="flex flex-col items-center">
                            <Cloud className="h-6 w-6 mb-1" />
                            <span>DocuNimbus</span>
                          </div>
                        </th>
                        <th className="py-4 px-6 text-center text-sm font-medium text-gray-700 border-b border-gray-200">
                          <div className="flex flex-col items-center">
                            <Folder className="h-6 w-6 mb-1" />
                            <span>Traditional DMS</span>
                          </div>
                        </th>
                        <th className="py-4 px-6 text-center text-sm font-medium text-gray-700 border-b border-gray-200">
                          <div className="flex flex-col items-center">
                            <Cloud className="h-6 w-6 mb-1" />
                            <span>Cloud Competitors</span>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {featureComparisons.map((category, categoryIndex) => (
                        <React.Fragment key={`category-${categoryIndex}`}>
                          <tr className="bg-gray-50">
                            <td colSpan={4} className="py-3 px-6 font-semibold text-gray-800 border-t border-b border-gray-200">
                              {category.category}
                            </td>
                          </tr>
                          {category.features.map((feature, featureIndex) => (
                            <tr 
                              key={`feature-${categoryIndex}-${featureIndex}`}
                              className="hover:bg-gray-50 transition-colors"
                            >
                              <td className="py-4 px-6 border-b border-gray-200 font-medium text-gray-800">
                                {feature.name}
                              </td>
                              <td className="py-4 px-6 text-center border-b border-gray-200">
                                {feature.docuNimbus ? (
                                  <div className="flex justify-center">
                                    <div className="bg-green-100 p-1 rounded-full">
                                      <Check className="h-5 w-5 text-green-600" />
                                    </div>
                                  </div>
                                ) : (
                                  <div className="flex justify-center">
                                    <div className="bg-red-100 p-1 rounded-full">
                                      <XCircle className="h-5 w-5 text-red-600" />
                                    </div>
                                  </div>
                                )}
                              </td>
                              <td className="py-4 px-6 text-center border-b border-gray-200">
                                {feature.traditional ? (
                                  <div className="flex justify-center">
                                    <div className="bg-green-100 p-1 rounded-full">
                                      <Check className="h-5 w-5 text-green-600" />
                                    </div>
                                  </div>
                                ) : (
                                  <div className="flex justify-center">
                                    <div className="bg-red-100 p-1 rounded-full">
                                      <XCircle className="h-5 w-5 text-red-600" />
                                    </div>
                                  </div>
                                )}
                              </td>
                              <td className="py-4 px-6 text-center border-b border-gray-200">
                                {feature.competitors ? (
                                  <div className="flex justify-center">
                                    <div className="bg-green-100 p-1 rounded-full">
                                      <Check className="h-5 w-5 text-green-600" />
                                    </div>
                                  </div>
                                ) : (
                                  <div className="flex justify-center">
                                    <div className="bg-red-100 p-1 rounded-full">
                                      <XCircle className="h-5 w-5 text-red-600" />
                                    </div>
                                  </div>
                                )}
                              </td>
                            </tr>
                          ))}
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <Info className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-800 mb-2">Why DocuNimbus Stands Out</h4>
                    <p className="text-blue-700">
                      DocuNimbus combines the best of both worlds: the security and control of traditional document management systems with the 
                      accessibility and modern features of cloud solutions. Our platform goes beyond competitors with advanced AI capabilities, 
                      superior collaboration tools, and enterprise-grade security that adapts to your organization's specific needs.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 shadow-sm">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Ready to Experience the Difference?
                </h3>
                <p className="text-gray-600 mb-6">
                  See DocuNimbus in action with our interactive demo or contact our team for a personalized demonstration 
                  tailored to your organization's specific needs.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link 
                    href="/demo-dms" 
                    className="btn-primary inline-flex items-center justify-center"
                  >
                    <span>Try Interactive Demo</span>
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </Link>
                  <Link 
                    href="/contact" 
                    className="btn-outline inline-flex items-center justify-center"
                  >
                    Request Custom Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="page-section bg-primary text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Experience the Power of DocuNimbus
              </h2>
              <p className="text-lg opacity-90 mb-6">
                Our comprehensive feature set is designed to transform how your organization 
                manages documents and information. From basic file storage to advanced 
                workflow automation and AI-powered insights, DocuNimbus provides everything 
                you need in a modern document management system.
              </p>
              <p className="text-lg opacity-90 mb-8">
                Ready to see these features in action? Try our interactive demo or 
                contact our team for a personalized demonstration tailored to your 
                specific industry and use cases.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/demo-dms" 
                  className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors flex items-center justify-center"
                >
                  <span>Try Interactive Demo</span>
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  href="/contact" 
                  className="bg-primary-foreground/20 hover:bg-primary-foreground/30 border border-white/30 text-white px-6 py-3 rounded-md font-medium transition-colors flex items-center justify-center"
                >
                  Request Custom Demo
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                width={600}
                height={400}
                alt="Team working with DocuNimbus"
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg p-6 shadow-lg max-w-xs">
                <p className="font-semibold text-primary mb-1">Enterprise Ready</p>
                <p className="text-sm text-gray-600">Scalable from small teams to global organizations</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
