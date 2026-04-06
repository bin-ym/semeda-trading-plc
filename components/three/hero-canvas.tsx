// app/three/hero-canvas.tsx
"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Suspense } from "react";
import Globe from "./globe";

export default function HeroCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 10, 5]} intensity={0.8} />
      <pointLight position={[-5, 2, -2]} intensity={2} color="#1B4D3E" />
      <pointLight position={[5, -2, 2]} intensity={2} color="#D4AF37" />
      <pointLight position={[0, -5, -5]} intensity={1.5} color="#0A1931" />

      <Suspense fallback={null}>
        <Globe />
      </Suspense>

      <Stars radius={50} depth={50} count={500} factor={4} fade />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.2} />
    </Canvas>
  );
}
