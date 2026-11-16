import { useEffect, useState } from "react";
import { getEquipment } from "../api/equipment";

export function useEquipment({ category, limit } = {}) {
  const [equipment, setEquipment] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    getEquipment({ category, limit, signal: controller.signal })
      .then(setEquipment)
      .catch((err) => {
        if (err.name !== "AbortError") setError(err.message);
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });

    return () => controller.abort();
  }, [category, limit, attempt]);

  function reload() {
    setLoading(true);
    setError(null);
    setAttempt((n) => n + 1);
  }

  return { equipment, loading, error, reload };
}