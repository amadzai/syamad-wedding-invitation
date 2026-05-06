import openEnvelope from '../assets/images/invitation/open-envelope.png';

export function Invitation() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white px-6 py-12">
      <img
        src={openEnvelope}
        alt=""
        aria-hidden
        className="aspect-1048/1346 w-[min(72vw,460px)] object-contain sm:w-[min(85vw,460px)]"
      />
    </main>
  );
}
