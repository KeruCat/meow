import { useEffect, useState } from "react";
import { getEquipmentCount } from "../api/equipment";

export function useEquipmentCount() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    getEquipmentCount({ signal: controller.signal })
      .then(setCount)
      .catch(() => {});

    return () => controller.abort();
  }, []);

  return count;
}