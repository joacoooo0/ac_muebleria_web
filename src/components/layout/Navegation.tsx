// src/components/layout/Navegation.tsx

"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link"; // Cambiamos a Link para mejor rendimiento en Next.js
import { Menu, X } from "lucide-react"; // Necesitarás instalar 'lucide-react' o usar SVGs

const NavItem = ({
  href,
  children,
  isActive,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
  onClick?: () => void;
}) => (
  <li className="relative group list-none">
    <Link
      href={href}
      onClick={onClick}
      className={`
        py-2 px-4 rounded-md inline-block transform transition duration-300 ease-out 
        ${
          isActive
            ? "rotate-3 text-white bg-[#ffdb25]/30 shadow-lg"
            : "group-hover:rotate-3 group-hover:text-white"
        }
      `}
    >
      {children}
    </Link>
    <span
      className={`
        absolute bottom-[-2px] left-0 h-[2px] rounded-2xl w-full 
        bg-[#ffdb25] transform transition-transform duration-300 ease-out
        ${isActive ? "scale-x-0" : "scale-x-0 group-hover:scale-x-100"}
      `}
    ></span>
  </li>
);

export default function Navegation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Proyectos", href: "/proyectos" },
    { name: "Catálogo", href: "/catalogo" },
    { name: "Contáctanos", href: "/contactanos" },
  ];

  return (
    <>
      {/* --- NAVBAR DESKTOP (Centrado) --- */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-auto max-w-max hidden md:block">
        <div className="bg-black/20 backdrop-blur-md border border-white/10 px-8 py-3 rounded-full shadow-2xl">
          <ul className="flex items-center gap-x-8 lg:gap-x-16 font-medium text-[#ffdb25]">
            {navLinks.map((link) => (
              <NavItem
                key={link.href}
                href={link.href}
                isActive={pathname === link.href}
              >
                {link.name}
              </NavItem>
            ))}
          </ul>
        </div>
      </nav>

      {/* --- NAVBAR MOBILE (Botón Hamburguesa) --- */}
      <div className="fixed top-6 right-6 z-50 md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-3 bg-[#ffdb25] text-black rounded-full shadow-lg active:scale-90 transition-transform"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* --- SLIDE MENU MOBILE --- */}
      <div
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-xl transition-transform duration-500 md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-y-10 text-[#ffdb25]">
          {navLinks.map((link) => (
            <NavItem
              key={link.href}
              href={link.href}
              isActive={pathname === link.href}
              onClick={() => setIsMenuOpen(false)} // Cierra el menú al hacer click
            >
              <span className="text-3xl font-bold">{link.name}</span>
            </NavItem>
          ))}
        </div>
      </div>
    </>
  );
}
