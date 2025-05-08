"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

type ModelProps = {
  url: string;
};

function Model({ url }: ModelProps) {
  const { scene } = useGLTF(url);
  return (
    <primitive
      position={[0, -0.5, 0]}
      scale={[0.9, 0.9, 0.9]}
      object={scene}
      dispose={null}
      rotation={[0.15, -1.7, 0]}
    />
  );
} 

export default function BookModel({ url }: ModelProps) {
  return (
    <div className="h-[300px] w-full sm:w-[450px] md:h-[500px] xl:w-[700px]">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
          <Model url={url} />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}


