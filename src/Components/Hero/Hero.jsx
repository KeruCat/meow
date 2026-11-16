import CategoryMenu from "./CategoryMenu";
import HeroContent from "./HeroContent";
import HeroMedia from "./HeroMedia";
import heroImage from "../../assets/hero.png";
import { useEquipmentCount } from "../../hooks/useEquipmentCount";

function Hero() {
  const count = useEquipmentCount();
  return (
    <section className="mx-auto max-w-6xl px-6 pt-6">
      <div className="grid gap-4 lg:grid-cols-[250px_1fr]">
        <CategoryMenu />

        <div className="relative min-h-[400px] overflow-hidden rounded-2xl border border-line">
          <HeroMedia image={heroImage} equipmentCount={count ?? "—"} />
          <HeroContent
            label="Прокат для мероприятий"
            title="Оборудование для"
            accent="вашего события"
            description="Звук, свет, сцена и мебель для свадеб, концертов и корпоративов. Проверенная техника, понятные сроки и онлайн-бронирование."
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;