import {  useState } from "react"
import  api  from "../service/api"
export const useFetch = (url) => {
    const [loading,setLoading] = useState(false)
    const [data,setData] = useState(null)
    const [err,setErr] = useState(null)
        const Fetch = async () => {
            setLoading(true)
            try{
                const {data} = await api.get(url)
                console.log("dariUseFetch:",data)
                setData(data)
            }catch(error){
                setErr(error)
                return
            }finally{
                setLoading(false)
            }
        }
    return {data,loading,err,Fetch}
}