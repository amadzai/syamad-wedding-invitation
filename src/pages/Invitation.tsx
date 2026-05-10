import envelope from '../assets/images/invitation/envelope.png';
import bouquet1 from '../assets/images/invitation/bouquet-1.png';
import bouquet2 from '../assets/images/invitation/bouquet-2.png';
import bouquet3 from '../assets/images/invitation/bouquet-3.png';
import bouquet4 from '../assets/images/invitation/bouquet-4.png';
import bouquet5 from '../assets/images/invitation/bouquet-5.png';
import bouquet6 from '../assets/images/invitation/bouquet-6.png';
import bouquet7 from '../assets/images/invitation/bouquet-7.png';
import bouquet8 from '../assets/images/invitation/bouquet-8.png';
import polaroid1 from '../assets/images/invitation/polaroid-1.png';
import polaroid2 from '../assets/images/invitation/polaroid-2.png';
import saveTheDate from '../assets/images/invitation/save-the-date.png';
import envelopeOpen from '../assets/images/invitation/envelope-open.png';
import bismillah from '../assets/images/invitation/bismillah.png';
import whiteFlowers from '../assets/images/invitation/white-flowers.png';
import house from '../assets/images/invitation/astana.png';
import car from '../assets/images/invitation/car-myvi.png';
import { Map, Marker } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import { Link } from 'react-router-dom';

