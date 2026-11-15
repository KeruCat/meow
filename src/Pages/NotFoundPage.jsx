import { Link } from "react-router-dom";
import PageStub from "../Components/PageStub.jsx";

function NotFoundPage() {
  return (
    <>
      <PageStub eyebrow="Ошибка 404" title="Страница не найдена" />
      <div className="mx-auto max-w-6xl px-6 pb-20">
        <Link to="/" className="text-sm font-medium text-emerald-900 hover:underline">
          Вернуться на главную
        </Link>
      </div>
    </>
  );
}

export default NotFoundPage;