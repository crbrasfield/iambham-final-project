import * as baseService from './base';

function all() {
  return baseService.get("/api/doctor/user");
}

function one(id) {
  return baseService.get(`/api/doctor/user/${id}`);
}

function insert(data) {
  return baseService.post("/api/doctor/createdoctor/user", data);
}

function update(id, data) {
  return baseService.put(`/api/doctor/user/${id}`, data);
}

function destroy(id) {
  return baseService.destroy(`/api/doctor/user/${id}`);
}

export { all, one, insert, update, destroy };