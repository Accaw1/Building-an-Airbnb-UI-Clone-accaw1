import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import type { Room } from "@/types/listing";

export const HostInfo = ({ host }: { host: Room["host"] }) => (
  <section className="flex items-center gap-4 border-y border-neutral-200 py-6">
    <div className="relative h-13 w-13 shrink-0 overflow-hidden rounded-full bg-neutral-100">
      <Image
        src={host.avatar}
        alt={`Host ${host.name}`}
        fill
        unoptimized
        sizes="52px"
        className="object-cover"
      />
    </div>
    <div>
      <h3 className="text-sm font-semibold">Hosted by {host.name}</h3>
      <p className="mt-1 text-xs text-neutral-500">Superhost · {host.years} years hosting</p>
    </div>
    <ShieldCheck className="ml-auto text-neutral-700" size={25} strokeWidth={1.5} />
  </section>
);
