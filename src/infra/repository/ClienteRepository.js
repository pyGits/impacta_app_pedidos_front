import ApiConnection from "./ApiConnection";

class ClienteRepository {
  async delete(cliente) {
    return await ApiConnection.delete(`/cliente/${cliente.id}`);
  }
  async getById(id) {
    return await ApiConnection.get(`/cliente/${id}`);
  }
  async insert(cliente) {
    return await ApiConnection.post("/cliente", cliente);
  }
  async update(cliente) {
    return await ApiConnection.put(`/cliente/${cliente.id}`, cliente);
  }
  async getAll() {
    return await ApiConnection.get(`/cliente`);
  }
}
export default new ClienteRepository();