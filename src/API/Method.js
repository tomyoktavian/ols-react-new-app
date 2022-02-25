import axios from 'axios'

const API_URL = "https://jsonplaceholder.typicode.com";

export const GET = (path, body) => {
    const promise = new Promise((resolve, reject) => {
        axios.get(`${API_URL}/${path}`, body)
            .then((result) => {
                resolve(result.data);
            }, (err) => {
                reject.apply(err);
            })
    })
    return promise
}

export const POST = (path, body) => {
    const promise = new Promise((resolve, reject) => {
        axios.post(`${API_URL}/${path}`, body)
            .then((result) => {
                resolve(result.data);
            }, (err) => {
                reject.apply(err);
            })
    })
    return promise
}