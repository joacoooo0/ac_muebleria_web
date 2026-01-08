// src/app/proyectos/page.tsx
"use client";

import Navegation from "@/components/layout/Navegation";
// Si usas componentes de proyectos más complejos, podrías necesitar importar aquí:
// import ProjectCard from '@/components/ProjectCard';

export default function Proyectos() {
  // Nota: Para que la navegación muestre el estado 'activo' correcto,
  // asegúrate de que Navegation use el hook 'usePathname' de Next.js
  // para saber que la ruta actual es '/proyectos'.

  return (
    <main className="relative h-screen min-w-dvh">
      {/* 2. CONTENIDO PRINCIPAL DE PROYECTOS */}
      <div className="absolute inset-0 flex flex-col pt-32 px-16 z-20 text-white">
        {/* Título de la Sección */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-[#FFDB25] mb-12">
          Nuestros Proyectos
        </h1>

        {/* 3. GRID DE PROYECTOS (Contenedor Temporal) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Ejemplo de Tarjeta de Proyecto */}
          <div className="bg-[#141414] border border-[#ffdb25]/20 p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl font-semibold mb-2">
              Proyecto Residencial L.A.
            </h2>
            <p className="text-white/70 mb-4">
              Mobiliario de cocina y sala, diseño moderno.
            </p>
            <div className="w-full h-40 bg-gray-700 rounded-md flex items-center justify-center text-sm">
              [Espacio para Imagen del Proyecto]
            </div>
          </div>

          {/* Más ejemplos para llenar el grid */}
          <div className="bg-[#141414] border border-[#ffdb25]/20 p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl font-semibold mb-2">
              Oficinas Corporativas V1
            </h2>
            <p className="text-white/70 mb-4">
              Estaciones de trabajo ergonómicas y mobiliario de recepción.
            </p>
            <div className="w-full h-40 bg-gray-700 rounded-md flex items-center justify-center text-sm">
              [Espacio para Imagen del Proyecto]
            </div>
          </div>

          <div className="bg-[#141414] border border-[#ffdb25]/20 p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl font-semibold mb-2">Custom Estudio</h2>
            <p className="text-white/70 mb-4">
              Mueble de televisión y biblioteca a medida.
            </p>
            <div className="w-full h-40 bg-gray-700 rounded-md flex items-center justify-center text-sm">
              [Espacio para Imagen del Proyecto]
            </div>
          </div>
        </div>
      </div>

      {/* 4. FONDO OSCURO Y VIDEO (Mismo fondo que Inicio) */}
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
