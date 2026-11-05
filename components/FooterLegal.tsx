import { Globe, Camera, MessageCircle } from "lucide-react";

export const FooterLegal = () => (
  <div className="flex flex-col-reverse justify-between gap-5 border-t border-neutral-200 py-6 text-xs md:flex-row">
    <div className="flex flex-wrap gap-3">
      <span>© 2026 Airbnb, Inc.</span>
      <a href="https://www.airbnb.com/terms/privacy_policy" target="_blank" rel="noreferrer">
        Privacy
      </a>
      <a href="https://www.airbnb.com/terms" target="_blank" rel="noreferrer">
        Terms
      </a>
      <span>Independent UI study</span>
    </div>
    <div className="flex items-center gap-5 font-semibold">
      <Globe size={15} />
      <span>English (CA)</span>
      <span>$ CAD</span>
      <a
        href="https://www.instagram.com/airbnb"
        aria-label="Airbnb Instagram"
        target="_blank"
        rel="noreferrer"
      >
        <Camera size={16} />
      </a>
      <a href="https://www.facebook.com/airbnb" aria-label="Airbnb Facebook" target="_blank" rel="noreferrer">
        <MessageCircle size={16} />
      </a>
    </div>
  </div>
);
