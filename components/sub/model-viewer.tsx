"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

type ModelViewerProps = {
  modelUrl: string;
  title?: string;
  poster?: string;
};

export const ModelViewer = ({ modelUrl, title, poster }: ModelViewerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;
    let controls: OrbitControls;
    let animationId: number;

    const init = () => {
      // Scene
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x030014);

      // Camera
      camera = new THREE.PerspectiveCamera(
        45,
        container.clientWidth / container.clientHeight,
        0.1,
        1000
      );
      camera.position.set(5, 5, 5);

      // Renderer
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.shadowMap.enabled = true;
      container.appendChild(renderer.domElement);

      // Controls
      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.screenSpacePanning = false;
      controls.minDistance = 1;
      controls.maxDistance = 50;
      controls.maxPolarAngle = Math.PI;

      // Lights
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
      scene.add(ambientLight);

      const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.8);
      directionalLight1.position.set(5, 10, 5);
      directionalLight1.castShadow = true;
      scene.add(directionalLight1);

      const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.4);
      directionalLight2.position.set(-5, 5, -5);
      scene.add(directionalLight2);

      // Load Model
      const loader = new GLTFLoader();
      loader.load(
        modelUrl,
        (gltf) => {
          const model = gltf.scene;

          // Center and scale model
          const box = new THREE.Box3().setFromObject(model);
          const center = box.getCenter(new THREE.Vector3());
          const size = box.getSize(new THREE.Vector3());
          const maxDim = Math.max(size.x, size.y, size.z);
          const scale = 4 / maxDim;
          
          model.scale.setScalar(scale);
          model.position.sub(center.multiplyScalar(scale));

          scene.add(model);
          setLoading(false);
        },
        (xhr) => {
          const percentComplete = (xhr.loaded / xhr.total) * 100;
          setProgress(Math.round(percentComplete));
        },
        (error) => {
          console.error("Error loading model:", error);
          setError("Failed to load 3D model");
          setLoading(false);
        }
      );

      // Animation loop
      const animate = () => {
        animationId = requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
      };
      animate();

      // Handle resize
      const handleResize = () => {
        if (!container) return;
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
      };
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        cancelAnimationFrame(animationId);
        renderer.dispose();
        controls.dispose();
        if (container && renderer.domElement) {
          container.removeChild(renderer.domElement);
        }
      };
    };

    const cleanup = init();
    return cleanup;
  }, [modelUrl]);

  return (
    <div className="w-full h-full relative">
      {title && (
        <div className="absolute top-4 left-4 z-10 bg-purple-500/90 backdrop-blur-sm px-4 py-2 rounded-lg">
          <h3 className="text-white font-semibold text-sm">{title}</h3>
        </div>
      )}

      {/* Controls Help */}
      <div className="absolute bottom-4 left-4 z-10 bg-black/70 backdrop-blur-sm px-4 py-3 rounded-lg">
        <div className="flex flex-col gap-1.5 text-xs text-gray-300">
          <div className="flex items-center gap-2">
            <span className="text-purple-400">🖱️</span>
            <span>Left Click + Drag: Rotate</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-cyan-400">🔍</span>
            <span>Scroll: Zoom</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">↔️</span>
            <span>Right Click + Drag: Pan</span>
          </div>
        </div>
      </div>

      {/* Loading State */}
      {loading && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#030014] z-20">
          <div className="flex flex-col items-center gap-4">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
            <div className="text-center">
              <p className="text-white text-sm mb-2">Loading 3D Model...</p>
              <p className="text-gray-400 text-xs">{progress}%</p>
              <div className="w-48 h-1 bg-gray-700 rounded-full mt-2 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#030014] z-20">
          <div className="text-center px-4">
            <div className="text-red-500 text-4xl mb-4">⚠️</div>
            <p className="text-white text-sm mb-2">{error}</p>
            <p className="text-gray-400 text-xs">Please check the model file</p>
          </div>
        </div>
      )}

      {/* 3D Container */}
      <div ref={containerRef} className="w-full h-full" />
    </div>
  );
};
