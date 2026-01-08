"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import Navegation from "@/components/layout/Navegation";
import { SplitText } from "@/components/SplitText";
import RenderMelamina from "@/components/RenderMelamina";

export default function Inicio() {
  // 1. Referencia para el contenedor del Render 3D (usado para Parallax y GSAP)
  const renderRef = useRef(null);

  // 2. Lógica para el movimiento con el ratón (Parallax) y la Secuencia de Animación (GSAP Timeline)
  useEffect(() => {
    // === [ PARALLAX DEL MOUSE ] ===
    // ⚠️ ELIMINAR TODA LA LÓGICA DE handleMouseMove Y window.addEventListener aquí.
    // Solo debe quedar la función de limpieza al final.

    // 1. CREAR LA LÍNEA DE TIEMPO
    const tl = gsap.timeline({
      delay: 0.8,
    });

    // 2. ANIMACIÓN DEL TÍTULO (<h1>) - Ensamblaje 3D
    tl.fromTo(
      "h1 .char-anim",
      {
        opacity: 0,
        x: 30,
        rotationY: -90,
        transformOrigin: "left center",
      },
      {
        opacity: 1,
        x: 0,
        rotationY: 0,
        duration: 0.6,
        ease: "back.out(1.2)",
        stagger: 0.06,
      },
      0
    );

    // 3. ANIMACIÓN DEL SUBTÍTULO (<h2>) - Revelación Suave
    tl.fromTo(
      "h2 .char-anim",
      {
        opacity: 0,
        y: 20,
        scale: 0.98,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
        stagger: 0.015,
      },
      "<" // Inicia cuando el título termina
    );

    // 4. ANIMACIÓN DE ENTRADA DEL RENDER 3D (Mantener)
    tl.fromTo(
      "#render-container",
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
      ">"
    );
  }, []);

  return (
    <main className="relative h-screen min-w-dvh">
      {/* 2. CONTENEDOR PRINCIPAL: Flexbox horizontal para Texto (Izquierda) y Render (Derecha) */}
      <div className="absolute inset-0 flex flex-row justify-center items-center px-16 z-20 pointer-events-none">
        {/* A. CONTENEDOR DE TEXTO (Mitad Izquierda) */}
        <div className="flex flex-col justify-center items-center text-center w-full">
          <h1
            className="
              text-6xl md:text-8xl 
              font-extrabold text-[#FFDB25] mb-2 
              select-none 
            "
          >
            <SplitText text="AC Muebleria" />
          </h1>

          <h2 className="text-sm text-center md:text-lg font-medium leading-relaxed text-white/90 w-full justify-center flex">
            <SplitText text="Diseño y fabricación de muebles para el hogar, la oficina y el ambiente que necesites" />
          </h2>
        </div>
        {/* B. ESPACIO PARA EL RENDER 3D (Mitad Derecha) */}
        {/*<div
          ref={renderRef} // Referencia para Parallax
          id="render-container" // ID para animación GSAP
          className="
          hidden lg:flex w-1/2 justify-center items-center h-full 
          pointer-events-auto // Permite interacción con el mouse
          transform-gpu 
          "
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="w-full h-5/6">
            //👈 AJUSTE CLAVE: Cambiado de h-2/3 a h-5/6 (Aprox. 83% de altura)
            <RenderMelamina />
          </div>
        </div>*/}
      </div>
      {/* 3. Fondo: Capa Oscura y Video */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#141414]/80"></div>
      <video
        src="/video/bg.mp4"
        autoPlay
        muted
        loop
        className="w-full h-full object-cover"
      ></video>
    </main>
  );
}
