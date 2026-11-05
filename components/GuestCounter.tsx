import { Minus, Plus } from "lucide-react";

export const GuestCounter = ({
  guests,
  max,
  onChange,
}: {
  guests: number;
  max: number;
  onChange: (value: number) => void;
}) => (
  <div className="flex items-center justify-between gap-4 rounded-b-lg border border-t-0 border-neutral-400 p-4">
    <div>
      <p className="text-[10px] font-bold uppercase">Guests</p>
      <p className="mt-1 text-sm" aria-live="polite">
        {guests} {guests === 1 ? "guest" : "guests"}
      </p>
    </div>
    <div className="flex items-center gap-3">
      <button
        type="button"
        aria-label="Remove guest"
        title="Remove guest"
        disabled={guests <= 1}
        onClick={() => onChange(Math.max(1, guests - 1))}
        className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-400"
      >
        <Minus size={15} />
      </button>
      <button
        type="button"
        aria-label="Add guest"
        title="Add guest"
        disabled={guests >= max}
        onClick={() => onChange(Math.min(max, guests + 1))}
        className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-400"
      >
        <Plus size={15} />
      </button>
    </div>
  </div>
);
