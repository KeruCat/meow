function FilterGroup({ title, children }) {
  return (
    <div className="border-b border-line py-5 first:pt-0">
      <p className="text-sm font-semibold text-ink">{title}</p>
      <div className="mt-3 space-y-2.5">{children}</div>
    </div>
  );
}

export default FilterGroup;