"use client";

import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

export const SaveButton = ({ id }: { id: string }) => {
  const [saved, setSaved] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setSaved(localStorage.getItem(`saved-${id}`) === "true"), 0);
    return () => clearTimeout(timer);
  }, [id]);
  const toggle = () => {
    localStorage.setItem(`saved-${id}`, String(!saved));
    setSaved(!saved);
  };
  return (
    <button
      onClick={toggle}
      aria-label={saved ? "Remove from wishlist" : "Save to wishlist"}
      aria-pressed={saved}
      title={saved ? "Remove from wishlist" : "Save to wishlist"}
      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-neutral-800 shadow-sm transition hover:scale-105"
    >
      <Heart size={20} className={saved ? "fill-airbnb text-airbnb" : "fill-black/10"} />
    </button>
  );
};
