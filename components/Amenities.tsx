import { Wifi, CookingPot, Car, Snowflake, WashingMachine, Trees } from "lucide-react";

const icons = [Wifi, CookingPot, Car, Snowflake, WashingMachine, Trees];
export const Amenities = ({ amenities }: { amenities: string[] }) => (
  <section className="border-t border-neutral-200 py-7">
    <h2 className="mb-6 text-xl font-semibold">What this place offers</h2>
    <div className="grid grid-cols-2 gap-x-4 gap-y-6">
      {amenities.map((amenity, index) => {
        const Icon = icons[index % icons.length];
        return (
          <div key={amenity} className="flex items-center gap-3 text-sm">
            <Icon size={23} strokeWidth={1.4} className="shrink-0" />
            {amenity}
          </div>
        );
      })}
    </div>
  </section>
);
