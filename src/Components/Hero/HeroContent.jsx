import HeroActions from "./HeroActions";

function HeroContent({ label, title, accent, description }) {
  return (
    <div className="relative flex min-h-[400px] max-w-xl flex-col justify-center p-8 lg:p-12">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
        {label}
      </p>

      <h1 className="mt-3 text-4xl font-extrabold uppercase leading-tight tracking-tight text-ink lg:text-5xl">
        {title} <span className="text-accent">{accent}</span>
      </h1>

      <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-muted lg:text-base">
        {description}
      </p>

      <HeroActions />
    </div>
  );
}

export default HeroContent;