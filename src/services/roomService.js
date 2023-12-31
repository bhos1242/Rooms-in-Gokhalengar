// roomService.js
import { httpAxios } from "../httphelper/httphelper";

export async function addVacancy(formData) {
  const result = await httpAxios
    .post("api/add-vacancy", formData)
    .then((response) => response.data);
  return result;
}

export async function getRoomDetails() {
  const result = await httpAxios
    .get("api/get-room-details")
    .then((response) => response.data);
  return result;
}
