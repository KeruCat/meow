import { Link } from "react-router-dom";
import { CalendarCheck } from "lucide-react";

function BookingAction({ count }) {
  return (
    <Link
      to="/booking"
      className="relative flex flex-col items-center gap-0.5 text-xs text-ink-muted transition-colors hover:text-accent"
    >
      <CalendarCheck className="h-5 w-5" />
      Бронь
      <span className="absolute -right-2 -top-1 rounded-full bg-accent px-1.5 text-[10px] font-bold text-page">
        {count}
      </span>
    </Link>
  );
}

export default BookingAction;