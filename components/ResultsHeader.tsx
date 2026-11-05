import { ArrowDownUp } from "lucide-react";

export type SortOrder = "ascending" | "descending";

export const ResultsHeader = ({
  count,
  sort,
  onSort,
  query,
  saved,
}: {
  count: number;
  sort: SortOrder;
  onSort: (value: SortOrder) => void;
  query: string;
  saved: boolean;
}) => (
  <div className="mb-7 flex flex-col justify-between gap-5 md:flex-row md:items-center">
    <div>
      <p className="mb-2 text-xs text-neutral-500">
        {saved ? "Your saved collection" : "Your next trip starts here"}
      </p>
      <h1 className="text-2xl font-semibold">
        {count} {count === 1 ? "stay" : "stays"}
        {query ? ` in ${query}` : " to call home"}
      </h1>
    </div>
    <label className="flex w-fit items-center gap-2 rounded-lg border border-neutral-300 px-3 py-3 text-xs">
      <ArrowDownUp size={15} />
      <span className="sr-only">Sort by price</span>
      <select
        aria-label="Sort by price"
        value={sort}
        onChange={(event) => onSort(event.target.value as SortOrder)}
        className="max-w-full bg-white pr-2"
      >
        <option value="ascending">Price: low to high</option>
        <option value="descending">Price: high to low</option>
      </select>
    </label>
  </div>
);
