"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import React, { useRef } from "react";

const MODEL_URL = "/mueble_melamina/scene.gltf";

function Model() {
  const { scene } = useGLTF(MODEL_URL);
  const modelRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const x = state.mouse.x;

    if (modelRef.current) {
      // Movimiento horizontal sutil
      modelRef.current.rotation.y = THREE.MathUtils.lerp(
        modelRef.current.rotation.y,
        x * (Math.PI / 60),
        0.1
      );
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene.clone()}
      scale={0.6} // ⚠️ Reducción de Escala (de 0.7 a 0.15) para que quepa todo el mueble
      // Mover el objeto 3D hacia la DERECHA (+X) para que en la vista isométrica se centre
      position={[-4, -6, 0]} // ⚠️ AJUSTE HORIZONTAL: Movido a 5 en el eje X para desplazarlo hacia la izquierda en la vista
    />
  );
}

export default function RenderMelamina() {
  return (
    <Canvas
      camera={{
        fov: 20,
        // ⚠️ AJUSTE CLAVE DE CÁMARA: Acercamos la cámara (reducimos el valor)
        // Probemos con [15, 15, 15] para el valor de escala 0.7
        position: [25, 25, 25], // Cambiado de 35 a 15
      }}
    >
      <ambientLight intensity={1.5} />

      <spotLight
        // Acercamos la luz para la nueva posición
        position={[15, 15, 15]}
        angle={0.25}
        penumbra={1}
        intensity={3}
        castShadow
      />

      <Environment preset="studio" />

      <React.Suspense fallback={null}>
        <Model />
      </React.Suspense>
    </Canvas>
  );
}
