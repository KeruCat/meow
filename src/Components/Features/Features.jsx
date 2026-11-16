import { Truck, ShieldCheck, CalendarDays } from "lucide-react";
import FeatureItem from "./FeatureItem.jsx";

const features = [
  { icon: Truck, title: "Доставка и монтаж", description: "Привезём, установим и заберём оборудование по городу" },
  { icon: ShieldCheck, title: "Проверенная техника", description: "Тестируем каждую единицу перед выдачей" },
  { icon: CalendarDays, title: "Гибкие сроки", description: "Аренда от 1 суток, продление по согласованию" }
];

function Features() {
  return (
    <section className="mx-auto max-w-6xl px-6 mt-12">
      <div className="grid gap-6 rounded-xl border border-line bg-page p-6 sm:grid-cols-3 sm:p-8">
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