function ErrorMessage({ message, onRetry }) {
  return (
    <div className="mx-auto my-10 max-w-md rounded-xl border border-line bg-card p-6 text-center">
      <p className="text-sm text-ink">{message}</p>

      <button
        type="button"
        onClick={onRetry}
        className="mt-4 rounded-md border border-accent px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-page"
      >
        Повторить
      </button>
    </div>
  );
}

export default ErrorMessage;