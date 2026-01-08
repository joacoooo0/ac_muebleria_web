import React from "react";

interface MarqueeProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  speed?: number;
}

const Marquee: React.FC<MarqueeProps> = ({
  children,
  direction = "left",
  speed = 50,
}) => {
  return (
    <div className="overflow-hidden flex">
      <div
        className={`flex gap-8 py-4 animate-marquee ${
          direction === "right" ? "animate-marquee-reverse" : ""
        }`}
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
        {children}{" "}
        {/* Duplicamos el contenido para un loop infinito sin saltos */}
      </div>
    </div>
  );
};

export default Marquee;
