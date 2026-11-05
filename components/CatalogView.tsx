"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { listings } from "@/lib/listings";
import { Header } from "./Header";
import { ListingCard } from "./ListingCard";
import { ListingGrid } from "./ListingGrid";
import { ResultsHeader, type SortOrder } from "./ResultsHeader";
import { MapPlaceholder } from "./MapPlaceholder";

export const CatalogView = () => {
  const params = useSearchParams();
  const initialQuery = params.get("q") || "";
  const savedOnly = params.get("saved") === "true";
  const [query, setQuery] = useState(initialQuery);
  const [sort, setSort] = useState<SortOrder>("ascending");
  const [savedIds, setSavedIds] = useState<string[]>([]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setQuery(initialQuery);
      setSavedIds(
        listings
          .filter((listing) => localStorage.getItem(`saved-${listing.id}`) === "true")
          .map((listing) => listing.id),
      );
    }, 0);
    return () => clearTimeout(timer);
  }, [initialQuery, savedOnly]);
  const results = listings
    .filter(
      (listing) =>
        `${listing.location} ${listing.title}`.toLowerCase().includes(query.toLowerCase()) &&
        (!savedOnly || savedIds.includes(listing.id)),
    )
    .sort((first, second) =>
      sort === "ascending" ? first.price - second.price : second.price - first.price,
    );
  return (
    <>
      <Header query={query} onSearch={setQuery} />
      <main className="mx-auto max-w-[1440px] px-5 py-7 md:px-10 lg:px-16">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-1 text-xs text-neutral-500 hover:underline"
        >
          <ChevronLeft size={14} />
          All homes
        </Link>
        <ResultsHeader count={results.length} sort={sort} onSort={setSort} query={query} saved={savedOnly} />
        <div className="grid items-start gap-8 md:grid-cols-[1.15fr_1fr]">
          <section aria-label="Search results">
            {results.length ? (
              <div className="grid grid-cols-1 gap-x-5 gap-y-8 lg:grid-cols-2">
                {results.map((listing) => (
                  <ListingCard key={listing.id} listing={listing} />
                ))}
              </div>
            ) : (
              <ListingGrid listings={[]} />
            )}
          </section>
          <MapPlaceholder />
        </div>
      </main>
    </>
  );
};
