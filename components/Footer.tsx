import { FooterInspiration } from "./FooterInspiration";
import { FooterLegal } from "./FooterLegal";
const groups = [
  {
    title: "Support",
    links: [
      "Help Centre",
      "Get help with a safety issue",
      "AirCover",
      "Anti-discrimination",
      "Disability support",
      "Cancellation options",
    ],
  },
  {
    title: "Hosting",
    links: [
      "Airbnb your home",
      "AirCover for Hosts",
      "Hosting resources",
      "Community forum",
      "Hosting responsibly",
      "Join a free hosting class",
    ],
  },
  {
    title: "Airbnb",
    links: [
      "2026 Summer Release",
      "Newsroom",
      "Careers",
      "Investors",
      "Gift cards",
      "Airbnb.org emergency stays",
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 bg-[#f7f7f7]">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-16">
        <FooterInspiration />
        <div className="grid border-t border-neutral-200 md:grid-cols-3">
          {groups.map((group) => (
            <section key={group.title} className="border-b border-neutral-200 py-7 md:border-0">
              <h3 className="mb-4 text-sm font-semibold">{group.title}</h3>
              <ul className="space-y-3">
                {group.links.map((label) => (
                  <li key={label}>
                    <a
                      href="https://www.airbnb.com/help"
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-neutral-600 hover:underline"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <FooterLegal />
      </div>
    </footer>
  );
};
