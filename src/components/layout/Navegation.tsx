import React from "react";
// Importar 'Link' de Next.js es una buena práctica, pero lo omitiremos por simplicidad aquí
// import Link from 'next/link';

// Componente para un solo elemento de navegación con el efecto de animación
const NavItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  // 1. Contenedor principal para el enlace
  // - 'relative' es crucial para que el 'span' de la línea (absolute) se posicione respecto a él.
  // - 'group' permite aplicar estilos al span cuando se hace hover sobre el <li>
  <li className="relative group">
    <a href={href} className="py-2">
      {children}
    </a>

    {/* 2. El elemento que crea la línea (Underline animado) */}
    <span
      className="
                absolute bottom-[-2px] left-0 h-[2px] rounded-2xl w-full 
                bg-[#ffdb25] transform scale-x-0 
                group-hover:scale-x-100 transition-transform duration-300 ease-out
            "
    ></span>
  </li>
);

export default function Navegation() {
  return (
    <nav className="flex justify-center items-center text-[#ffdb25]">
      <ul className="flex justify-around gap-x-24 font-semibold">
        <NavItem href="/">Inicio</NavItem>
        <NavItem href="/proyectos">Proyectos</NavItem>
        <NavItem href="/catalogo">Catálogo</NavItem>
        <NavItem href="/contactanos">Contáctanos</NavItem>
      </ul>
    </nav>
  );
}
