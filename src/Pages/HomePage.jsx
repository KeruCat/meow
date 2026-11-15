import Hero from "../Components/Hero/Hero.jsx";
import Categories from "../Components/Categories/Categories.jsx";
import PopularEquipment from "../Components/Equipment/PopularEquipment.jsx";
import Features from "../Components/Features/Features.jsx";  

function HomePage() {
  return (
    <>
      <Hero />
      <Categories />
      <PopularEquipment />
      <Features />
    </>
  );
}

export default HomePage;
