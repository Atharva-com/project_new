"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

export default function DemoPage() {
  const router = useRouter();
  
  useEffect(() => {
    // Redirect to our internal demo page after a short delay
    const timer = setTimeout(() => {
      router.push("/demo-dms");
    }, 1500);
    
    return () => clearTimeout(timer);
  }, [router]);
  
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-16">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <Loader2 className="h-12 w-12 text-primary animate-spin" />
        </div>
        <h1 className="text-3xl font-bold mb-4">Loading DocuNimbus Demo</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          Preparing your interactive demo experience...
          If you are not redirected automatically, please click the button below.
        </p>
        <a 
          href="/demo-dms" 
          className="btn-primary inline-flex items-center"
        >
          Launch Demo Now
        </a>
      </div>
    </div>
  );
}
