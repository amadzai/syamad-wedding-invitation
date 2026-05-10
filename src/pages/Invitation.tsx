import envelope from '../assets/images/invitation/envelope.png';
import bouquet1 from '../assets/images/invitation/bouquet-1.png';
import bouquet2 from '../assets/images/invitation/bouquet-2.png';
import bouquet3 from '../assets/images/invitation/bouquet-3.png';
import bouquet4 from '../assets/images/invitation/bouquet-4.png';
import bouquet5 from '../assets/images/invitation/bouquet-5.png';
import bouquet6 from '../assets/images/invitation/bouquet-6.png';
import polaroid1 from '../assets/images/invitation/polaroid-1.png';
import polaroid2 from '../assets/images/invitation/polaroid-2.png';
import saveTheDate from '../assets/images/invitation/save-the-date.png';
import envelopeOpen from '../assets/images/invitation/envelope-open.png';

export function Invitation() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white px-6 pt-48 pb-12 sm:pt-56">
      <div className="relative w-[min(72vw,460px)] sm:w-[min(85vw,460px)]">
        <img
          src={envelope}
          alt=""
          aria-hidden
          className="aspect-1048/1346 w-full object-contain"
        />

        <Bouquet
          src={bouquet2}
          className="-top-32 left-[10%] w-24 sm:-top-40 sm:w-37.5"
        />

        <img
          src={polaroid1}
          alt=""
          aria-hidden
          className="pointer-events-none absolute -top-28 left-[42%] w-34 rotate-6 sm:-top-36 sm:left-[45%] sm:w-54"
        />

        <img
          src={polaroid2}
          alt=""
          aria-hidden
          className="pointer-events-none absolute -top-16 left-[5%] w-34 -rotate-6 sm:w-54"
        />

        <Bouquet src={bouquet1} className="top-[20%] left-[3%] w-12 sm:w-20" />
        <Bouquet
          src={bouquet3}
          className="top-[18%] right-[15%] w-20 sm:w-28"
        />
        <Bouquet src={bouquet4} className="top-[28%] -left-10 w-28 sm:w-42" />

        <img
          src={saveTheDate}
          alt=""
          aria-hidden
          className="pointer-events-none absolute top-[25%] left-1/2 w-58 -translate-x-1/2 -rotate-4 sm:w-95"
        />

        <p className="pointer-events-none absolute top-[42%] left-[8%] rotate-86 font-seasons text-[6px] tracking-[0.3em] text-black sm:top-[42%] sm:left-[4%] sm:text-[10px]">
          SYAFIQAH + AMAD
        </p>

        <p className="pointer-events-none absolute top-[31%] left-[57%] -translate-x-1/2 -rotate-4 font-seasons text-sm font-medium tracking-widest whitespace-nowrap text-black sm:top-[31%] sm:text-2xl">
          SAVE OUR DATE
        </p>

        <p className="pointer-events-none absolute top-[37%] left-[57%] -translate-x-1/2 -rotate-4 font-seasons text-3xl tracking-widest whitespace-nowrap text-black sm:top-[38%] sm:text-5xl">
          30.08.26
        </p>

        <p className="pointer-events-none absolute top-[47%] left-[57%] -translate-x-1/2 -rotate-4 font-pinyon text-base tracking-wider whitespace-nowrap text-black sm:top-[48%] sm:text-2xl">
          We&rsquo;re getting married!
        </p>

        <img
          src={envelopeOpen}
          alt=""
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-0 w-full"
        />

        <Bouquet
          src={bouquet5}
          className="top-[22%] -right-9 w-24 sm:-right-16 sm:w-37.5"
        />
        <Bouquet
          src={bouquet6}
          className="bottom-0 -left-10 w-28 translate-y-1/4 sm:w-42"
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
