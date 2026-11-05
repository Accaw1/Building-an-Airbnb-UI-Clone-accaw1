"use client";

import Link from "next/link";
import { useState } from "react";

const places: Record<string, string[]> = {
  Popular: [
    "Toronto",
    "Montreal",
    "Vancouver",
    "Canmore",
    "Whistler",
    "Prince Edward County",
    "Mississauga",
    "Huntsville",
  ],
  Coastal: ["Vancouver", "Victoria", "Halifax", "Tofino"],
  Countryside: ["Prince Edward County", "Huntsville", "Niagara-on-the-Lake", "Brampton"],
  Mountains: ["Canmore", "Whistler", "Banff", "Calgary"],
  "City breaks": ["Toronto", "Montreal", "Vancouver", "Ottawa"],
};

export const FooterInspiration = () => {
  const [tab, setTab] = useState("Popular");
  return (
    <section className="py-9">
      <h2 className="text-xl font-semibold">Inspiration for future getaways</h2>
      <div
        className="mt-5 flex gap-7 overflow-x-auto border-b border-neutral-300"
        aria-label="Getaway inspiration"
      >
        {Object.keys(places).map((item) => (
          <button
            key={item}
            aria-pressed={tab === item}
            onClick={() => setTab(item)}
            className={`shrink-0 border-b-2 pb-3 text-sm ${tab === item ? "border-neutral-900 font-semibold" : "border-transparent text-neutral-500"}`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-5 md:grid-cols-4">
        {places[tab].map((place) => (
          <Link
            key={place}
            href={`/catalog?q=${encodeURIComponent(place)}`}
            className="text-xs hover:underline"
          >
            <p className="font-semibold">{place}</p>
            <p className="mt-1 text-neutral-500">Vacation rentals</p>
          </Link>
        ))}
      </div>
    </section>
  );
};
