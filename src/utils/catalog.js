export const DEFAULT_FILTERS = {
  search: "",
  categories: [],
  priceMin: "",
  priceMax: "",
  onlyAvailable: false,
  maxDays: ""
};

export const SORT_OPTIONS = [
  { value: "default", label: "По умолчанию" },
  { value: "price-asc", label: "Сначала дешёвые" },
  { value: "price-desc", label: "Сначала дорогие" },
  { value: "available-desc", label: "Больше свободных" },
  { value: "name-asc", label: "По названию (А–Я)" }
];

function normalize(text) {
  return text.toLowerCase().replaceAll("ё", "е");
}

export function filterEquipment(list, filters) {
  const words = normalize(filters.search).split(/\s+/).filter(Boolean);
  const minPrice = filters.priceMin === "" ? null : Number(filters.priceMin);
  const maxPrice = filters.priceMax === "" ? null : Number(filters.priceMax);
  const days = filters.maxDays === "" ? null : Number(filters.maxDays);

  return list.filter((item) => {
    if (words.length > 0) {
      const text = normalize(`${item.name} ${item.category}`);
      if (!words.every((word) => text.includes(word))) return false;
    }

    if (filters.categories.length > 0 && !filters.categories.includes(item.category)) {
      return false;
    }

    if (minPrice !== null && item.pricePerDay < minPrice) return false;
    if (maxPrice !== null && item.pricePerDay > maxPrice) return false;
    if (filters.onlyAvailable && item.available === 0) return false;
    if (days !== null && item.minDays > days) return false;

    return true;
  });
}

export function sortEquipment(list, sort) {
  switch (sort) {
    case "price-asc":
      return list.sort((a, b) => a.pricePerDay - b.pricePerDay);
    case "price-desc":
      return list.sort((a, b) => b.pricePerDay - a.pricePerDay);
    case "available-desc":
      return list.sort((a, b) => b.available - a.available);
    case "name-asc":
      return list.sort((a, b) => a.name.localeCompare(b.name, "ru"));
    default:
      return list;
  }
}

export function countActiveFilters(filters) {
  return [
    filters.search.trim() !== "",
    filters.categories.length > 0,
    filters.priceMin !== "" || filters.priceMax !== "",
    filters.onlyAvailable,
    filters.maxDays !== ""
  ].filter(Boolean).length;
}