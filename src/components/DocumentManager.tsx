"use client";

import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { useDropzone } from "react-dropzone";
import { 
  Folder, 
  File, 
  FileText, 
  Image as ImageIcon, 
  Video, 
  ChevronRight, 
  ChevronDown, 
  Search, 
  Plus, 
  Star, 
  Clock, 
  Trash2, 
  Download, 
  Share2, 
  MoreHorizontal,
  X,
  ArrowLeft,
  ArrowRight,
  ZoomIn,
  ZoomOut,
  Maximize2
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// Types
type FileType = "pdf" | "image" | "doc" | "video" | "other";

interface DocFile {
  id: string;
  name: string;
  type: FileType;
  size: string;
  lastModified: string;
  starred: boolean;
  content?: string | ArrayBuffer | null;
  preview?: string;
}

interface Folder {
  id: string;
  name: string;
  files: DocFile[];
  subfolders: Folder[];
  expanded?: boolean;
}

// Sample data
const initialFolders: Folder[] = [
  {
    id: "folder-1",
    name: "Company Documents",
    expanded: true,
    files: [
      {
        id: "file-1",
        name: "Annual Report 2024.pdf",
        type: "pdf",
        size: "2.4 MB",
        lastModified: "2024-04-15",
        starred: true,
        preview: "https://images.unsplash.com/photo-1568992688065-536aad8a12f6?q=80&w=1000"
      },
      {
        id: "file-2",
        name: "Marketing Strategy.pdf",
        type: "pdf",
        size: "1.8 MB",
        lastModified: "2024-04-10",
        starred: false,
        preview: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000"
      }
    ],
    subfolders: [
      {
        id: "folder-1-1",
        name: "HR Documents",
        files: [
          {
            id: "file-3",
            name: "Employee Handbook.pdf",
            type: "pdf",
            size: "3.2 MB",
            lastModified: "2024-03-22",
            starred: false,
            preview: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000"
          }
        ],
        subfolders: []
      }
    ]
  },
  {
    id: "folder-2",
    name: "Project Files",
    files: [
      {
        id: "file-4",
        name: "Project Timeline.pdf",
        type: "pdf",
        size: "1.1 MB",
        lastModified: "2024-04-05",
        starred: true,
        preview: "https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?q=80&w=1000"
      },
      {
        id: "file-5",
        name: "Budget Forecast.pdf",
        type: "pdf",
        size: "0.9 MB",
        lastModified: "2024-04-02",
        starred: false,
        preview: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000"
      }
    ],
    subfolders: []
  },
  {
    id: "folder-3",
    name: "Client Presentations",
    files: [
      {
        id: "file-6",
        name: "Client Proposal.pdf",
        type: "pdf",
        size: "4.5 MB",
        lastModified: "2024-03-28",
        starred: false,
        preview: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000"
      },
      {
        id: "file-7",
        name: "Product Demo.mp4",
        type: "video",
        size: "28.4 MB",
        lastModified: "2024-03-15",
        starred: true,
        preview: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000"
      }
    ],
    subfolders: []
  }
];

// File icon component
const FileIcon: React.FC<{ type: FileType }> = ({ type }) => {
  switch (type) {
    case "pdf":
      return <FileText className="text-red-500" />;
    case "image":
      return <ImageIcon className="text-blue-500" />;
    case "doc":
      return <File className="text-blue-700" />;
    case "video":
      return <Video className="text-purple-500" />;
    default:
      return <File className="text-gray-500" />;
  }
};

export const DocumentManager: React.FC = () => {
  const [folders, setFolders] = useState<Folder[]>(initialFolders);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFile, setSelectedFile] = useState<DocFile | null>(null);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  // Handle file upload
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'application/pdf': ['.pdf'],
      'image/*': ['.png', '.jpg', '.jpeg'],
      'video/*': ['.mp4', '.webm']
    },
    onDrop: (acceptedFiles) => {
      const newFiles = acceptedFiles.map(file => {
        // Create file preview
        const reader = new FileReader();
        reader.readAsArrayBuffer(file);
        
        const fileType: FileType = file.type.includes('pdf') 
          ? 'pdf' 
          : file.type.includes('image') 
            ? 'image' 
            : file.type.includes('video')
              ? 'video'
              : 'other';
              
        return {
          id: `file-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          name: file.name,
          type: fileType,
          size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
          lastModified: new Date().toISOString().split('T')[0],
          starred: false,
          content: null, // Will be populated when file is read
        } as DocFile;
      });
      
      // Add to first folder for demo purposes
      const updatedFolders = [...folders];
      updatedFolders[0].files = [...updatedFolders[0].files, ...newFiles];
      setFolders(updatedFolders);
    }
  });
  
  // Toggle folder expansion
  const toggleFolder = (folderId: string) => {
    const updateFolderExpansion = (folders: Folder[]): Folder[] => {
      return folders.map(folder => {
        if (folder.id === folderId) {
          return { ...folder, expanded: !folder.expanded };
        }
        if (folder.subfolders.length > 0) {
          return {
            ...folder,
            subfolders: updateFolderExpansion(folder.subfolders)
          };
        }
        return folder;
      });
    };
    
    setFolders(updateFolderExpansion(folders));
  };
  
  // Toggle star status
  const toggleStar = (fileId: string) => {
    const updateFileStar = (folders: Folder[]): Folder[] => {
      return folders.map(folder => {
        const updatedFiles = folder.files.map(file => {
          if (file.id === fileId) {
            return { ...file, starred: !file.starred };
          }
          return file;
        });
        
        return {
          ...folder,
          files: updatedFiles,
          subfolders: updateFileStar(folder.subfolders)
        };
      });
    };
    
    setFolders(updateFileStar(folders));
  };
  
  // Handle document loading
  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };
  
  // Navigation functions
  const goToPrevPage = () => {
    setPageNumber(prevPageNumber => Math.max(prevPageNumber - 1, 1));
  };
  
  const goToNextPage = () => {
    setPageNumber(prevPageNumber => Math.min(prevPageNumber + 1, numPages || 1));
  };
  
  // Zoom functions
  const zoomIn = () => {
    setScale(prevScale => Math.min(prevScale + 0.2, 2.5));
  };
  
  const zoomOut = () => {
    setScale(prevScale => Math.max(prevScale - 0.2, 0.5));
  };
  
  // Toggle fullscreen
  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };
  
  // Filter files based on search query
  const filterFolders = (folders: Folder[], query: string): Folder[] => {
    if (!query) return folders;
    
    return folders.map(folder => {
      const filteredFiles = folder.files.filter(file => 
        file.name.toLowerCase().includes(query.toLowerCase())
      );
      
      const filteredSubfolders = filterFolders(folder.subfolders, query);
      
      return {
        ...folder,
        files: filteredFiles,
        subfolders: filteredSubfolders,
        // Auto-expand folders with matching files when searching
        expanded: filteredFiles.length > 0 || filteredSubfolders.some(sf => sf.files.length > 0 || sf.expanded)
      };
    }).filter(folder => 
      folder.name.toLowerCase().includes(query.toLowerCase()) || 
      folder.files.length > 0 || 
      folder.subfolders.some(sf => sf.files.length > 0 || sf.subfolders.length > 0)
    );
  };
  
  const filteredFolders = filterFolders(folders, searchQuery);
  
  // Render folder structure recursively
  const renderFolders = (folders: Folder[], level = 0) => {
    return folders.map(folder => (
      <div key={folder.id} className="mb-1">
        <div 
          className={`flex items-center py-1.5 px-2 rounded-md hover:bg-gray-100 cursor-pointer ${level === 0 ? 'font-medium' : ''}`}
          onClick={() => toggleFolder(folder.id)}
          style={{ paddingLeft: `${level * 16 + 8}px` }}
        >
          {folder.subfolders.length > 0 ? (
            folder.expanded ? (
              <ChevronDown className="h-4 w-4 text-gray-500 mr-1.5" />
            ) : (
              <ChevronRight className="h-4 w-4 text-gray-500 mr-1.5" />
            )
          ) : (
            <div className="w-4 mr-1.5"></div>
          )}
          <Folder className={`h-5 w-5 ${level === 0 ? 'text-primary' : 'text-gray-500'} mr-2`} />
          <span className="text-sm">{folder.name}</span>
          <span className="text-xs text-gray-500 ml-2">({folder.files.length})</span>
        </div>
        
        {folder.expanded && (
          <>
            {folder.files.map(file => (
              <div 
                key={file.id} 
                className={`flex items-center py-1.5 px-2 rounded-md hover:bg-gray-100 cursor-pointer ${selectedFile?.id === file.id ? 'bg-blue-50' : ''}`}
                style={{ paddingLeft: `${level * 16 + 32}px` }}
                onClick={() => setSelectedFile(file)}
              >
                <FileIcon type={file.type} className="h-5 w-5 mr-2" />
                <span className="text-sm flex-1 truncate">{file.name}</span>
                <button 
                  className="opacity-0 group-hover:opacity-100 hover:text-primary"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleStar(file.id);
                  }}
                >
                  <Star className={`h-4 w-4 ${file.starred ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'}`} />
                </button>
              </div>
            ))}
            {folder.subfolders.length > 0 && renderFolders(folder.subfolders, level + 1)}
          </>
        )}
      </div>
    ));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      <div className="flex h-[600px]">
        {/* Sidebar */}
        <div className="w-64 border-r border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search documents..."
                className="w-full pl-9 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <div className="p-4 flex-1 overflow-y-auto">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-700">My Documents</h3>
                <button className="text-primary hover:text-primary/80">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              {renderFolders(filteredFolders)}
            </div>
            
            <div className="mb-4">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Quick Access</h3>
              <div className="space-y-1">
                <div className="flex items-center py-1.5 px-2 rounded-md hover:bg-gray-100 cursor-pointer">
                  <Star className="h-4 w-4 text-yellow-400 mr-2" />
                  <span className="text-sm">Starred</span>
                </div>
                <div className="flex items-center py-1.5 px-2 rounded-md hover:bg-gray-100 cursor-pointer">
                  <Clock className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="text-sm">Recent</span>
                </div>
                <div className="flex items-center py-1.5 px-2 rounded-md hover:bg-gray-100 cursor-pointer">
                  <Trash2 className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="text-sm">Trash</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-4 border-t border-gray-200">
            <div {...getRootProps()} className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center hover:border-primary transition-colors cursor-pointer">
              <input {...getInputProps()} />
              <Plus className="h-5 w-5 mx-auto text-gray-400" />
              <p className="text-xs text-gray-500 mt-1">Upload Files</p>
            </div>
          </div>
        </div>
        
        {/* Main content */}
        <div className="flex-1 flex flex-col">
          {selectedFile ? (
            <>
              <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-medium text-gray-800">{selectedFile.name}</h2>
                  <p className="text-sm text-gray-500">
                    {selectedFile.size} • Last modified: {selectedFile.lastModified}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 rounded-md hover:bg-gray-100">
                    <Download className="h-5 w-5 text-gray-600" />
                  </button>
                  <button className="p-2 rounded-md hover:bg-gray-100">
                    <Share2 className="h-5 w-5 text-gray-600" />
                  </button>
                  <button className="p-2 rounded-md hover:bg-gray-100">
                    <MoreHorizontal className="h-5 w-5 text-gray-600" />
                  </button>
                  <button 
                    className="p-2 rounded-md hover:bg-gray-100"
                    onClick={() => setSelectedFile(null)}
                  >
                    <X className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              </div>
              
              <div className={`flex-1 overflow-auto bg-gray-50 ${isFullscreen ? 'fixed inset-0 z-50 bg-gray-900' : ''}`}>
                <div className="flex justify-center p-4">
                  <div className="bg-white shadow-md rounded-md overflow-hidden">
                    {selectedFile.type === 'pdf' ? (
                      <div className="relative">
                        <Document
                          file={selectedFile.content || `https://cors-anywhere.herokuapp.com/https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf`}
                          onLoadSuccess={onDocumentLoadSuccess}
                          loading={
                            <div className="flex justify-center items-center h-[400px]">
                              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                            </div>
                          }
                        >
                          <Page 
                            pageNumber={pageNumber} 
                            scale={scale}
                            renderTextLayer={false}
                            renderAnnotationLayer={false}
                          />
                        </Document>
                        
                        {/* PDF controls */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full shadow-md px-4 py-2 flex items-center space-x-4">
                          <button 
                            onClick={goToPrevPage} 
                            disabled={pageNumber <= 1}
                            className={`p-1 rounded-full ${pageNumber <= 1 ? 'text-gray-300' : 'hover:bg-gray-100 text-gray-700'}`}
                          >
                            <ArrowLeft className="h-5 w-5" />
                          </button>
                          
                          <span className="text-sm">
                            {pageNumber} / {numPages || 1}
                          </span>
                          
                          <button 
                            onClick={goToNextPage} 
                            disabled={pageNumber >= (numPages || 1)}
                            className={`p-1 rounded-full ${pageNumber >= (numPages || 1) ? 'text-gray-300' : 'hover:bg-gray-100 text-gray-700'}`}
                          >
                            <ArrowRight className="h-5 w-5" />
                          </button>
                          
                          <div className="h-4 border-l border-gray-300"></div>
                          
                          <button 
                            onClick={zoomOut}
                            className="p-1 rounded-full hover:bg-gray-100 text-gray-700"
                          >
                            <ZoomOut className="h-5 w-5" />
                          </button>
                          
                          <span className="text-sm">
                            {Math.round(scale * 100)}%
                          </span>
                          
                          <button 
                            onClick={zoomIn}
                            className="p-1 rounded-full hover:bg-gray-100 text-gray-700"
                          >
                            <ZoomIn className="h-5 w-5" />
                          </button>
                          
                          <div className="h-4 border-l border-gray-300"></div>
                          
                          <button 
                            onClick={toggleFullscreen}
                            className="p-1 rounded-full hover:bg-gray-100 text-gray-700"
                          >
                            <Maximize2 className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    ) : selectedFile.type === 'video' ? (
                      <video 
                        controls 
                        className="max-h-[500px] w-auto"
                        src="https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4"
                      />
                    ) : (
                      <img 
                        src={selectedFile.preview || "https://images.unsplash.com/photo-1568992688065-536aad8a12f6?q=80&w=1000"} 
                        alt={selectedFile.name}
                        className="max-h-[500px] w-auto"
                      />
                    )}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center p-8 bg-gray-50">
              <img 
                src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1000" 
                alt="Select a document"
                className="w-64 h-64 object-cover rounded-lg mb-6 opacity-50"
              />
              <h3 className="text-xl font-medium text-gray-700 mb-2">No document selected</h3>
              <p className="text-gray-500 text-center max-w-md">
                Select a document from the sidebar to preview it here, or upload a new document to get started.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
