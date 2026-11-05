import { CheckCircle2 } from "lucide-react";

interface BookingConfirmationProps {
  nights: number;
  guests: number;
  checkIn: string;
  checkOut: string;
  onEdit: () => void;
}

export const BookingConfirmation = ({
  nights,
  guests,
  checkIn,
  checkOut,
  onEdit,
}: BookingConfirmationProps) => (
  <div role="status" className="py-6 text-center">
    <CheckCircle2 size={38} className="mx-auto mb-4 text-emerald-600" />
    <h2 className="text-lg font-semibold">Your getaway is on the calendar</h2>
    <p className="mt-3 text-sm text-neutral-500">
      {nights} nights · {guests} {guests === 1 ? "guest" : "guests"}
      <br />
      {checkIn} to {checkOut}
    </p>
    <p className="mt-3 text-xs text-neutral-500">Demo reservation. No payment was taken.</p>
    <button onClick={onEdit} className="mt-5 text-sm font-semibold underline">
      Edit reservation
    </button>
  </div>
);
