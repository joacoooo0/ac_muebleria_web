import Navegation from "@/components/layout/Navegation";

export default function Inicio() {
  return (
    <main className="relative h-screen min-w-dvh">
      <div className="absolute top-0 left-0 w-full z-10 p-8">
        <Navegation />
      </div>
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
