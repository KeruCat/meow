import CategoryTableRow from "./CategoryTableRow";

const columns = [
  { label: "Категория", align: "text-left" },
  { label: "Позиций", align: "text-right" },
  { label: "Всего единиц", align: "text-right" },
  { label: "Свободно", align: "text-right" },
  { label: "Загрузка", align: "text-left" },
  { label: "Действия", align: "text-right" }
];

function CategoryTable({ categories, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-line bg-card">
      <table className="w-full min-w-[680px] text-sm">
        <thead className="text-xs uppercase tracking-wider text-ink-muted">
          <tr>
            {columns.map(({ label, align }) => (
              <th key={label} scope="col" className={`px-4 py-3 font-medium ${align}`}>
                {label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {categories.length === 0 ? (
            <tr className="border-t border-line">
              <td colSpan={columns.length} className="px-4 py-10 text-center text-ink-muted">
                Категории не найдены
              </td>
            </tr>
          ) : (
            categories.map((category) => (
              <CategoryTableRow
                key={category.name}
                category={category}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CategoryTable;