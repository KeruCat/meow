import { ArrowUpDown } from "lucide-react";
import { SORT_OPTIONS } from "../../utils/catalog";

function SortSelect({ value, onChange }) {
  return (
    <label className="flex items-center gap-2 rounded-lg border border-line bg-card px-3 py-2">
      <ArrowUpDown className="h-4 w-4 text-accent" />

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-card text-sm text-ink outline-none"
      >
        {SORT_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

export default SortSelect;