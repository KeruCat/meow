import { Truck, ShieldCheck, RotateCcw } from "lucide-react";
import FeatureItem from "./FeatureItem";

const features = [
  {
    icon: Truck,
    title: "Доставка 1–3 дня",
    description: "По всей России, бесплатно от 5 000 ₽"
  },
  {
    icon: ShieldCheck,
    title: "Гарантия качества",
    description: "Проверяем каждую партию товара"
  },
  {
    icon: RotateCcw,
    title: "Возврат 30 дней",
    description: "Без вопросов и лишних формальностей"
  }
];

function Features() {
  return (
    <section>
      <div>
        {features.map((feature) => (
          <FeatureItem
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Features;