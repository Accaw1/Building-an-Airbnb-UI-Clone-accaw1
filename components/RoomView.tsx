"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { rooms } from "@/lib/listings";
import type { Room } from "@/types/listing";
import { Header } from "./Header";
import { RoomHeader } from "./RoomHeader";
import { PhotoGallery } from "./PhotoGallery";
import { HostInfo } from "./HostInfo";
import { Amenities } from "./Amenities";
import { BookingCard } from "./BookingCard";
import { RoomHighlights } from "./RoomHighlights";

export const RoomView = ({ id }: { id: string }) => {
  const [room, setRoom] = useState<Room | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setRoom(rooms.find((item) => item.id === id) || null);
      setLoading(false);
    }, 850);
    return () => clearTimeout(timer);
  }, [id]);
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1200px] px-5 py-7 md:px-10">
        <Link
          href="/catalog"
          className="mb-6 inline-flex items-center gap-1 text-xs text-neutral-500 hover:underline"
        >
          <ChevronLeft size={14} />
          Back to stays
        </Link>
        {loading ? (
          <div role="status" aria-label="Loading room" className="animate-pulse">
            <p className="mb-5 text-sm text-neutral-500">Getting your stay ready...</p>
            <div className="h-8 w-2/3 rounded bg-neutral-100" />
            <div className="mt-6 aspect-[1.2] rounded-2xl bg-neutral-100 md:aspect-[2.1]" />
          </div>
        ) : room ? (
          <>
            <RoomHeader room={room} />
            <PhotoGallery photos={room.photos} title={room.title} />
            <div className="mt-8 grid items-start gap-8 md:grid-cols-[1.4fr_1fr] md:gap-12">
              <div>
                <section className="pb-6">
                  <h2 className="text-xl font-semibold">Entire home in {room.location.split(",")[0]}</h2>
                  <p className="mt-2 text-sm text-neutral-500">
                    {room.maxGuests} guests · {room.bedrooms} bedrooms · 3 beds · 1 bath
                  </p>
                </section>
                <HostInfo host={room.host} />
                <RoomHighlights />
                <p className="border-t border-neutral-200 py-7 text-sm leading-7 text-neutral-600">
                  {room.description}. Settle in, put the kettle on, and make yourself at home. This
                  thoughtfully furnished space has everything you need for a restful escape, with local
                  favorites just a short walk away.
                </p>
                <Amenities amenities={room.amenities} />
              </div>
              <BookingCard room={room} />
            </div>
          </>
        ) : (
          <div className="py-20 text-center">
            <h1 className="text-2xl font-semibold">This stay couldn&apos;t be found</h1>
            <Link href="/catalog" className="mt-4 inline-block text-sm underline">
              Find another home
            </Link>
          </div>
        )}
      </main>
    </>
  );
};
