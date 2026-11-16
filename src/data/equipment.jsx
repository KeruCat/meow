const IMAGES = {
  Звук: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80",
  Свет: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&q=80",
  Сцена: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&q=80",
  Мебель: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80"
};

export const equipment = [
  { id: 9, name: "Радиомикрофон Shure SM58 Wireless", category: "Звук", pricePerDay: 1800, total: 6, available: 4, minDays: 1, image: IMAGES["Звук"] },
  { id: 10, name: "Сабвуфер QSC KS118", category: "Звук", pricePerDay: 3000, total: 4, available: 3, minDays: 1, image: IMAGES["Звук"] },
  { id: 11, name: "Прожектор Moving Head 150 Вт", category: "Свет", pricePerDay: 2200, total: 8, available: 5, minDays: 1, image: IMAGES["Свет"] },
  { id: 12, name: "Лазерное шоу-устройство RGB", category: "Свет", pricePerDay: 2800, total: 3, available: 2, minDays: 1, image: IMAGES["Свет"] },
  { id: 13, name: "Подиум с ограждением 4×2 м", category: "Сцена", pricePerDay: 3500, total: 4, available: 3, minDays: 2, image: IMAGES["Сцена"] },
  { id: 14, name: "Задник сцены 6×3 м", category: "Сцена", pricePerDay: 4500, total: 3, available: 2, minDays: 2, image: IMAGES["Сцена"] },
  { id: 15, name: "Банкетный стол круглый", category: "Мебель", pricePerDay: 500, total: 25, available: 18, minDays: 1, image: IMAGES["Мебель"] },
  { id: 16, name: "Шатёр 5×5 м", category: "Мебель", pricePerDay: 6000, total: 6, available: 3, minDays: 2, image: IMAGES["Мебель"] }
];