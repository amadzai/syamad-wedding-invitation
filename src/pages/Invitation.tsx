import envelope from '../assets/images/invitation/envelope.png';
import bouquet1 from '../assets/images/invitation/bouquet-1.png';
import bouquet2 from '../assets/images/invitation/bouquet-2.png';
import bouquet3 from '../assets/images/invitation/bouquet-3.png';
import bouquet4 from '../assets/images/invitation/bouquet-4.png';
import bouquet5 from '../assets/images/invitation/bouquet-5.png';
import bouquet6 from '../assets/images/invitation/bouquet-6.png';

export function Invitation() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white px-6 py-12">
      <div className="relative w-[min(72vw,460px)] sm:w-[min(85vw,460px)]">
        <img
          src={envelope}
          alt=""
          aria-hidden
          className="aspect-1048/1346 w-full object-contain"
        />

        <Bouquet
          src={bouquet2}
          className="-top-6 left-[20%] w-24 sm:w-32 md:w-37.5"
        />
        <Bouquet
          src={bouquet1}
          className="top-[8%] left-[10%] w-24 sm:w-32 md:w-37.5"
        />
        <Bouquet
          src={bouquet3}
          className="-top-2 right-[15%] w-24 sm:w-32 md:w-37.5"
        />
        <Bouquet
          src={bouquet4}
          className="top-[28%] -left-6 w-24 sm:w-32 md:w-37.5"
        />
        <Bouquet
          src={bouquet5}
          className="top-[28%] -right-6 w-24 sm:w-32 md:w-37.5"
        />
        <Bouquet
          src={bouquet6}
          className="bottom-0 -left-6 w-24 sm:w-32 md:w-37.5"
        />
      </div>
    </main>
  );
}

function Bouquet({ src, className }: { src: string; className: string }) {
  return (
    <img
      src={src}
      alt=""
      aria-hidden
      className={`pointer-events-none absolute ${className}`}
    />
  );
}
