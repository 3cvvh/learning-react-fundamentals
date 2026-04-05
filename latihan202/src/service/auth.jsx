import api from "./api";

const login = async ({username,password}) => {
try{
const res = await api.post("/auth/login",{username,password})
return res.data
}catch(err){
throw err.response?.data ?? err.message
}
}

export default login