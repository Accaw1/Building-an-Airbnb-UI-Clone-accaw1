"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";

export const SearchBar = ({
  query = "",
  onSearch,
}: {
  query?: string;
  onSearch?: (value: string) => void;
}) => {
  const [localQuery, setLocalQuery] = useState("");
  const value = onSearch ? query : localQuery;
  return (
    <div className="flex w-full justify-center md:pb-1">
      <div className="flex w-full max-w-[700px] items-center gap-3 rounded-full border border-neutral-200 bg-white py-2 pl-5 pr-2 shadow-[0_3px_12px_#00000010] md:gap-5 md:py-3 md:pl-7">
        <Search size={18} className="shrink-0 text-neutral-600 md:hidden" />
        <label className="min-w-0 flex-1">
          <span className="hidden text-xs font-semibold md:block">Where</span>
          <input
            aria-label="Search destinations"
            placeholder="Search destinations"
            value={value}
            onChange={(event) => (onSearch || setLocalQuery)(event.target.value)}
            className="w-full bg-transparent text-sm outline-none placeholder:text-neutral-500"
          />
        </label>
        <div className="hidden border-l border-neutral-200 px-6 md:block">
          <p className="text-xs font-semibold">When</p>
          <p className="mt-1 text-sm text-neutral-500">Any week</p>
        </div>
        <div className="hidden border-l border-neutral-200 px-6 md:block">
          <p className="text-xs font-semibold">Who</p>
          <p className="mt-1 text-sm text-neutral-500">Add guests</p>
        </div>
        <Link
          href={`/catalog${value ? `?q=${encodeURIComponent(value)}` : ""}`}
          aria-label="Search stays"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-airbnb text-white transition hover:bg-rose-600"
        >
          <Search size={19} className="hidden md:block" />
          <ArrowRight size={19} className="md:hidden" />
        </Link>
      </div>
    </div>
  );
};
