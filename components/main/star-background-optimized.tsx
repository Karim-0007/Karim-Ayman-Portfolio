"use client";

import {
  Points,
  PointMaterial,
  type PointsInstancesProps,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef, Suspense, memo } from "react";
import type { Points as PointsType } from "three";

const StarBackground = memo(({
  sizeScale = 1.8,
  rotationSpeed = 1.1,
  ...props
}: PointsInstancesProps & { sizeScale?: number; rotationSpeed?: number }) => {
  const ref = useRef<PointsType | null>(null);
  const sphere = useMemo(() => {
    // Reduced from 5000 to 1500 stars for better performance
    const positions = new Float32Array(1500 * 3);

    for (let i = 0; i < positions.length; i += 3) {
      const radius = 1.2 + Math.random() * 0.35;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = radius * Math.cos(phi);
    }

    return positions;
  }, []);

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 20 / Math.max(rotationSpeed, 0.1);
      ref.current.rotation.y -= delta / 20 / Math.max(rotationSpeed, 0.1);
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        stride={3}
        positions={sphere}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="#fff"
          size={0.002 * sizeScale}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
});
StarBackground.displayName = "StarBackground";

export const StarsCanvas = memo(() => {
  return (
    <div 
      className="w-full fixed inset-0 -z-10" 
      style={{ 
        height: '100dvh', 
        minHeight: '100vh',
        willChange: 'transform'
      }}
    >
      <Canvas 
        camera={{ position: [0, 0.7, 1.2] }} 
        dpr={typeof window !== 'undefined' ? Math.min(window.devicePixelRatio, 1.5) : 1}
        performance={{ min: 0.5 }}
      >
        <Suspense fallback={null}>
          <StarBackground />
        </Suspense>
      </Canvas>
    </div>
  );
});
StarsCanvas.displayName = "StarsCanvas";
