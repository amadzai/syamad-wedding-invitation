import { useNavigate } from 'react-router-dom';
import bouquet1 from '../assets/images/landing/bouquet-1.png';
import bouquet2 from '../assets/images/landing/bouquet-2.png';
import envelopeBg from '../assets/images/landing/envelope-background.png';
import stamp1 from '../assets/images/landing/stamp-1.png';
import stamp2 from '../assets/images/landing/stamp-2.png';

export function Landing() {
  const navigate = useNavigate();

  const open = () => navigate('/invitation');

  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6 py-12">
      <button
        type="button"
        onClick={open}
        aria-label="Open invitation"
        className="group flex cursor-pointer flex-col items-center gap-10 transition-transform duration-300 hover:scale-[1.02] focus-visible:scale-[1.02] focus-visible:outline-none"
      >
        <span className="relative">
          <Envelope />
          <FloralTopLeft />
          <FloralBottomRight />
        </span>
        <span className="animate-rise font-display text-lg font-medium tracking-[0.3em] text-black uppercase [animation-delay:1s] sm:text-2xl">
          Click to open...
        </span>
      </button>
    </main>
  );
}

function Envelope() {
  return (
    <div className="relative aspect-1938/1343 w-[min(72vw,460px)] animate-rise overflow-hidden shadow-2xl [animation-delay:0.2s] sm:w-[min(85vw,460px)]">
      <img
        src={envelopeBg}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
      />
      <Stamps />
      <p className="absolute inset-0 flex translate-y-4 -rotate-4 animate-fade-in flex-col items-center justify-center font-script text-2xl leading-tight text-[#f2f1eb] [animation-delay:0.6s] sm:translate-y-6 sm:text-4xl">
        <span>The wedding of</span>
        <span className="mt-1">Syafiqah &amp; Amad!</span>
      </p>
    </div>
  );
}

function Stamps() {
  return (
    <div className="absolute top-3 right-3 flex animate-fade-in items-center gap-1 [animation-delay:0.45s] sm:top-4 sm:right-4 sm:gap-2">
      <img src={stamp1} alt="" aria-hidden className="h-12 w-auto sm:h-21" />
      <img
        src={stamp2}
        alt=""
        aria-hidden
        className="h-12 w-9 sm:h-21 sm:w-16.25"
      />
    </div>
  );
}

function FloralTopLeft() {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"
    >
      <span className="block animate-rise-blur">
        <img src={bouquet1} alt="" className="w-24 sm:w-37.5" />
      </span>
    </span>
  );
}

function FloralBottomRight() {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2"
    >
      <span className="block animate-rise-blur [animation-delay:0.55s]">
        <img src={bouquet2} alt="" className="w-24 sm:w-37.5" />
      </span>
    </span>
  );
}
