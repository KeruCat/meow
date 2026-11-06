
function CartAction({ count }) {
  return (
    <a
      href="/cart"
      type="button"
      className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50"
    >
      Корзина ({count})
    </a>
  );
}

export default CartAction;
