"use client";

import React from "react";
import Navegation from "@/components/layout/Navegation";
import { ArrowRight } from "lucide-react";
import Marquee from "@/components/ui/Marquee";
import ReviewCard from "@/components/ui/ReviewCard";

// Datos de ejemplo para las reseñas (Más datos para llenar las 3 filas)
const REVIEWS = [
  {
    id: 1,
    name: "Carlos R.",
    text: "La cocina quedó increíble. Superaron mis expectativas.",
    stars: 5,
  },
  {
    id: 2,
    name: "Elena M.",
    text: "Diseño funcional. El mueble de TV transformó mi sala.",
    stars: 5,
  },
  {
    id: 3,
    name: "Roberto P.",
    text: "Atención de primera. Me ayudaron con las medidas exactas.",
    stars: 4,
  },
  {
    id: 4,
    name: "Ana S.",
    text: "Excelente calidad y cumplimiento en los plazos.",
    stars: 5,
  },
  {
    id: 5,
    name: "Javier L.",
    text: "Muy profesionales, el diseño 3D previo fue clave.",
    stars: 5,
  },
  {
    id: 6,
    name: "Sofia G.",
    text: "Mi closet soñado hecho realidad. ¡Gracias!",
    stars: 5,
  },
  {
    id: 7,
    name: "Miguel Ángel",
    text: "Muebles de oficina robustos y elegantes.",
    stars: 4,
  },
  {
    id: 8,
    name: "Laura V.",
    text: "El proceso fue muy sencillo y el resultado final, perfecto.",
    stars: 5,
  },
  {
    id: 9,
    name: "David B.",
    text: "Recomendados 100%. Volveré a trabajar con ellos.",
    stars: 5,
  },
];

export default function Inicio() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#141414]">
      <Navegation />

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex items-center px-8 md:px-20 z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-center">
          {/* Texto y CTA */}
          <div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#FFDB25] leading-tight mb-6">
              AC Muebleria
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-lg">
              Diseñamos y fabricamos muebles a medida que transforman tus
              espacios en hogares modernos.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/catalogo"
                className="bg-[#FFDB25] text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition flex items-center gap-2"
              >
                Ver Catálogo <ArrowRight size={20} />
              </a>
              <a
                href="/contactanos"
                className="border border-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition"
              >
                Cotizar Proyecto
              </a>
            </div>
          </div>

          {/* ESPACIO PARA RENDER 3D */}
          <div className="hidden lg:block h-[600px] w-full relative">
            {/* AQUÍ IRÍA TU COMPONENTE DE RENDER 3D INTERACTIVO.
              Te sugiero usar React Three Fiber para colocar un modelo GLTF
              de una cocina, centro de entretenimiento o closet que se pueda rotar.
              Ejemplo de estructura:
              <Canvas>
                <Suspense fallback={null}>
                  <Stage environment="city" intensity={0.6}>
                    <Model path="/tu-modelo-3d.gltf" />
                  </Stage>
                  <OrbitControls autoRotate />
                </Suspense>
              </Canvas>
            */}
            <div className="absolute inset-0 flex items-center justify-center border-2 border-dashed border-[#FFDB25]/30 rounded-3xl text-[#FFDB25]/50 font-bold text-2xl">
              [ Espacio para Render 3D Interactivo ]
            </div>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN DE VALORES --- */}
      <section className="relative z-20 grid grid-cols-1 md:grid-cols-3 gap-8 px-8 md:px-20 py-24 bg-black/40 backdrop-blur-lg border-y border-white/5">
        {/* ... (El contenido de esta sección sigue igual que antes) ... */}
        <div className="text-center">
          <h3 className="text-[#FFDB25] text-5xl font-black mb-2">100%</h3>
          <p className="text-white/70 text-lg">Melamina de Alta Calidad</p>
        </div>
        <div className="text-center border-x border-white/10">
          <h3 className="text-[#FFDB25] text-5xl font-black mb-2">+500</h3>
          <p className="text-white/70 text-lg">Proyectos Entregados</p>
        </div>
        <div className="text-center">
          <h3 className="text-[#FFDB25] text-5xl font-black mb-2">2 Años</h3>
          <p className="text-white/70 text-lg">Garantía Real</p>
        </div>
      </section>

      {/* --- CARRUSEL DINÁMICO (MARQUEE) DE 3 FILAS --- */}
      <section className="relative z-20 py-32 overflow-hidden bg-[#141414]">
        <h2 className="text-center text-4xl font-bold text-white mb-16">
          Lo que dicen nuestros clientes
        </h2>

        <div className="flex flex-col gap-8 relative">
          {/* Fila 1: Velocidad normal, dirección izquierda */}
          <Marquee speed={60}>
            {REVIEWS.slice(0, 5).map((review) => (
              <ReviewCard key={review.id} {...review} />
            ))}
          </Marquee>

          {/* Fila 2: Más lento, dirección derecha (para contraste) */}
          <Marquee direction="right" speed={80}>
            {REVIEWS.slice(3, 8).map((review) => (
              <ReviewCard key={review.id} {...review} />
            ))}
          </Marquee>

          {/* Fila 3: Velocidad normal, dirección izquierda */}
          <Marquee speed={60}>
            {REVIEWS.slice(6, 9)
              .concat(REVIEWS.slice(0, 2))
              .map((review) => (
                <ReviewCard key={review.id} {...review} />
              ))}
          </Marquee>

          {/* Degradados laterales para suavizar la entrada/salida */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#141414] to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#141414] to-transparent z-10"></div>
        </div>
      </section>

      {/* --- CTA FINAL --- */}
      <section className="relative z-20 py-32 px-8 flex justify-center">
        <div className="bg-[#FFDB25] w-full max-w-6xl p-16 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl shadow-[#FFDB25]/20">
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-black mb-4 leading-tight">
              ¿Listo para renovar <br /> tu espacio?
            </h2>
            <p className="text-black/80 text-xl">
              Agenda una cita y diseñemos juntos el mueble de tus sueños.
            </p>
          </div>

          <a
            href="/contactanos"
            className="bg-black text-white px-12 py-6 rounded-full font-bold text-xl hover:scale-105 transition shadow-xl whitespace-nowrap"
          >
            Empezar Ahora
          </a>
        </div>
      </section>

      {/* VIDEO DE FONDO */}
      <div className="fixed top-0 left-0 w-full h-full bg-[#141414]/90 z-10"></div>
      <video
        src="/video/bg.mp4"
        autoPlay
        muted
        loop
        className="fixed top-0 left-0 w-full h-full object-cover z-0 opacity-40"
      ></video>
    </main>
  );
}
