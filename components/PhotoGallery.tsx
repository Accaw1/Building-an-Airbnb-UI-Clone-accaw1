"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const PhotoGallery = ({ photos, title }: { photos: string[]; title: string }) => {
  const [index, setIndex] = useState(0);
  const cycle = (direction: number) =>
    setIndex((current) => (current + direction + photos.length) % photos.length);
  return (
    <section aria-label="Property photos">
      <div className="relative aspect-[1.2] overflow-hidden rounded-2xl bg-neutral-100 md:aspect-[2.1]">
        <Image
          src={photos[index]}
          alt={`${title}, photo ${index + 1}`}
          fill
          unoptimized
          priority
          sizes="(max-width: 767px) 100vw, 1100px"
          className="object-cover"
        />
        <button
          title="Previous photo"
          aria-label="Previous photo"
          onClick={() => cycle(-1)}
          className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 shadow-md hover:bg-white"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          title="Next photo"
          aria-label="Next photo"
          onClick={() => cycle(1)}
          className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 shadow-md hover:bg-white"
        >
          <ChevronRight size={20} />
        </button>
        <span
          aria-live="polite"
          className="absolute bottom-4 right-4 rounded-lg bg-black/65 px-3 py-1.5 text-xs text-white"
        >
          {index + 1} / {photos.length}
        </span>
      </div>
      <div className="mt-3 grid grid-cols-4 gap-3">
        {photos.map((photo, photoIndex) => (
          <button
            key={photo}
            aria-label={`Show photo ${photoIndex + 1}`}
            aria-pressed={index === photoIndex}
            onClick={() => setIndex(photoIndex)}
            className={`relative aspect-[1.7] overflow-hidden rounded-lg border-2 ${index === photoIndex ? "border-neutral-900" : "border-transparent opacity-65 hover:opacity-100"}`}
          >
            <Image
              src={photo}
              alt={`${title} thumbnail ${photoIndex + 1}`}
              fill
              unoptimized
              sizes="250px"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </section>
  );
};
