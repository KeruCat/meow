function FeatureItem({ icon: Icon, title, description }) {
  return (
    <div>
      <Icon />

      <div>
        <p>{title}</p>
        <p>
          {description}
        </p>
      </div>
    </div>
  );
}

export default FeatureItem;