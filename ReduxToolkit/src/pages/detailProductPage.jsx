import { useParams } from "react-router-dom";
import useFetch from "../service/fetchApi";


const DetailProductPage = () => {
    const {id} = useParams()
    const {data,error,loading} = useFetch(`https://www.omdbapi.com/?apikey=9d0ed2de&i=${id}`)
    if(loading) return "loading...."
    if(error) return error
    console.log(data)
    return (
        <>
        {data ? 
        (
            <>
            <h1>{data.Title}</h1>
            </>
        )
        :
        <>
        <h1>film tidak ada</h1>
        </>
        }
        {/* <h1>test {}</h1> */}
        </>
    )
}

export default DetailProductPage