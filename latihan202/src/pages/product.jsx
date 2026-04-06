import { useEffect, useState } from "react"
import Card from "../components/elements/card/card"
import Navbar from "../components/elements/Navbar/Navbar"
import ProtectedRoute from "../hooks/protectedRoute"
import { useFetch } from "../hooks/useFetch"
// import { useAuth } from "../hooks/useAuth"
const Product = () => {
  const token = ProtectedRoute ? ProtectedRoute() : "bye"
  const url = "/products"
  const {data,loading,err,Fetch} = useFetch(url)
  const [cart,setCart] = useState([])
  // const [product,setProduct] = useState([])
  useEffect(() => {
    Fetch()
  },[url])
 
  useEffect(() => {
    if(cart.length > 0) localStorage.setItem("cart",JSON.stringify(cart))
  },[cart])
  if(loading) return "loading.."
  // console.log(err)
  if(err) return err
  const product = data?.products || []
  // console.log(token.username)
  // useAuth()
  // const {category,description,price,title} = data.products
  // console.log(product)
  const handleCart = (ids) => {
    const {title,price,category} = product.find(d => d.id == ids )
    const ada = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [] 
    console.log(ada)
    console.log(cart)
    const check = ada.find((a) => a.id == ids)
    if(check){
      setCart(ada.map(item => {
        if(item.id == ids){
          return {...check,qty: check.qty+1}
        }
        return item
      }))
    }else{
      setCart([...cart,{id:ids,title,price,category,qty:1}])
    }
  }
  return (
    <div className="min-h-screen bg-[#0a0610] m-0 p-0">
      <Navbar username={token.username} />
<br />

<div className="flex gap-4 flex-wrap">
   {product.map(({id,category,title,price,description}) => (
      <Card key={id} id={id} handle={handleCart} category={category} price={price} title={title}>{description}</Card>
    ))}
    </div>
    </div>
  )
}

export default Product