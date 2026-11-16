function FeatureItem({ icon: Icon, title, description }) {
  return (
    <div className="flex gap-3">
      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />

      <div>
        <p className="text-sm font-semibold text-ink">{title}</p>
        <p className="mt-1 text-xs leading-relaxed text-ink-muted">
          {description}
        </p>
      </div>
    </div>
  );
}

export default FeatureItem;