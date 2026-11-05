"use client";

import {
  House,
  Waves,
  Trees,
  Armchair,
  Sprout,
  Castle,
  Flame,
  Mountain,
  SlidersHorizontal,
} from "lucide-react";
import Link from "next/link";
import type { Category } from "@/types/listing";

const categories = [
  { name: "All homes", icon: House },
  { name: "Beach", icon: Waves },
  { name: "Cabins", icon: Trees },
  { name: "Design", icon: Armchair },
  { name: "Countryside", icon: Sprout },
  { name: "Mansions", icon: Castle },
  { name: "Trending", icon: Flame },
  { name: "Amazing views", icon: Mountain },
] as const;

export const CategoryFilter = ({
  active,
  onChange,
}: {
  active: Category;
  onChange: (category: Category) => void;
}) => (
  <div className="flex items-center gap-6 border-b border-neutral-100">
    <div className="flex flex-1 gap-7 overflow-x-auto md:justify-between md:gap-9">
      {categories.map(({ name, icon: Icon }) => (
        <button
          key={name}
          onClick={() => onChange(name)}
          aria-pressed={active === name}
          className={`flex shrink-0 flex-col items-center gap-2 border-b-2 py-5 text-xs font-semibold transition ${active === name ? "border-neutral-900 text-neutral-900" : "border-transparent text-neutral-500 hover:border-neutral-300 hover:text-neutral-900"}`}
        >
          <Icon size={25} strokeWidth={1.5} />
          {name}
        </button>
      ))}
    </div>
    <Link
      href="/catalog"
      className="hidden items-center gap-2 rounded-xl border border-neutral-300 px-4 py-3 text-xs font-semibold lg:flex"
    >
      <SlidersHorizontal size={16} />
      Filters
    </Link>
  </div>
);
