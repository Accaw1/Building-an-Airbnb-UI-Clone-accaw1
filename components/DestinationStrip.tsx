import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const destinations = [
  { name: "Toronto", subtitle: "A little city energy", photo: "photo-1517090504586-fde19ea6066f" },
  { name: "Vancouver", subtitle: "Where mountains meet the sea", photo: "photo-1559511260-66a654ae982a" },
  { name: "Montreal", subtitle: "Old streets. New favorites.", photo: "photo-1519178614-68673b201f36" },
];

export const DestinationStrip = () => (
  <section className="py-10 md:py-12">
    <div className="mb-6 flex items-center justify-between">
      <h2 className="text-xl font-semibold">A little closer to your next adventure</h2>
      <ArrowUpRight size={20} className="shrink-0" />
    </div>
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
      {destinations.map((destination) => (
        <Link
          key={destination.name}
          href={`/catalog?q=${destination.name}`}
          className="group relative aspect-[1.8] overflow-hidden rounded-xl bg-neutral-200"
        >
          <Image
            src={`https://images.unsplash.com/${destination.photo}?auto=format&fit=crop&w=800&q=85`}
            alt={destination.name}
            fill
            unoptimized
            sizes="(max-width: 767px) 100vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/65 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 text-white">
            <h3 className="text-xl font-semibold">{destination.name}</h3>
            <p className="mt-1 text-xs">{destination.subtitle}</p>
          </div>
        </Link>
      ))}
    </div>
  </section>
);
