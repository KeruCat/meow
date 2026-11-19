import RowActions from "../RowActions";

function CategoryTableRow({ category, onEdit, onDelete }) {
  const { name, icon: Icon, positions, total, available, busyPercent } = category;

  return (
    <tr className="border-t border-line transition-colors hover:bg-page/60">
      <td className="px-4 py-3">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-page text-accent">
            <Icon className="h-4 w-4" />
          </span>
          <span className="font-medium text-ink">{name}</span>
        </div>
      </td>

      <td className="px-4 py-3 text-right tabular-nums text-ink-muted">{positions}</td>
      <td className="px-4 py-3 text-right tabular-nums text-ink-muted">{total}</td>
      <td className="px-4 py-3 text-right tabular-nums text-ink">{available}</td>

      <td className="px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="h-1.5 w-24 overflow-hidden rounded-full bg-page">
            <div
              className="h-full rounded-full bg-accent"
              style={{ width: `${busyPercent}%` }}
            ></div>
          </div>
          <span className="w-9 text-right text-xs tabular-nums text-ink-muted">
            {busyPercent}%
          </span>
        </div>
      </td>

      <td className="px-4 py-3">
        <RowActions
          label={name}
          onEdit={() => onEdit(category)}
          onDelete={() => onDelete(category)}
        />
      </td>
    </tr>
  );
}

export default CategoryTableRow;