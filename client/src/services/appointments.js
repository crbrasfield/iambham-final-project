import * as baseService from './base';

function all() {
  return baseService.get(`/api/appointments`);
}

function one(id) {
  return baseService.get(`/api/appointments/${id}`);
}

function insert(data) {
  return baseService.post("/api/appointments", data);
}

function update(id, data) {
  return baseService.put(`/api/appointments/${id}`, data);
}

function destroy(id) {
  return baseService.destroy(`/api/appointments/${id}`);
}

export { all, one, insert, update, destroy };