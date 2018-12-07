import * as baseService from './base';

function all() {
  return baseService.get("/api/insurances");
}

function one(id) {
  return baseService.get(`/api/insurances/${id}`);
}

function insert(data) {
  return baseService.post("/api/insurances", data);
}

function update(id, data) {
  return baseService.put(`/api/insurances/${id}`, data);
}

function destroy(id) {
  return baseService.destroy(`/api/insurances/${id}`);
}

export { all, one, insert, update, destroy };