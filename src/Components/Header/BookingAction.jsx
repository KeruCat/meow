import { Link } from "react-router-dom";

function BookingAction({ count }) {
  return (
    <Link
      to="/booking"
      className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50"
    >
      Бронь ({count})
    </Link>
  );
}

export default BookingAction;