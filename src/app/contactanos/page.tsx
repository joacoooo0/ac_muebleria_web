"use client";

import React, { useState } from "react";
import { Send, MessageCircle } from "lucide-react";

// Datos de los muebles con imágenes reales (puedes cambiarlas por tus rutas locales)
const MUEBLES_DATA = {
  cocina: {
    nombre: "Muebles de Cocina",
    descripcion: "Reposteros, alacenas y optimización de espacios.",
    img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=600",
  },
  sala: {
    nombre: "Centros de Entretenimiento",
    descripcion: "Muebles de TV, estanterías y paneles decorativos.",
    img: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=600",
  },
  oficina: {
    nombre: "Escritorios y Oficinas",
    descripcion: "Estaciones de trabajo ergonómicas y funcionales.",
    img: "https://images.unsplash.com/photo-1518455027359-f3f816b1a238?q=80&w=600",
  },
  dormitorio: {
    nombre: "Closets y Roperos",
    descripcion: "Diseños a medida para organización de prendas.",
    img: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=600",
  },
};

export default function Contactanos() {
  const [formData, setFormData] = useState({
    nombre: "",
    mueble: "cocina",
    mensaje: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const enviarWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const NUMERO_WHATSAPP = "51994660039"; // 👈 Tu número con código de país

    const muebleSeleccionado =
      MUEBLES_DATA[formData.mueble as keyof typeof MUEBLES_DATA];

    // Construcción del mensaje con el link de la imagen incluido
    const textoMensaje =
      `*NUEVA CONSULTA - AC MUEBLERIA*%0A%0A` +
      `*Cliente:* ${formData.nombre}%0A` +
      `*Interés:* ${muebleSeleccionado.nombre}%0A` +
      `*Mensaje:* ${formData.mensaje}%0A%0A` +
      `*Referencia visual:* ${muebleSeleccionado.img}`;

    const url = `https://wa.me/${NUMERO_WHATSAPP}?text=${textoMensaje}`;
    window.open(url, "_blank");
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center p-4">
      {/* El Navbar ya viene del Layout, así que no lo incluimos aquí */}

      <div className="relative z-20 w-full max-w-5xl mt-20">
        <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-2">
          {/* SECCIÓN IZQUIERDA: Formulario */}
          <div className="p-8 md:p-12">
            <h1 className="text-4xl font-extrabold text-[#FFDB25] mb-2">
              Hablemos
            </h1>
            <p className="text-white/60 mb-8">
              Cuéntanos tu idea y la haremos realidad.
            </p>

            <form onSubmit={enviarWhatsApp} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-[#FFDB25] mb-1">
                  Nombre completo
                </label>
                <input
                  required
                  name="nombre"
                  type="text"
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-3 outline-none focus:border-[#FFDB25] transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#FFDB25] mb-1">
                  ¿Qué tipo de mueble buscas?
                </label>
                <select
                  name="mueble"
                  onChange={handleChange}
                  className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl p-3 outline-none focus:border-[#FFDB25] appearance-none cursor-pointer"
                >
                  <option value="cocina">Cocinas Modernas</option>
                  <option value="sala">Salas / Centros de TV</option>
                  <option value="oficina">Escritorios de Oficina</option>
                  <option value="dormitorio">Closets / Dormitorio</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#FFDB25] mb-1">
                  Tu mensaje
                </label>
                <textarea
                  name="mensaje"
                  rows={3}
                  onChange={handleChange}
                  placeholder="Ej: Quiero un repostero de 2 metros en color blanco..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-3 outline-none focus:border-[#FFDB25] transition"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#FFDB25] text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-yellow-400 hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-lg shadow-yellow-500/20"
              >
                <MessageCircle size={20} />
                Enviar consulta por WhatsApp
              </button>
            </form>
          </div>

          {/* SECCIÓN DERECHA: Visualizador dinámico */}
          <div className="relative bg-[#1a1a1a] flex flex-col justify-center p-8 border-l border-white/5">
            <div className="absolute top-0 right-0 p-6 opacity-20">
              <span className="text-8xl font-black text-white select-none">
                AC
              </span>
            </div>

            <div className="relative z-10">
              <div className="overflow-hidden rounded-2xl aspect-video mb-6 shadow-2xl">
                <img
                  src={
                    MUEBLES_DATA[formData.mueble as keyof typeof MUEBLES_DATA]
                      .img
                  }
                  alt="Previsualización"
                  className="w-full h-full object-cover transform hover:scale-110 transition duration-700"
                />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">
                {
                  MUEBLES_DATA[formData.mueble as keyof typeof MUEBLES_DATA]
                    .nombre
                }
              </h2>
              <p className="text-white/50">
                {
                  MUEBLES_DATA[formData.mueble as keyof typeof MUEBLES_DATA]
                    .descripcion
                }
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FONDO (Video y Overlay) */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#141414]/85 z-10"></div>
      <video
        src="/video/bg.mp4"
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover"
      ></video>
    </main>
  );
}
