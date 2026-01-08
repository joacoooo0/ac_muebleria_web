"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Proyectos", href: "/proyectos" },
  { name: "Catálogo", href: "/catalogo" },
  { name: "Contáctanos", href: "/contactanos" },
];

export default function Navegation() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, height: 0 });

  const containerRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Buscamos el índice del link activo
    const activeIndex = navLinks.findIndex(
      (link) =>
        pathname === link.href ||
        (pathname.startsWith(link.href) && link.href !== "/")
    );

    const activeElement = linksRef.current[activeIndex];

    if (activeElement && containerRef.current) {
      const { offsetLeft, offsetWidth, offsetHeight } = activeElement;
      setPillStyle({
        left: offsetLeft,
        width: offsetWidth,
        height: offsetHeight,
      });
    }
  }, [pathname, mounted]);

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 isolate">
      <div
        ref={containerRef}
        className="relative flex items-center gap-1 bg-black/70  border border-white/10 p-1.5 rounded-full overflow-hidden"
      >
        {/* LA CÁPSULA ÚNICA: Sin layoutId para evitar el glitch del scroll */}
        {mounted && pillStyle.width > 0 && (
          <motion.div
            className="absolute bg-[#FFDB25] rounded-full z-0"
            style={{ boxShadow: "none" }}
            initial={false}
            animate={{
              left: pillStyle.left,
              width: pillStyle.width,
              height: pillStyle.height,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 35,
            }}
          />
        )}

        {navLinks.map((link, index) => {
          const isActive =
            pathname === link.href ||
            (pathname.startsWith(link.href) && link.href !== "/");

          return (
            <Link
              key={link.href}
              href={link.href}
              ref={(el) => {
                linksRef.current[index] = el;
              }}
              // Aumentamos px-8 y py-3.5 para un botón más grande y cómodo
              className={`relative px-8 py-3.5 rounded-full text-base font-semibold transition-colors duration-300 z-10 outline-none ${
                isActive ? "text-black" : "text-white/80 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
