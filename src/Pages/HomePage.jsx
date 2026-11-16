import Hero from "../Components/Hero/Hero";
import Features from "../Components/Features/Features";
import CategoryRows from "../Components/Equipment/CategoryRows";
import Loader from "../Components/Status/Loader";
import ErrorMessage from "../Components/Status/ErrorMessage";
import { useEquipment } from "../hooks/useEquipment";

function HomePage() {
  const { equipment, loading, error, reload } = useEquipment();

  return (
    <>
      <Hero />
      <Features />

      {loading && <Loader />}
      {error && <ErrorMessage message={error} onRetry={reload} />}
      {!loading && !error && <CategoryRows equipment={equipment} />}
    </>
  );
}

export default HomePage;