import { httpAxios } from "../httphelper/httphelper";

export async function addUser(formData){
    const result = httpAxios.post("api/resister",formData).then((response)=>response.data);
    return result;
}