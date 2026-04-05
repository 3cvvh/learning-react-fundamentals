import axios from "axios";

const api = axios.create({
        baseURL:"https://dummyjson.com/",
        headers:{
            "Content-Type":"application/json"
        },
        timeout:10000
    })

// api.interceptors.request.use(
//     config => {
//         const token = localStorage.getItem(token)
//         if(token) console.log(token)
//         return config
//     },
//     error => Promise.reject(error)
// )

export default api