import type { Listing } from "@/types/listing";
import { ListingCard } from "./ListingCard";
import { SearchX } from "lucide-react";

export const ListingGrid = ({ listings, loading = false }: { listings: Listing[]; loading?: boolean }) => {
  if (loading)
    return (
      <div role="status" aria-label="Loading stays">
        <p className="sr-only">Loading stays...</p>
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 8 }, (_, index) => (
            <div key={index} className="animate-pulse">
              <div className="aspect-[1.08] rounded-2xl bg-neutral-100" />
              <div className="mt-4 h-4 w-3/4 rounded bg-neutral-100" />
              <div className="mt-2 h-4 w-1/2 rounded bg-neutral-100" />
            </div>
          ))}
        </div>
      </div>
    );
  if (!listings.length)
    return (
      <div className="py-20 text-center">
        <SearchX className="mx-auto mb-4 text-neutral-400" size={36} />
        <h2 className="text-lg font-semibold">No stays found</h2>
        <p className="mt-2 text-sm text-neutral-500">Try another destination or category.</p>
      </div>
    );
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
      {listings.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </div>
  );
};
