interface BookingDatesProps {
  checkIn: string;
  checkOut: string;
  onCheckIn: (value: string) => void;
  onCheckOut: (value: string) => void;
}

export const BookingDates = ({ checkIn, checkOut, onCheckIn, onCheckOut }: BookingDatesProps) => (
  <div className="grid grid-cols-2 overflow-hidden rounded-t-lg border border-neutral-400">
    <label className="min-w-0 border-r border-neutral-400 p-3">
      <span className="text-[10px] font-bold uppercase">Check-in</span>
      <input
        aria-label="Check-in"
        required
        type="date"
        value={checkIn}
        min="2026-11-05"
        onChange={(event) => onCheckIn(event.target.value)}
        className="mt-1 block w-full min-w-0 bg-white text-xs"
      />
    </label>
    <label className="min-w-0 p-3">
      <span className="text-[10px] font-bold uppercase">Checkout</span>
      <input
        aria-label="Checkout"
        required
        type="date"
        value={checkOut}
        min={checkIn}
        onChange={(event) => onCheckOut(event.target.value)}
        className="mt-1 block w-full min-w-0 bg-white text-xs"
      />
    </label>
  </div>
);
