import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import type { Listing } from "@/types/listing";
import { SaveButton } from "./SaveButton";

export const ListingCard = ({ listing }: { listing: Listing }) => (
  <article className="group min-w-0" data-testid="listing-card" data-price={listing.price}>
    <div className="relative aspect-[1.08] overflow-hidden rounded-2xl bg-neutral-100">
      <Link href={`/rooms/${listing.id}`} aria-label={`View ${listing.title}`} className="absolute inset-0">
        <Image
          src={listing.image}
          alt={listing.title}
          fill
          unoptimized
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 45vw, 25vw"
          className="object-cover transition duration-500 group-hover:scale-[1.04]"
        />
      </Link>
      {listing.favorite && (
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-semibold shadow-sm">
          Guest favorite
        </span>
      )}
      <div className="absolute right-3 top-3">
        <SaveButton id={listing.id} />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-3 flex justify-center gap-1">
        <span className="h-1.5 w-1.5 rounded-full bg-white" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/55" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/55" />
      </div>
    </div>
    <Link href={`/rooms/${listing.id}`} className="mt-3 block text-[13px] leading-6">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold">{listing.location}</h3>
        <span className="flex shrink-0 items-center gap-1">
          <Star size={11} fill="currentColor" />
          {listing.rating.toFixed(2)}
        </span>
      </div>
      <p className="truncate text-neutral-500">{listing.title}</p>
      <p className="text-neutral-500">{listing.dates}</p>
      <p className="mt-1">
        <span className="font-semibold">${listing.price} CAD</span>
        <span className="text-neutral-500"> / night</span>
      </p>
    </Link>
  </article>
);
