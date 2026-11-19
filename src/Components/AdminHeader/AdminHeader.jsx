import { Link, } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Brand from "../Header/Brand.jsx";

function AdminHeader() {

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-page/90 backdrop-blur">
      <div className="flex items-center gap-3 px-4 py-3 sm:px-6">
        <Brand name="Эвент-Прокат" />

        <span className="rounded-md border border-accent px-2 py-0.5 text-xs font-bold uppercase tracking-wider text-accent">
          Админ
        </span>

        <Link
          to="/"
          className="ml-auto flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4" />
          На сайт
        </Link>
      </div>
    </header>
  );
}

export default AdminHeader;