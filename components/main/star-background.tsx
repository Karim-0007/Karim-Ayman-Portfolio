"use client";

import {
  Points,
  PointMaterial,
  type PointsInstancesProps,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef, Suspense, useState } from "react";
import type { Points as PointsType } from "three";

export const StarBackground = ({
  sizeScale,
  rotationSpeed,
  ...props
}: PointsInstancesProps & { sizeScale?: number; rotationSpeed?: number }) => {
  const ref = useRef<PointsType | null>(null);
  const sphere = useMemo(() => {
    // تقليل عدد النجوم من 5000 إلى 2000 لتحسين الأداء
    const positions = new Float32Array(2000 * 3);

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
      ref.current.rotation.x -= delta / 20 / Math.max(rotationSpeed ?? 1, 0.1);
      ref.current.rotation.y -= delta / 20 / Math.max(rotationSpeed ?? 1, 0.1);
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
          size={0.002 * (sizeScale ?? 1)}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export const StarsCanvas = () => {
  const [sizeScale] = useState(1.8);
  const [rotationSpeed] = useState(1.1);

  return (
    <div className="w-full fixed inset-0 -z-10" style={{ height: '100dvh', minHeight: '100vh' }}>
      <Canvas camera={{ position: [0, 0.7, 1.2] }} dpr={typeof window !== 'undefined' ? Math.min(window.devicePixelRatio, 1.5) : 1}>
        <Suspense fallback={null}>
          <StarBackground sizeScale={sizeScale} rotationSpeed={rotationSpeed} />
        </Suspense>
      </Canvas>
    </div>
  );
};
