import { Award, KeyRound, CalendarCheck } from "lucide-react";

const highlights = [
  {
    icon: Award,
    title: "A guest favorite",
    text: "One of the most-loved homes, based on ratings and reliability.",
  },
  { icon: KeyRound, title: "Let yourself in", text: "Easy self check-in with a keypad." },
  {
    icon: CalendarCheck,
    title: "A little flexibility",
    text: "Free cancellation within 48 hours of booking.",
  },
];

export const RoomHighlights = () => (
  <section className="space-y-6 py-7">
    {highlights.map(({ icon: Icon, title, text }) => (
      <div key={title} className="flex gap-4">
        <Icon size={25} strokeWidth={1.5} className="shrink-0" />
        <div>
          <h3 className="text-sm font-semibold">{title}</h3>
          <p className="mt-1 text-xs leading-5 text-neutral-500">{text}</p>
        </div>
      </div>
    ))}
  </section>
);
