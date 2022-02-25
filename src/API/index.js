import { 
    POST,
    GET 
} from "./Method";

export const API = {
    authUser: (userId) => GET(`users/${userId}`),
    createPost: (body) => POST(`posts`, body),
}