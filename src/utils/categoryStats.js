export function getCategoryStats(categories, equipment) {
  return categories.map(({ name, icon }) => {
    const items = equipment.filter((item) => item.category === name);

    const total = items.reduce((sum, item) => sum + item.total, 0);
    const available = items.reduce((sum, item) => sum + item.available, 0);
    const busyPercent = total === 0 ? 0 : Math.round(((total - available) / total) * 100);

    return { name, icon, positions: items.length, total, available, busyPercent };
  });
}