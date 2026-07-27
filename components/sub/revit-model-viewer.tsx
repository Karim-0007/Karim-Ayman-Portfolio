"use client";

import { useRef, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { 
  OrbitControls, 
  PerspectiveCamera, 
  Environment,
  Grid,
  useProgress,
  Html,
  Center,
  useGLTF
} from "@react-three/drei";

// Loading component
function Loader() {
  const { progress } = useProgress();
  const estimatedSizeMB = 85;
  const loadedMB = (estimatedSizeMB * progress / 100).toFixed(1);
  
  return (
    <Html center>
      <div className="flex flex-col items-center gap-4 bg-black/80 backdrop-blur-md p-8 rounded-2xl border border-purple-500/30">
        <div className="w-20 h-20 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
        <div className="flex flex-col items-center gap-2">
          <div className="text-white text-base font-semibold">
            Loading 3D Model...
          </div>
          <div className="text-purple-300 text-sm">
            {loadedMB} MB / {estimatedSizeMB} MB
          </div>
          <div className="text-gray-400 text-xs">
            {progress.toFixed(0)}% complete
          </div>
        </div>
        <div className="w-64 h-3 bg-gray-800 rounded-full overflow-hidden border border-purple-500/20">
          <div 
            className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        {progress < 30 && (
          <div className="text-yellow-400 text-xs animate-pulse mt-2">
            ⚠️ Large file - first load may take 20-40 seconds
          </div>
        )}
      </div>
    </Html>
  );
}

// Model component
function Model({ 
  url, 
  scale = 1, 
  wireframe = false,
}: { 
  url: string; 
  scale?: number; 
  wireframe?: boolean;
}) {
  const gltf = useGLTF(url, true);

  return (
    <primitive 
      object={gltf.scene} 
      scale={scale}
      position={[0, 0, 0]}
    />
  );
}

type RevitModelViewerProps = {
  modelUrl: string;
  title?: string;
  scale?: number;
};

export const RevitModelViewer = ({ 
  modelUrl, 
  title = "3D Model", 
  scale = 1 
}: RevitModelViewerProps) => {
  const [isGridVisible, setIsGridVisible] = useState(true);
  const [isAutoRotate, setIsAutoRotate] = useState(true);
  const [wireframeMode, setWireframeMode] = useState(false);
  const modelRef = useRef<any>(null);

  const resetCamera = () => {
    if (modelRef.current) {
      modelRef.current.reset();
    }
  };

  return (
    <div className="relative w-full h-full min-h-[500px] rounded-2xl overflow-hidden border border-purple-500/30 bg-black/40 backdrop-blur-sm">
      
      {/* Controls Panel */}
      <div className="absolute top-4 left-4 z-10">
        <div className="flex flex-col gap-2 bg-black/70 backdrop-blur-md rounded-xl p-3 border border-purple-500/30">
          <div className="text-white text-xs font-semibold mb-2 border-b border-purple-500/30 pb-2">
            View Controls
          </div>
          
          <button
            onClick={() => setIsGridVisible(!isGridVisible)}
            className="px-3 py-2 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 rounded-lg text-white text-xs transition-all duration-200"
          >
            {isGridVisible ? '✓' : '○'} Grid
          </button>

          <button
            onClick={() => setIsAutoRotate(!isAutoRotate)}
            className="px-3 py-2 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 rounded-lg text-white text-xs transition-all duration-200"
          >
            {isAutoRotate ? '✓' : '○'} Rotate
          </button>

          <button
            onClick={() => setWireframeMode(!wireframeMode)}
            className="px-3 py-2 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 rounded-lg text-white text-xs transition-all duration-200"
          >
            {wireframeMode ? '✓' : '○'} Wireframe
          </button>

          <button
            onClick={resetCamera}
            className="px-3 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/30 rounded-lg text-white text-xs transition-all duration-200"
          >
            🎯 Reset
          </button>
        </div>
      </div>

      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
        <div className="px-4 py-2 bg-black/60 backdrop-blur-sm border border-purple-500/30 rounded-lg">
          <h3 className="text-white text-sm font-semibold">{title}</h3>
        </div>
      </div>

      <div className="absolute bottom-4 right-4 z-10">
        <div className="px-3 py-2 bg-black/60 backdrop-blur-sm border border-purple-500/30 rounded-lg">
          <p className="text-white/70 text-xs">
            🖱️ Drag • Scroll • Right-click
          </p>
        </div>
      </div>

      {/* 3D Canvas */}
      <Canvas
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        dpr={[1, 1.5]}
      >
        <PerspectiveCamera makeDefault position={[10, 8, 10]} fov={50} />
        
        <ambientLight intensity={0.5} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={0.8}
        />
        <pointLight position={[-10, -10, -5]} intensity={0.3} />

        {isGridVisible && (
          <Grid
            args={[20, 20]}
            cellSize={1}
            cellThickness={0.5}
            cellColor="#6b21a8"
            sectionSize={5}
            sectionThickness={1}
            sectionColor="#8b5cf6"
            fadeDistance={30}
            fadeStrength={1}
            infiniteGrid={false}
          />
        )}

        <Environment preset="studio" />

        <Suspense fallback={<Loader />}>
          <Center>
            <Model url={modelUrl} scale={scale} wireframe={wireframeMode} />
          </Center>
        </Suspense>

        <OrbitControls
          ref={modelRef}
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          autoRotate={isAutoRotate}
          autoRotateSpeed={1}
          minDistance={5}
          maxDistance={50}
          enableDamping={true}
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
};
