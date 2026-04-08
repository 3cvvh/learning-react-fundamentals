import axios from "axios"
export const login =  (data,callback) => {
    console.log(data)
axios.post("https://dummyjson.com/auth/login",data,{
    headers:{
        "Content-Type":"application/json",
    },
    
})
.then(res => callback(res))
.catch(err => callback(err))
}