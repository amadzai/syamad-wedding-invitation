import { useNavigate } from 'react-router-dom';
import topLeftFlower from '../assets/images/top-left-flower.png';
import bottomRightFlower from '../assets/images/bottom-right-flower.png';
import envelopeBg from '../assets/images/envelope-background.png';
import leftStamp from '../assets/images/left-stamp.png';
import rightStamp from '../assets/images/right-stamp.png';

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

      <p className="font-display text-lg font-medium tracking-[0.3em] text-black uppercase sm:text-2xl">
        Click to open...
      </p>
    </main>
  );
}

function Envelope() {
  return (
    <div className="relative aspect-1938/1343 w-[min(72vw,460px)] overflow-hidden shadow-2xl sm:w-[min(85vw,460px)]">
      <img
        src={envelopeBg}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
      />
      <Stamps />
      <p className="absolute inset-0 flex translate-y-4 -rotate-4 flex-col items-center justify-center font-script text-2xl leading-tight text-[#f2f1eb] sm:translate-y-6 sm:text-3xl md:text-4xl">
        <span>The wedding of</span>
        <span className="mt-1">Syafiqah &amp; Amad!</span>
      </p>
    </div>
  );
}

function Stamps() {
  return (
    <div className="absolute top-3 right-3 flex items-center gap-1 sm:top-4 sm:right-4 sm:gap-2">
      <img src={leftStamp} alt="" aria-hidden className="h-12 w-auto sm:h-21" />
      <img
        src={rightStamp}
        alt=""
        aria-hidden
        className="h-12 w-9 sm:h-21 sm:w-16.25"
      />
    </div>
  );
}

function FloralTopLeft() {
  return (
    <img
      src={topLeftFlower}
      alt=""
      aria-hidden
      className="pointer-events-none absolute top-0 left-0 w-24 -translate-x-1/2 -translate-y-1/2 sm:w-32 md:w-37.5"
    />
  );
}

function FloralBottomRight() {
  return (
    <img
      src={bottomRightFlower}
      alt=""
      aria-hidden
      className="pointer-events-none absolute right-0 bottom-0 w-24 translate-x-1/2 translate-y-1/2 sm:w-32 md:w-37.5"
    />
  );
}
