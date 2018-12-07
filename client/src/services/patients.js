import * as baseService from './base';

function all() {
  return baseService.get("/api/patient/user/");
}

function one(id) {
  return baseService.get(`/api/patient/user/${id}`);
}

function insert(data) {
  return baseService.post("/api/patient/user/createpatient", data);
}

function update(id, data) {
  return baseService.put(`/api/patient/user/${id}`, data);
}

function destroy(id) {
  return baseService.destroy(`/api/patient/user/${id}`);
}

export { all, one, insert, update, destroy };