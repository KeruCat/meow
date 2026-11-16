function PageStub({ eyebrow, title }) {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 pt-16">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink-muted">
            {eyebrow}
        </p>

        <h1 className="mt-2 font-bold uppercase tracking-tight text-5xl tracking-tight text-ink">
            {title}
        </h1>
    </section>
  );
}

export default PageStub;