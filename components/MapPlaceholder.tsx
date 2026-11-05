import { MapPin } from "lucide-react";

export const MapPlaceholder = () => (
  <aside
    aria-label="Map placeholder"
    className="flex min-h-80 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-100 md:sticky md:top-6 md:h-[650px]"
  >
    <div className="text-center text-neutral-500">
      <MapPin size={30} strokeWidth={1.3} className="mx-auto mb-3" />
      <p className="text-lg font-semibold">Map</p>
      <p className="mt-1 text-xs">Your next stay is somewhere here</p>
    </div>
  </aside>
);
