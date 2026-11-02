import HeroContent from "./HeroContent";
import HeroMedia from "./HeroMedia";
import heroImage from "../../assets/hero.png";

function Hero() {
    return (
        <section>
            <HeroContent 
                label="Новая коллекция • 2026"
                title="Вещи, которые вдохновляют"
                description="Электроника , одежда, товары для дома и спорта -- отобранные вручную
                позиции с честными характеристиками и бысстрой оставкой"
            />
            <HeroMedia
                image={heroImage}
                productCount={9}
            />
        </section>
    );
}

export default Hero;