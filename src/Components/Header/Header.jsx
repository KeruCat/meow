import Brand from "./Brand";
import Navigation from "./Navigation";
import HeaderActions from "./HeaderActions";
import Search from "./Search";

function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-page/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 sm:px-6 lg:gap-8">
        <Brand name="Эвент-Прокат" />

        <div className="hidden md:block">
          <Navigation />
        </div>

        <HeaderActions />
      </div>

      <div className="mx-auto max-w-6xl space-y-3 px-4 pb-3 sm:px-6 lg:hidden">
        <Search />

        <div className="md:hidden">
          <Navigation />
        </div>
      </div>
    </header>
  );
}

export default Header;