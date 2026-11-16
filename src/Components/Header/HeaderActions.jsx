import Search from "./Search";
import AccountAction from "./AccountAction";
import BookingAction from "./BookingAction";

function HeaderActions() {
  return (
    <div className="ml-auto flex items-center gap-5">
      <div className="hidden w-72 lg:block">
        <Search />
      </div>
      <AccountAction />
      <BookingAction count={0} />
    </div>
  );
}

export default HeaderActions;