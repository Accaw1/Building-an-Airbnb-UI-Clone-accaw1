"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import type { Room } from "@/types/listing";
import { GuestCounter } from "./GuestCounter";
import { BookingDates } from "./BookingDates";
import { BookingConfirmation } from "./BookingConfirmation";

export const BookingCard = ({ room }: { room: Room }) => {
  const [guests, setGuests] = useState(1);
  const [checkIn, setCheckIn] = useState("2026-11-16");
  const [checkOut, setCheckOut] = useState("2026-11-21");
  const [confirmed, setConfirmed] = useState(false);
  const nights = Math.round((Date.parse(checkOut) - Date.parse(checkIn)) / 86400000);
  const valid = Number.isFinite(nights) && nights > 0;
  const subtotal = valid ? room.price * nights : 0;
  const fee = Math.round(subtotal * 0.12);
  return (
    <aside className="h-fit rounded-lg border border-neutral-200 p-5 shadow-[0_6px_24px_#00000010] md:sticky md:top-6 md:p-6">
      <div className="mb-6 flex items-center justify-between gap-3">
        <p>
          <span className="text-2xl font-semibold">${room.price}</span>
          <span className="text-sm text-neutral-500"> CAD / night</span>
        </p>
        <span className="flex items-center gap-1 text-xs">
          <Star size={11} fill="currentColor" />
          {room.rating}
        </span>
      </div>
      {confirmed ? (
        <BookingConfirmation
          nights={nights}
          guests={guests}
          checkIn={checkIn}
          checkOut={checkOut}
          onEdit={() => setConfirmed(false)}
        />
      ) : (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (valid) setConfirmed(true);
          }}
        >
          <BookingDates
            checkIn={checkIn}
            checkOut={checkOut}
            onCheckIn={setCheckIn}
            onCheckOut={setCheckOut}
          />
          <GuestCounter guests={guests} max={room.maxGuests} onChange={setGuests} />
          {!valid && (
            <p role="alert" className="mt-2 text-xs text-red-600">
              Checkout must be after check-in.
            </p>
          )}
          <button
            type="submit"
            disabled={!valid}
            className="mt-4 w-full rounded-lg bg-linear-to-r from-[#e61e4d] to-[#d70466] py-3.5 text-sm font-semibold text-white hover:brightness-90"
          >
            Reserve
          </button>
          <p className="mt-3 text-center text-xs text-neutral-500">You won&apos;t be charged yet</p>
          <div className="mt-6 space-y-4 text-sm">
            <div className="flex justify-between">
              <span className="underline">
                ${room.price} × {valid ? nights : 0} nights
              </span>
              <span>${subtotal} CAD</span>
            </div>
            <div className="flex justify-between">
              <span className="underline">Airbnb service fee</span>
              <span>${fee} CAD</span>
            </div>
            <div className="flex justify-between border-t border-neutral-200 pt-4 font-semibold">
              <span>Total before taxes</span>
              <span>${subtotal + fee} CAD</span>
            </div>
          </div>
        </form>
      )}
    </aside>
  );
};
