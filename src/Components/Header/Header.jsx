import Brand from "./Brand";
import Navigation from "./Navigation";
import HeaderActions from "./HeaderActions";

function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-page/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-8 px-6 py-3">
        <Brand name="Эвент-Прокат" />
        <Navigation />
        <HeaderActions />
      </div>
    </header>
  );
}

export default Header;