import { Pencil, Trash2 } from "lucide-react";

function RowActions({ label, onEdit, onDelete }) {
  return (
    <div className="flex justify-end gap-1">
      <button
        type="button"
        onClick={onEdit}
        title="Изменить"
        aria-label={`Изменить: ${label}`}
        className="rounded-md p-2 text-ink-muted transition-colors hover:bg-page hover:text-accent"
      >
        <Pencil className="h-4 w-4" />
      </button>

      <button
        type="button"
        onClick={onDelete}
        title="Удалить"
        aria-label={`Удалить: ${label}`}
        className="rounded-md p-2 text-ink-muted transition-colors hover:bg-page hover:text-red-400"
      >
        <Trash2 className="h-4 w-4" />
      </button>
    </div>
  );
}

export default RowActions;