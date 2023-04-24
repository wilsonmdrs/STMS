import axios from "axios";

const baseURL = "http://localhost:5000";

export interface TagItem {
  id?: string;
  label: string;
}

export const api = {
  async getRecent() {
    const response = await axios.get(`${baseURL}/recent`);
    return response.data;
  },
  async get(searchTerm: string, page: number) {
    const response = await axios.get(
      `${baseURL}/tag?label=${searchTerm}&page=${page ? page : 1}&limit=30`
    );
    return response.data;
  },
  async post(tag: { label: string }) {
    const response = await axios.post(`${baseURL}/tag`, tag);
    return response;
  },
  async put(tag: { id: string; label: string }) {
    const response = await axios.put(`${baseURL}/tag/${tag.id}`, {
      label: tag.label,
    });
    return response;
  },
  async delete(id: string) {
    const response = await axios.delete(`${baseURL}/tag/${id}`);
    return response;
  },
};
