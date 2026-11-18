import { useEffect } from "react";
import { X } from "lucide-react";

function FilterDrawer({ open, onClose, resultsCount, children }) {
  useEffect(() => {
    if (!open) return;

    function handleKeyDown(e) {
      if (e.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-40 lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Фильтры"
    >
      <div className="absolute inset-0 bg-black/70" onClick={onClose}></div>

      <div className="absolute inset-y-0 left-0 flex w-[86%] max-w-sm flex-col bg-page">
        <div className="flex justify-end border-b border-line px-4 py-3">
          <button
            type="button"
            onClick={onClose}
            aria-label="Закрыть фильтры"
            className="rounded p-1 text-ink-muted transition-colors hover:text-accent"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">{children}</div>

        <div className="border-t border-line p-4">
          <button
            type="button"
            onClick={onClose}
            className="w-full rounded-lg bg-accent py-2.5 text-sm font-bold text-page transition-colors hover:bg-accent-dim"
          >
            Показать: {resultsCount}
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilterDrawer;