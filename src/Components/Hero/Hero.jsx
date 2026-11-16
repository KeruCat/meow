import HeroContent from "./HeroContent.jsx";
import HeroMedia from "./HeroMedia.jsx";
import heroImage from "../../assets/hero.png";
import { equipment } from "../../data/equipment.jsx";

function Hero() {
  return (
    <section className="bg-page">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-20">
        <HeroContent
          label="Прокат для мероприятий"
          title="Оборудование для вашего мероприятия"
          description="Звук, свет, сцена и мебель для свадеб, концертов и корпоративов. Проверенная техника, понятные сроки и онлайн-бронирование."
        />

        <HeroMedia image={heroImage} equipmentCount={equipment.length} />
      </div>
    </section>
  );
}

export default Hero;