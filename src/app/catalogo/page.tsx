// src/app/catalogo/page.tsx
"use client";

import Navegation from "@/components/layout/Navegation";
import React from "react";

export default function Catalogo() {
  // Nota: Asegúrate de que Navegation usa usePathname para activar el estado 'activo'

  return (
    <main className="relative min-h-screen min-w-dvh">
      {/* 2. CONTENIDO PRINCIPAL: Título y Layout de Filtro/Grid */}
      <div className="absolute inset-0 flex flex-col pt-32 px-16 z-20 text-white">
        {/* Título de la Sección */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-[#FFDB25] mb-12">
          Catálogo de Productos
        </h1>

        {/* CONTENEDOR FLEX PRINCIPAL: Filtro (Izquierda) y Productos (Derecha) */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* A. FILTRO LATERAL (Columna Izquierda) */}
          <aside className="w-full lg:w-1/4 p-6 bg-[#141414] border border-[#ffdb25]/20 rounded-lg shadow-xl h-fit sticky top-28">
            <h2 className="text-2xl font-semibold mb-6 text-white">
              Filtrar por
            </h2>

            {/* Filtro 1: Categoría */}
            <div className="mb-6">
              <label className="block text-white/70 mb-2">Categoría</label>
              <select className="w-full p-2 rounded bg-gray-800 border border-gray-700 text-white focus:ring-[#ffdb25] focus:border-[#ffdb25]">
                <option>Todos</option>
                <option>Muebles de TV</option>
                <option>Cocina</option>
                <option>Dormitorio</option>
                <option>Oficina</option>
              </select>
            </div>

            {/* Filtro 2: Color */}
            <div className="mb-6">
              <label className="block text-white/70 mb-2">
                Color / Acabado
              </label>
              <div className="flex space-x-2">
                <span className="w-6 h-6 bg-gray-500 rounded-full cursor-pointer border-2 border-[#ffdb25]/50"></span>
                <span className="w-6 h-6 bg-yellow-900 rounded-full cursor-pointer border-2 border-transparent hover:border-[#ffdb25]"></span>
                <span className="w-6 h-6 bg-white/10 rounded-full cursor-pointer border-2 border-transparent hover:border-[#ffdb25]"></span>
              </div>
            </div>

            {/* Botón de Aplicar */}
            <button className="w-full py-2 mt-4 bg-[#ffdb25] text-black font-bold rounded hover:bg-yellow-400 transition">
              Aplicar Filtros
            </button>
          </aside>

          {/* B. GRID DE PRODUCTOS (Columna Derecha) */}
          <section className="w-full lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {/* Tarjeta de Producto Ejemplo 1 */}
              <div className="bg-[#141414] border border-[#ffdb25]/20 rounded-lg shadow-xl overflow-hidden transform hover:scale-[1.02] transition duration-300">
                <div className="w-full h-48 bg-gray-700 flex items-center justify-center text-sm">
                  [Imagen del Mueble]
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-1">
                    Mueble de TV Moderno
                  </h3>
                  <p className="text-white/70 text-sm mb-3">
                    Melamina color Wengué. 180x40x60 cm.
                  </p>
                  <p className="text-3xl font-extrabold text-[#FFDB25]">
                    $350.00
                  </p>
                  <button className="mt-3 w-full py-2 bg-[#ffdb25]/10 text-[#ffdb25] border border-[#ffdb25] rounded hover:bg-[#ffdb25] hover:text-black transition">
                    Ver Detalles
                  </button>
                </div>
              </div>

              {/* Tarjeta de Producto Ejemplo 2 (Duplicar para llenar el espacio) */}
              <div className="bg-[#141414] border border-[#ffdb25]/20 rounded-lg shadow-xl overflow-hidden transform hover:scale-[1.02] transition duration-300">
                <div className="w-full h-48 bg-gray-700 flex items-center justify-center text-sm">
                  [Imagen del Mueble]
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-1">
                    Cajonera Flotante
                  </h3>
                  <p className="text-white/70 text-sm mb-3">
                    Melamina blanca. 120x30x25 cm.
                  </p>
                  <p className="text-3xl font-extrabold text-[#FFDB25]">
                    $180.00
                  </p>
                  <button className="mt-3 w-full py-2 bg-[#ffdb25]/10 text-[#ffdb25] border border-[#ffdb25] rounded hover:bg-[#ffdb25] hover:text-black transition">
                    Ver Detalles
                  </button>
                </div>
              </div>

              {/* Tarjeta de Producto Ejemplo 3 */}
              <div className="bg-[#141414] border border-[#ffdb25]/20 rounded-lg shadow-xl overflow-hidden transform hover:scale-[1.02] transition duration-300">
                <div className="w-full h-48 bg-gray-700 flex items-center justify-center text-sm">
                  [Imagen del Mueble]
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-1">
                    Escritorio Minimalista
                  </h3>
                  <p className="text-white/70 text-sm mb-3">
                    Diseño nórdico, patas metálicas.
                  </p>
                  <p className="text-3xl font-extrabold text-[#FFDB25]">
                    $290.00
                  </p>
                  <button className="mt-3 w-full py-2 bg-[#ffdb25]/10 text-[#ffdb25] border border-[#ffdb25] rounded hover:bg-[#ffdb25] hover:text-black transition">
                    Ver Detalles
                  </button>
                </div>
              </div>

              {/* Añadir más productos aquí */}
            </div>
          </section>
        </div>
      </div>

      {/* 3. FONDO OSCURO Y VIDEO */}
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
