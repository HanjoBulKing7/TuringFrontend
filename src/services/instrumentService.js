import api from "./api";

export async function getInstruments(page = 0, size = 3, sortBy = "name", direction = "asc") {
  const res = await api.get("/instruments", {
    params: { page, size, sortBy, direction },
  });
  return res.data.data; // PageResponse: { content, pageNumber, totalPages, lastPage, ... }
}

export async function getInstrumentsByCategory(categoryId, page = 0, size = 3, sortBy = "name", direction = "asc") {
  const res = await api.get(`/instruments/category/${categoryId}`, {
    params: { page, size, sortBy, direction },
  });
  return res.data.data;
}

export async function getCategories() {
  const res = await api.get("/categories", { params: { size: 50 } });
  return res.data.data.content;
}

export async function createInstrument(data) {
  const res = await api.post("/instruments", data);
  return res.data.data;
}

export async function updateInstrument(id, data) {
  const res = await api.put(`/instruments/${id}`, data);
  return res.data.data;
}

export async function deleteInstrument(id) {
  await api.delete(`/instruments/${id}`);
}