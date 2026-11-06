import Brand from "../Header/Brand";
import { ArrowLeft } from "lucide-react";
function AdminHeader() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <div >
          <Brand name="Витрина" />
        </div>
        <span>
            Админ
        </span>
        <span>
            Dashboard
        </span>
        <a href="/">
            <ArrowLeft />
            в магазин
        </a>
      </div>
    </header>
  );
}

export default AdminHeader;