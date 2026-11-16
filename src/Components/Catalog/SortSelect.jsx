import { ArrowUpDown } from "lucide-react";

function SortSelect() {
  return (
    <label className="flex items-center gap-2 rounded-lg border border-line bg-card px-3 py-2">
      <ArrowUpDown className="h-4 w-4 text-accent" />
      <select className="bg-card text-sm text-ink outline-none">
        <option>Сначала дешёвые</option>
        <option>Сначала дорогие</option>
        <option>Сначала свободные</option>
        <option>По названию</option>
      </select>
    </label>
  );
}

export default SortSelect;