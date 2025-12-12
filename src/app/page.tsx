"use client";

import { useEffect } from "react";
import gsap from "gsap";
import Navegation from "@/components/layout/Navegation";
import { SplitText } from "@/components/SplitText";

export default function Inicio() {
  useEffect(() => {
    // 1. CREAR LA LÍNEA DE TIEMPO
    const tl = gsap.timeline({
      delay: 0.8, // Retraso inicial para toda la secuencia
    });

    // 2. ANIMACIÓN DEL TÍTULO (<h1>) - Estilo Ensamblaje 3D (similar al actual)
    tl.fromTo(
      "h1 .char-anim", // Seleccionamos solo las letras dentro del h1
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
        stagger: 0.06, // Ligeramente más rápido
      },
      0 // Posición: Inicia al comienzo de la línea de tiempo (tiempo 0)
    );

    // 3. ANIMACIÓN DEL SUBTÍTULO (<h2>) - Estilo Revelación Suave
    // Queremos que esto empiece justo cuando el título está terminando.
    tl.fromTo(
      "h2 .char-anim", // Seleccionamos solo las letras dentro del h2
      {
        opacity: 0,
        y: 20, // Viene ligeramente de abajo
        scale: 0.98, // Ligeramente encogido
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
        stagger: 0.015, // Un stagger muy pequeño para una animación rápida y sutil
      },
      // POSICIÓN EN EL TIMELINE:
      // Usamos "<" para empezar esta animación al mismo tiempo que la animación anterior termina.
      // Opcional: ">-0.2" empezaría 0.2 segundos antes de que termine la anterior.
      "<"
    );

    // 4. Animación opcional de Navegación (Ejemplo: aparecer suavemente)
    // Para que esto funcione, necesitarías envolver el <Navegation/> en un div con una referencia o clase.
    // Si lo pones en el layout, podrías apuntar a un selector global, pero por ahora lo omitimos.
  }, []);

  return (
    <main className="relative h-screen min-w-dvh">
      {/* Navegación (Cuidado si la mueves al layout) */}
      <div className="absolute bottom-0 left-0 w-full z-10 p-8">
        {" "}
        {/* CORREGIDO: top-0 para que esté arriba */}
        <Navegation />
      </div>

      {/*
        CONTENEDOR DE LAYOUT PRINCIPAL (TEXTO IZQUIERDA / RENDER DERECHA)
      */}
      <div className="absolute inset-0 flex flex-row justify-between items-center px-16 z-20 pointer-events-none">
        {/* 1. CONTENEDOR DE TEXTO (Mitad Izquierda) */}
        <div className="flex flex-col text-left w-full lg:w-1/2">
          <h1
            className="
              text-6xl md:text-8xl 
              font-extrabold text-[#FFDB25] mb-2 
              select-none 
            "
          >
            <SplitText text="AC Muebleria" />
          </h1>

          <h2 className="text-sm md:text-lg font-medium leading-relaxed text-white/90 max-w-sm">
            {" "}
            {/* Cambiado a white/90 para mejor contraste */}
            <SplitText text="Diseño y fabricación de muebles para el hogar, la oficina y el ambiente que necesites" />
          </h2>
        </div>

        {/* 2. ESPACIO PARA EL RENDER 3D (Mitad Derecha) */}
        {/* Este div está vacío, listo para recibir el render o imagen */}
        <div
          id="render-container"
          className="hidden lg:flex w-1/2 justify-center items-center h-full"
        >
          {/* Aquí irá el componente de imagen o render. */}
        </div>
      </div>

      {/* Capa Oscura y Video */}
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