export function Invitation() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white px-6 pt-48 pb-12 sm:pt-56">
      <div className="relative w-[min(72vw,460px)] sm:w-[min(85vw,460px)]">
        <img
          src={envelope}
          alt=""
          aria-hidden
          className="aspect-1048/1346 w-full animate-rise object-contain [animation-delay:0.58s]"
        />

        <Bouquet
          src={bouquet2}
          className="-top-32 left-[10%] w-24 animate-rise-blur [animation-delay:0.09s] sm:-top-40 sm:w-37.5"
        />

        <img
          src={polaroid1}
          alt=""
          aria-hidden
          className="pointer-events-none absolute -top-28 left-[42%] w-34 rotate-6 animate-rise [animation-delay:0.17s] sm:-top-36 sm:left-[45%] sm:w-54"
        />

        <img
          src={polaroid2}
          alt=""
          aria-hidden
          className="pointer-events-none absolute -top-16 left-[5%] w-34 -rotate-6 animate-rise [animation-delay:0.22s] sm:w-54"
        />

        <Bouquet
          src={bouquet1}
          className="top-[20%] left-[3%] w-12 animate-rise-blur [animation-delay:0.5s] sm:w-20"
        />
        <Bouquet
          src={bouquet3}
          className="top-[18%] right-[15%] w-20 animate-rise-blur [animation-delay:0.53s] sm:w-28"
        />
        <Bouquet
          src={bouquet4}
          className="top-[28%] -left-10 w-28 animate-rise-blur [animation-delay:0.55s] sm:w-42"
        />

        <img
          src={saveTheDate}
          alt=""
          aria-hidden
          className="pointer-events-none absolute top-[25%] left-1/2 w-58 -translate-x-1/2 -rotate-4 animate-rise [animation-delay:0.31s] sm:w-95"
        />

        <p className="pointer-events-none absolute top-[41.5%] left-1/2 -translate-x-32 rotate-86 animate-fade-in font-seasons text-[6px] tracking-[0.3em] text-black [animation-delay:0.38s] sm:-translate-x-52 sm:text-[10px]">
          SYAFIQAH + AMAD
        </p>

        <p className="pointer-events-none absolute top-[31%] left-[57%] -translate-x-1/2 -rotate-4 animate-fade-in font-seasons text-sm font-medium tracking-widest whitespace-nowrap text-black [animation-delay:0.38s] sm:top-[31%] sm:text-2xl">
          SAVE OUR DATE
        </p>

        <p className="pointer-events-none absolute top-[37%] left-[57%] -translate-x-1/2 -rotate-4 animate-fade-in font-seasons text-3xl tracking-widest whitespace-nowrap text-black [animation-delay:0.42s] sm:top-[38%] sm:text-5xl">
          30.08.26
        </p>

        <p className="pointer-events-none absolute top-[47%] left-[57%] -translate-x-1/2 -rotate-4 animate-fade-in font-pinyon text-base tracking-wider whitespace-nowrap text-black [animation-delay:0.44s] sm:top-[48%] sm:text-2xl">
          We&rsquo;re getting married!
        </p>

        <img
          src={envelopeOpen}
          alt=""
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-0 w-full animate-rise [animation-delay:0.58s]"
        />

        <Bouquet
          src={bouquet5}
          className="top-[22%] -right-9 w-24 animate-rise-blur [animation-delay:0.61s] sm:-right-16 sm:w-37.5"
        />
        <Bouquet
          src={bouquet6}
          className="-bottom-10 -left-10 w-28 translate-y-1/4 animate-rise-blur [animation-delay:0.64s] sm:w-48"
        />
      </div>

      <img
        src={bismillah}
        alt="Bismillah"
        className="mt-20 w-78 animate-rise-blur sm:mt-32 sm:w-94"
      />

      <p className="text-md mt-4 max-w-md animate-rise-blur text-center font-script text-black sm:mt-8 sm:text-xl">
        With the blessing of Allah we are delighted
        <br />
        to invite you to the wedding reception of
      </p>

      <h1 className="mt-4 animate-rise-blur text-center font-seasons text-3xl tracking-[0.15em] text-black sm:mt-10 sm:text-4xl">
        SYAFIQAH & AMAD
      </h1>

      <p className="mt-3 animate-rise-blur text-center font-seasons text-2xl tracking-[0.2em] text-black sm:mt-4 sm:text-3xl">
        30<sup>th</sup> AUGUST 2026
      </p>

      <img
        src={whiteFlowers}
        alt=""
        aria-hidden
        className="mt-4 w-48 animate-rise-blur sm:mt-8 sm:w-60"
      />

      <img
        src={house}
        alt=""
        aria-hidden
        className="mt-10 w-70 animate-rise-blur sm:mt-12 sm:w-82"
      />

      <div className="mt-8 flex animate-rise-blur flex-col gap-8 sm:mt-10 sm:gap-16">
        <Details title="VENUE" detail="Astana, Bamboo Hills" />
        <Details
          title="DATE"
          detail={
            <>
              August 30<sup>th</sup>, 2026
            </>
          }
        />
        <Details title="TIME" detail="12:00pm - 4:00pm" />
        <Details title="THEME" detail="Earthy Elegance" />
        <Details title="DRESS CODE" detail="Traditional / Formal" />
        <Details
          title="PARKING AT ASTANA"
          detail={<img src={car} alt="" className="w-48 sm:w-64" />}
          subtext={
            <>
              Ticketless access with TNG / Debit /
              <br />
              Credit card at RM 5 flat rate / entry
            </>
          }
        />
      </div>

      <p className="mt-12 animate-rise-blur text-center font-seasons text-3xl font-bold text-burgundy sm:mt-16 sm:text-4xl">
        HOW TO GET THERE
      </p>

      <div className="relative mt-6 h-100 w-full max-w-sm animate-rise-blur overflow-hidden sm:mt-8 sm:h-125 sm:max-w-xl">
        <Map
          initialViewState={{
            longitude: 101.67490055966623,
            latitude: 3.1934055941883077,
            zoom: 17,
          }}
          mapStyle="https://tiles.stadiamaps.com/styles/stamen_toner.json"
        >
          <Marker
            longitude={101.67490055966623}
            latitude={3.1934055941883077}
            color="#3b0009"
          />
        </Map>

        <div className="absolute top-3 left-3 flex max-w-60 items-start gap-1 rounded-md bg-white p-3 shadow-lg">
          <div className="flex-1">
            <p className="font-seasons text-sm font-bold text-black">
              Astana at Bamboo Hills
            </p>
            <p className="mt-1 font-seasons text-xs text-neutral-600">
              Unit P13, Bamboo Hills, Off Lebuhraya DUKE, 51200 Kuala Lumpur
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-2">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Astana+at+Bamboo+Hills+Kuala+Lumpur"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open in Google Maps"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-burgundy bg-white text-burgundy transition-colors hover:bg-burgundy hover:text-white"
            >
              <i className="fa-solid fa-location-dot text-sm" />
            </a>
            <a
              href="https://ul.waze.com/ul?place=ChIJ_SQ2M7pHzDERCNHqH7NWucI&ll=3.19337370%2C101.67490820&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open in Waze"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-burgundy bg-white text-burgundy transition-colors hover:bg-burgundy hover:text-white"
            >
              <i className="fa-brands fa-waze text-sm" />
            </a>
          </div>
        </div>
      </div>

      <div className="group relative mt-24 w-full max-w-md animate-rise-blur sm:mt-32">
        <a
          href="#"
          className="block rounded-full bg-burgundy px-12 py-3 text-center font-seasons text-3xl tracking-widest text-white transition-transform duration-300 group-hover:scale-[1.02] focus-visible:scale-[1.02] focus-visible:outline-none sm:py-4 sm:text-4xl"
        >
          RSVP HERE
        </a>
        <Bouquet
          src={bouquet7}
          className="top-1/3 -left-3 w-26 -translate-y-1/2 transition-transform duration-300 group-hover:scale-[1.02] sm:-left-8 sm:w-32"
        />
        <Bouquet
          src={bouquet8}
          className="top-1/2 -right-2 w-22 -translate-y-1/2 transition-transform duration-300 group-hover:scale-[1.02] sm:-right-4 sm:w-26"
        />
      </div>

      <Link
        to="/"
        className="mt-12 inline-block animate-rise-blur font-seasons text-sm tracking-widest text-burgundy underline underline-offset-4 transition-transform duration-300 hover:scale-[1.02] focus-visible:scale-[1.02] focus-visible:outline-none sm:mt-16 sm:text-base"
      >
        RETURN TO ENVELOPE
      </Link>
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

function Details({
  title,
  detail,
  subtext,
}: {
  title: string;
  detail: React.ReactNode;
  subtext?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center">
      <p className="text-center font-seasons text-3xl font-bold text-burgundy sm:text-4xl">
        {title}
      </p>

      <div className="mt-4 text-center font-script text-2xl text-black sm:mt-6 sm:text-3xl">
        {detail}
      </div>

      {subtext && (
        <p className="mt-4 text-center font-seasons text-base text-black sm:mt-6 sm:text-xl">
          {subtext}
        </p>
      )}
    </div>
  );
}
