import Brand from "./Brand.jsx";
import Navigation from "./Navigation.jsx";
import HeaderActions from "./HeaderActions.jsx";

function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <div className="flex items-center gap-8">
          <Brand name="Эвент-Прокат" />

          <Navigation />
        </div>

        <HeaderActions />
      </div>
    </header>
  );
}

export default Header;
