import Search from "./Search.jsx";
import AccountAction from "./AccountAction.jsx";
import BookingAction from "./BookingAction.jsx";

function HeaderActions() {
  return (
    <div className="flex items-center gap-4">
      <Search />

      <AccountAction />

      <BookingAction count={0} />
    </div>
  );
}

export default HeaderActions;
