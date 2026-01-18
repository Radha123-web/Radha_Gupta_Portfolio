"use client"

import { cn } from "@/app/utils/cn"

interface PDFViewerProps {
  src: string
  title?: string
  className?: string
}

export function PDFViewer({ src, title = "Project Document", className }: PDFViewerProps) {
  return (
    <div className={cn("w-full h-full min-h-[600px] rounded-lg overflow-hidden border border-gray-200", className)}>
      <iframe
        src={src}
        title={title}
        className="w-full h-full"
        style={{ minHeight: "600px" }}
        loading="lazy"
      />
      
      {/* Fallback for browsers that don't support PDF viewing */}
      <div className="hidden">
        <p className="text-center p-4">
          <a 
            href={src} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            View PDF Document
          </a>
        </p>
      </div>
    </div>
  )
}