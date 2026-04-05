import { useEffect } from "react"
import Card from "../components/elements/card/card"
import Navbar from "../components/elements/Navbar/Navbar"
import ProtectedRoute from "../hooks/protectedRoute"
import { useFetch } from "../hooks/useFetch"
// import { useAuth } from "../hooks/useAuth"
const Product = () => {
  const token = ProtectedRoute ? ProtectedRoute() : "bye"
  const url = "/products"
  const {data,loading,err,Fetch} = useFetch(url)
  // const [product,setProduct] = useState([])
  useEffect(() => {
    Fetch()
  },[url])
 
  if(loading) return "loading.."
  // console.log(err)
  if(err) return err
  const product = data?.products || []
  // console.log(token.username)
  // useAuth()
  // const {category,description,price,title} = data.products
  console.log(product)
  
  return (
    <div className="min-h-screen bg-[#0a0610] m-0 p-0">
      <Navbar username={token.username} />
<br />

<div className="flex gap-4 flex-wrap">
   {product.map(r => (
      <>
      {/* {const {category} = r} */}
      <Card category={r.category} price={r.price} title={r.title}>{r.description}</Card>
      </>
    ))}
    </div>
    </div>
  )
}

export default Product