"use client";

import { useEffect, useRef } from "react";

type SpeckleViewerProps = {
  streamUrl: string;
  title?: string;
};

export const SpeckleViewer = ({ streamUrl, title }: SpeckleViewerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Speckle Viewer script
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@speckle/viewer@2";
    script.async = true;
    
    script.onload = () => {
      if (containerRef.current && (window as any).SpeckleViewer) {
        const viewer = new (window as any).SpeckleViewer.Viewer({
          container: containerRef.current,
          showStats: false,
        });
        
        viewer.loadObject(streamUrl);
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [streamUrl]);

  return (
    <div className="w-full h-full relative bg-black/80">
      {title && (
        <div className="absolute top-4 left-4 z-10 bg-purple-500/90 backdrop-blur-sm px-4 py-2 rounded-lg">
          <h3 className="text-white font-semibold text-sm">{title}</h3>
        </div>
      )}
      <div ref={containerRef} className="w-full h-full" />
    </div>
  );
};
