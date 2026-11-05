"use client";

import { useState } from "react";
import { Star, Share } from "lucide-react";
import type { Room } from "@/types/listing";
import { SaveButton } from "./SaveButton";

export const RoomHeader = ({ room }: { room: Room }) => {
  const [copied, setCopied] = useState(false);
  const share = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-semibold md:text-3xl">{room.title}</h1>
      <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <Star size={13} fill="currentColor" />
          <span className="font-semibold">{room.rating}</span>
          <span>·</span>
          <span className="underline">{room.reviews} reviews</span>
          <span>·</span>
          <span className="text-neutral-500">{room.location}</span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={share}
            className="flex items-center gap-2 text-xs underline"
            aria-label="Copy room link"
          >
            <Share size={15} />
            {copied ? "Link copied" : "Share"}
          </button>
          <SaveButton id={room.id} />
        </div>
      </div>
    </div>
  );
};
