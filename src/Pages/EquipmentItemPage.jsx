import { useParams } from "react-router-dom";
import PageStub from "../Components/PageStub.jsx";

function ProductPage() {
  const { id } = useParams();
  return <PageStub eyebrow="Оборудование" title={`Позиция №${id}`} />;
}

export default ProductPage;