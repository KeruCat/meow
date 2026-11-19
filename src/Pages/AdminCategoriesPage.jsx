import { useMemo, useState } from "react";
import { Plus } from "lucide-react";
import AdminPageHeader from "../Components/admin/AdminPageHeader";
import CategoryTable from "../Components/admin/Categories/CategoryTable";
import SearchField from "../Components/Catalog/SearchField";
import Loader from "../Components/Status/Loader";
import ErrorMessage from "../Components/Status/ErrorMessage";
import { useEquipment } from "../hooks/useEquipment";
import { categories } from "../data/categories";
import { getCategoryStats } from "../utils/categoryStats";

function AdminCategoriesPage() {
  const { equipment, loading, error, reload } = useEquipment();
  const [search, setSearch] = useState("");

  const stats = useMemo(() => getCategoryStats(categories, equipment), [equipment]);

  const visible = useMemo(() => {
    const query = search.trim().toLowerCase();
    return stats.filter(({ name }) => name.toLowerCase().includes(query));
  }, [stats, search]);

  function handleAdd() {}
  function handleEdit() {}
  function handleDelete() {}

  return (
    <div>
      <AdminPageHeader
        title="Категории"
        description="Управление категориями оборудования и их загрузкой."
      >
        <button
          type="button"
          onClick={handleAdd}
          className="flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-bold text-page transition-colors hover:bg-accent-dim"
        >
          <Plus className="h-4 w-4" />
          Добавить категорию
        </button>
      </AdminPageHeader>

      <div className="mt-6 max-w-sm">
        <SearchField
          value={search}
          onChange={setSearch}
          placeholder="Поиск по названию категории"
        />
      </div>

      <div className="mt-4">
        {loading && <Loader />}
        {error && <ErrorMessage message={error} onRetry={reload} />}
        {!loading && !error && (
          <CategoryTable
            categories={visible}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
      </div>
    </div>
  );
}

export default AdminCategoriesPage;