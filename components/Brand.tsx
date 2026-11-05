import Link from "next/link";

export const Brand = () => (
  <Link href="/" aria-label="Airbnb home" className="flex items-center gap-2 text-airbnb">
    <svg viewBox="0 0 32 36" fill="none" className="h-9 w-8" aria-hidden="true">
      <path
        d="M16 2C12 2 10 9 7 15L2 26c-3 7 5 11 10 6l4-5 4 5c5 5 13 1 10-6l-5-11C22 9 20 2 16 2Z"
        stroke="currentColor"
        strokeWidth="2.2"
      />
      <path d="M16 27c-9-8-7-14 0-14s9 6 0 14Z" stroke="currentColor" strokeWidth="2.2" />
    </svg>
    <span className="text-[27px] font-bold">airbnb</span>
  </Link>
);
