
import Brand from "./Brand";
import Navigation from "./Navigation";
import HeaderActions from "./HeaderActions";

function Header() {
  return (
    <header>
        <Brand Name="Витрина"/>

        <Navigation />
        
        <HeaderActions />
    </header>
  );
}

export default Header;