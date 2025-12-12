// src/components/SplitText.tsx

import React from "react";

interface SplitTextProps {
  text: string;
}

export const SplitText = ({ text }: SplitTextProps) => {
  return (
    // 'flex' ayuda a que los spans se alineen horizontalmente.
    // 'whitespace-nowrap' previene saltos de línea indeseados en el medio del título.
    <div className="flex whitespace-nowrap">
      {text.split("").map((char, index) => (
        // Asignamos la clase "char-anim" que estamos usando en GSAP
        <span
          key={index}
          className="char-anim inline-block opacity-0" // La clase opacity-0 es importante para que GSAP pueda animar la entrada
        >
          {/* Si el carácter es un espacio, usamos un espacio no separable (&nbsp; o \u00A0) */}
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
};
