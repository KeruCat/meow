const IMAGES = {
  Звук: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80",
  Свет: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&q=80",
  Сцена: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&q=80",
  Мебель: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80"
};

export const equipment = [
  { id: 1, name: "Акустическая система JBL PRX 815", category: "Звук", pricePerDay: 3500, total: 8, available: 5, minDays: 1, image: IMAGES["Звук"] },
  { id: 2, name: "Микшерный пульт Yamaha MG16", category: "Звук", pricePerDay: 2500, total: 3, available: 2, minDays: 1, image: IMAGES["Звук"] },
  { id: 3, name: "Световой прибор LED PAR 18x10", category: "Свет", pricePerDay: 700, total: 24, available: 16, minDays: 1, image: IMAGES["Свет"] },
  { id: 4, name: "Дым-машина 1500 Вт", category: "Свет", pricePerDay: 900, total: 4, available: 0, minDays: 1, image: IMAGES["Свет"] },
  { id: 5, name: "Сценический подиум 2x1 м", category: "Сцена", pricePerDay: 1200, total: 20, available: 12, minDays: 2, image: IMAGES["Сцена"] },
  { id: 6, name: "Ферма для света, 3 м", category: "Сцена", pricePerDay: 1500, total: 10, available: 6, minDays: 2, image: IMAGES["Сцена"] },
  { id: 7, name: "Фуршетный стол", category: "Мебель", pricePerDay: 400, total: 30, available: 22, minDays: 1, image: IMAGES["Мебель"] },
  { id: 8, name: "Стул Chiavari", category: "Мебель", pricePerDay: 150, total: 200, available: 140, minDays: 1, image: IMAGES["Мебель"] }
];