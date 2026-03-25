"use client";

import { Stars } from "@react-three/drei";

export default function StarsField() {
  return (
    <Stars radius={100} depth={50} count={3000} factor={4} fade speed={1} />
  );
}
