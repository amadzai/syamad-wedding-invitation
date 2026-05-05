import { useNavigate } from 'react-router-dom';

export function Landing() {
  const navigate = useNavigate();

  const open = () => navigate('/invitation');

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 bg-white px-6 py-12">
      <button
        type="button"
        onClick={open}
        aria-label="Open invitation"
        className="group relative cursor-pointer transition-transform duration-300 hover:scale-[1.02] focus-visible:scale-[1.02] focus-visible:outline-none"
      >
        <Envelope />
        <FloralTopLeft />
        <FloralBottomRight />
      </button>

      <p className="font-display text-2xl font-medium tracking-[0.3em] text-black uppercase">
        Click to open...
      </p>
    </main>
  );
}

function Envelope() {
  return (
    <div className="relative aspect-4/3 w-[min(90vw,640px)] overflow-hidden bg-[#3f0002] shadow-2xl">
      <Grain />
      <Stamps />
      <Postmark />
      <p className="absolute inset-0 flex flex-col items-center justify-center font-script text-4xl leading-tight text-[#f2f1eb] sm:text-2xl md:text-5xl">
        <span>The wedding of</span>
        <span className="mt-1">Syafiqah &amp; Amad!</span>
      </p>
    </div>
  );
}

function Grain() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-90 mix-blend-overlay"
      style={{
        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='320' height='320'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")`,
      }}
    />
  );
}

function Stamps() {
  return (
    <div className="absolute top-4 right-6 flex gap-1">
      <div className="h-12 w-10 border border-[#e8c9a8]/60 bg-[#7a2533] sm:h-14 sm:w-12" />
      <div className="h-12 w-10 border border-[#e8c9a8]/60 bg-[#7a2533] sm:h-14 sm:w-12" />
    </div>
  );
}

function Postmark() {
  return (
    <div className="absolute top-4 right-6 h-16 w-24 rounded-full border border-[#e8c9a8]/40 sm:h-20 sm:w-28" />
  );
}

function FloralTopLeft() {
  return (
    <div className="pointer-events-none absolute -top-8 -left-8 h-32 w-32 rounded-full bg-linear-to-br from-[#6b3a4a]/40 to-transparent blur-sm sm:h-40 sm:w-40" />
  );
}

function FloralBottomRight() {
  return (
    <div className="pointer-events-none absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-linear-to-tl from-[#6b3a4a]/40 to-transparent blur-sm sm:h-40 sm:w-40" />
  );
}
