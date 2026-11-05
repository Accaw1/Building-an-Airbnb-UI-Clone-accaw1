"use client";

import { useState } from "react";
import Link from "next/link";
import { Globe, Menu, UserRound } from "lucide-react";
import { Brand } from "./Brand";
import { SearchBar } from "./SearchBar";

export const Header = ({ query = "", onSearch }: { query?: string; onSearch?: (value: string) => void }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="relative z-30 border-b border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-5 px-5 py-5 md:px-10 lg:px-16">
        <Brand />
        <nav aria-label="Primary" className="hidden items-center gap-8 text-sm md:flex">
          <Link href="/" className="font-semibold hover:text-airbnb">
            Homes
          </Link>
          <Link href="/catalog" className="text-neutral-500 hover:text-airbnb">
            Explore stays
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/catalog" className="hidden text-sm font-semibold lg:block">
            Find your next getaway
          </Link>
          <Globe size={18} className="hidden md:block" />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="User menu"
            aria-expanded={menuOpen}
            className="flex items-center gap-3 rounded-full border border-neutral-300 p-2 pl-3 hover:shadow-md"
          >
            <Menu size={18} />
            <UserRound size={24} className="rounded-full bg-neutral-100 p-1" />
          </button>
        </div>
        {menuOpen && (
          <div className="absolute right-5 top-17 w-56 rounded-lg border border-neutral-200 bg-white p-2 shadow-xl md:right-10">
            <Link
              href="/catalog"
              onClick={() => setMenuOpen(false)}
              className="block rounded-lg px-4 py-3 text-sm hover:bg-neutral-100"
            >
              Explore all stays
            </Link>
            <Link
              href="/catalog?saved=true"
              onClick={() => setMenuOpen(false)}
              className="block rounded-lg px-4 py-3 text-sm hover:bg-neutral-100"
            >
              Your wishlist
            </Link>
            <p className="border-t px-4 py-3 text-xs text-neutral-500">Independent interface study</p>
          </div>
        )}
        <SearchBar query={query} onSearch={onSearch} />
      </div>
    </header>
  );
};
