import { Loader2 } from "lucide-react";

function Loader() {
  return (
    <div className="flex items-center justify-center gap-3 py-16 text-ink-muted">
      <Loader2 className="h-5 w-5 animate-spin text-accent" />
      Загружаем оборудование…
    </div>
  );
}

export default Loader;