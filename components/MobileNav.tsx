"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Heart, UserRound } from "lucide-react";

export const MobileNav = () => {
  const pathname = usePathname();
  return (
    <nav
      aria-label="Mobile navigation"
      className="fixed inset-x-0 bottom-0 z-40 flex h-17 items-center justify-center gap-16 border-t border-neutral-200 bg-white/95 backdrop-blur md:hidden"
    >
      <Link
        href="/"
        className={`flex flex-col items-center gap-1 text-[10px] ${pathname === "/" || pathname === "/catalog" ? "text-airbnb" : "text-neutral-500"}`}
      >
        <Search size={23} />
        Explore
      </Link>
      <Link
        href="/catalog?saved=true"
        className="flex flex-col items-center gap-1 text-[10px] text-neutral-500"
      >
        <Heart size={23} />
        Wishlists
      </Link>
      <Link href="/catalog" className="flex flex-col items-center gap-1 text-[10px] text-neutral-500">
        <UserRound size={23} />
        Stays
      </Link>
    </nav>
  );
};
