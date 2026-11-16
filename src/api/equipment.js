const API_URL = "http://localhost:3001";

async function request(url, signal) {
  let response;

  try {
    response = await fetch(url, { signal });
  } catch (error) {
    if (error.name === "AbortError") throw error;
    throw new Error("Не удалось подключиться к серверу. Проверьте, что он запущен.");
  }

  if (!response.ok) {
    throw new Error(`Сервер вернул ошибку ${response.status}`);
  }

  return response;
}

export async function getEquipment({ category, limit, signal } = {}) {
  const params = new URLSearchParams();

  if (category) params.set("category", category);
  if (limit) params.set("_limit", limit);

  const query = params.toString();
  const response = await request(`${API_URL}/equipment${query ? `?${query}` : ""}`, signal);

  return response.json();
}

export async function getEquipmentCount({ category, signal } = {}) {
  const params = new URLSearchParams({ _limit: 0 });

  if (category) params.set("category", category);

  const response = await request(`${API_URL}/equipment?${params}`, signal);
  const total = response.headers.get("X-Total-Count");

  if (total === null) {
    throw new Error("Сервер не вернул общее количество");
  }

  return Number(total);
}