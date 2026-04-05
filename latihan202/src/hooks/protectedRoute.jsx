import { jwtDecode } from "jwt-decode"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

// ProtectedRoute.jsx
const ProtectedRoute = () => {
  const token = localStorage.getItem("token")
  const [data,setData] = useState("")
  const navigate = useNavigate()
  useEffect(() => {
    if(!token) return  navigate("/login",{replace:true})
    setData(jwtDecode(token))
  },[token])
  return data
}
export default ProtectedRoute