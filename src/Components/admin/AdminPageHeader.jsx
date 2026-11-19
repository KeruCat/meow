function AdminPageHeader({ title, description, children }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div>
        <h1 className="text-2xl font-extrabold uppercase tracking-tight text-ink sm:text-3xl">
          {title}
        </h1>

        {description && <p className="mt-1 text-sm text-ink-muted">{description}</p>}
      </div>

      {children}
    </div>
  );
}

export default AdminPageHeader;