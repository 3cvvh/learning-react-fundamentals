import Button from "../elements/button/button"
import InputForm from "../elements/InputForm/InputForm"
import login from "../../service/Auth";
import { useState } from "react";
// import { useState } from "react";
const LoginFragment = () => {
    // const [data,setData] = useState({})
    // const [token,setToken] = useState("")
    const [msg,setMsg] = useState("")
    const handdleLogin = async (e) => {
        e.preventDefault()
        // console.log(e.target.Username.value)
        const [username,password] = [e.target.Username.value,e.target.password.value]
      const  obj = {
            username,
            password,
        }
        try{
            const res = await login(obj)
            console.log("login berhasil",res)
            localStorage.setItem("token",res.accessToken)
            window.location.href = "/product"
        }catch(err){
            // console.log("login gagal",err)
            setMsg(err.message)
        }
        
    }
    if(localStorage.getItem("token")){
        window.location.href = "/product"
    }
    return (<>
        {msg && (
            <p className="text-red-500">{msg}</p>
        )}
         <form onSubmit={handdleLogin} method="post">
            <InputForm type={"text"}>Username</InputForm>
            <InputForm type={"password"}>password</InputForm>
            <Button color={"blue"} text={"black"}>login</Button>
            {/* <button type="submit">login</button> */}
        </form>
        </>
    )
}
export default LoginFragment