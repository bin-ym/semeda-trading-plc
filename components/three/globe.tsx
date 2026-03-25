// app/three/globe.tsx
"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

export default function Globe() {
  const globeRef = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (globeRef.current) {
      globeRef.current.rotation.y = clock.getElapsedTime() * 0.05; // slow rotation
    }
  });

  return (
    <mesh ref={globeRef}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial
        color="#0C2D1D" // dark green for growth
        roughness={0.7}
        metalness={0.3}
      />
    </mesh>
  );
}
