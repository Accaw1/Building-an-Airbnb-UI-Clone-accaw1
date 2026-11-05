"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { listings as fixture } from "@/lib/listings";
import type { Category, Listing } from "@/types/listing";
import { Header } from "./Header";
import { CategoryFilter } from "./CategoryFilter";
import { ListingGrid } from "./ListingGrid";
import { DestinationStrip } from "./DestinationStrip";

export const HomeView = () => {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<Category>("All homes");
  const [allListings, setAllListings] = useState<Listing[]>([]);
  const [visible, setVisible] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setAllListings(fixture);
      setVisible(fixture);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  const filter = (value: string, category: Category) =>
    allListings.filter(
      (listing) =>
        `${listing.location} ${listing.title} ${listing.description}`
          .toLowerCase()
          .includes(value.toLowerCase()) &&
        (category === "All homes" || listing.category === category),
    );
  const search = (value: string) => {
    setQuery(value);
    setVisible(filter(value, active));
  };
  const selectCategory = (category: Category) => {
    setActive(category);
    setVisible(filter(query, category));
  };
  const displayed = loading
    ? []
    : visible.filter(
        (listing) =>
          (active === "All homes" || listing.category === active) &&
          `${listing.location} ${listing.title} ${listing.description}`
            .toLowerCase()
            .includes(query.toLowerCase()),
      );
  return (
    <>
      <Header query={query} onSearch={search} />
      <main className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-16">
        <CategoryFilter active={active} onChange={selectCategory} />
        <section className="py-7 md:py-9">
          <div className="mb-6 flex items-center justify-between gap-3">
            <div>
              <h1 className="text-[23px] font-semibold md:text-[26px]">Find your kind of getaway</h1>
              <p className="mt-1.5 text-sm text-neutral-500">A change of scenery. A place to feel at home.</p>
            </div>
            <span className="hidden rounded-full bg-neutral-100 px-3 py-1.5 text-xs text-neutral-600 md:block">
              Loved by guests
            </span>
          </div>
          <ListingGrid listings={displayed} loading={loading} />
        </section>
        <div className="flex flex-col items-center gap-4 border-b border-neutral-200 pb-10 pt-3">
          <p className="text-sm font-semibold">There&apos;s a whole world of stays to discover</p>
          <Link
            href="/catalog"
            className="flex items-center gap-2 rounded-lg bg-neutral-900 px-6 py-3.5 text-sm font-semibold text-white hover:bg-neutral-700"
          >
            Explore more homes
            <ArrowRight size={16} />
          </Link>
        </div>
        <DestinationStrip />
      </main>
    </>
  );
};
