import axios from "axios";
import { useEffect,useState } from "react";

const useFetch = (url) => {
    const [data,setData] = useState(null)
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try{
            const {data} = await axios.get(url)
            setData(data)
            }catch(err){
                setError(err.message)
            }finally{
                setLoading(false)
            }
        }
        fetchData()
    },[url])
    return {data,error,loading}
}

export default useFetch