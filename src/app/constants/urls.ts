import {environment} from "../../environments/environment";

const {API:baseURL} = environment;

export const urls = {
  users :`${baseURL}/users`,
  todos:`${baseURL}/todos`
}
