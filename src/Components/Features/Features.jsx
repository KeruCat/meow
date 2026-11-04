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
    <section className="mx-auto max-w-6xl px-6 pb-20 pt-16">
      <div className="grid gap-6 rounded-xl border border-gray-200 bg-white p-6 sm:grid-cols-3 sm:p-8">
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