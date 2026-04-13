import api from "./api";

export async function fetchPlantations() {
  const { data } = await api.get("/api/plantations/all");
  return data;
}

export async function fetchListings() {
  const { data } = await api.get("/api/marketplace/listings");
  return data;
}

export async function fetchAllListings() {
  const { data } = await api.get("/api/marketplace/all-listings");
  return data;
}

export async function fetchCredits() {
  const { data } = await api.get("/api/carbon/credits");
  return data;
}

export async function approvePlantation(id) {
  const { data } = await api.put(`/api/plantations/${id}/approve`);
  return data;
}

export async function rejectPlantation(id) {
  const { data } = await api.put(`/api/plantations/${id}/reject`);
  return data;
}

export async function buyListing(id, txHash) {
  const { data } = await api.post(`/api/marketplace/buy/${id}`, { txHash });
  return data;
}
