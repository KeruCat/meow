import { useParams } from "react-router-dom";
import PageStub from "../Components/PageStub";

function ProductPage() {
  const { id } = useParams();
  return <PageStub eyebrow="Товар" title={`Товар №${id}`} />;
}

export default ProductPage;