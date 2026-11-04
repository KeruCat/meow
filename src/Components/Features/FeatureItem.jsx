function FeatureItem({ icon: Icon, title, description }) {
  return (
    <div className="flex gap-3">
      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-emerald-900" />

      <div>
        <p className="text-sm font-semibold text-gray-900">{title}</p>
        <p className="mt-1 text-xs leading-relaxed text-gray-500">
          {description}
        </p>
      </div>
    </div>
  );
}

export default FeatureItem;