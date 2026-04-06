// app/three/globe.tsx
"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh, Timer } from "three";

export default function Globe() {
  const globeRef = useRef<Mesh>(null);
  const [timer] = useState(() => new Timer());

  useFrame(() => {
    timer.update();
    if (globeRef.current) {
      globeRef.current.rotation.y = timer.getElapsed() * 0.05; // slow rotation
      const scale = Math.min(timer.getElapsed() * 0.8, 1);
      globeRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <mesh ref={globeRef} scale={[0, 0, 0]}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial
        color="#1B4D3E" // floriculture brand green
        roughness={0.6}
        metalness={0.4}
      />
    </mesh>
  );
}
