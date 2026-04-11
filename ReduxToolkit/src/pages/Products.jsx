import useFetch from "../service/fetchApi"
import ProductCard from "../components/fragments/ProductCard";
import Navbar from "../components/fragments/Navbar";
import { useLogin } from "../hooks/useLogin";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
// import store from "../redux/store";
export default function Products(){
const {data,error,loading} = useFetch("https://dummyjson.com/products")
const cartSelector = useSelector((state) => state.cart.data )
const [totals,setTotal] = useState(0)
// const totalRef = useRef(null)
const [show,setShow] = useState(false)
// const [cart,setCart] = useState([])
// console.log(cartSelector)
const product = data?.products || []
useEffect(() => {
if(cartSelector.length > 0){
  console.log(cartSelector)
const total = cartSelector.reduce((acc,curr) => {
  const p = product.find(item => item.id == curr.id) || 0
  setShow(true)
  return acc + p.price * curr.qty
},0)
setTotal(total)
localStorage.setItem("cart",JSON.stringify(cartSelector))
// console.log(totalRef.current)
}
},[cartSelector,product])
// console.log(cartSelector)
const {username} = useLogin()
if(loading) return "loadingg"
if(error) return "error jir"
console.log(product)
// console.log(product)
return (
  <>
  <div className="min-h-screen bg-slate-100">
        {/* <Navbar Email={Email} /> */}
        <Navbar username={username} ></Navbar>
      {/* body */}
      <main className="mx-auto grid max-w-7xl gap-6 p-4 lg:grid-cols-[2fr_1fr]">
        {/* product grid */}
         <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

       {product.length > 0 ? 
       product.map(item => {
        const {id,title,price,category,images} = item
        return(
          <ProductCard key={id} poster={images[0]} title={title} price={price} id={id} category={category} />
        )
       })
       :
       <><h1>data kosong</h1></>
       }

        </section>
        {/* cart section */}
        <aside className="rounded-xl bg-white p-6 shadow-md">
          <h3 className="text-3xl font-bold text-blue-600">Cart</h3>
          <div className="mt-4 text-sm text-slate-600">
            <div className="grid grid-cols-4 gap-1 border-b pb-2 font-semibold">
              <span>Product</span>
              <span>Price</span>
              <span>Qty</span>
              <span>Total</span>
            </div>
          {cartSelector.length > 0 ?
          cartSelector.map(i => {
            const {id,title,price} =  product.find( item => item.id == i.id) || {}

            return (
                <div key={id} className="grid grid-cols-4 gap-1 border-b py-2">
                <span>{title}</span>
                <span>{price}</span>
                <span>{i.qty}</span>
                 <span>{"$ " + (price*i.qty).toLocaleString("en-US",{minimumFractionDigits:0})}</span> 
              </div>
            )
          })
           :
           <h1>data tida ada</h1>
           }
          </div>
          <div style={{ "display":show ? "block" : "none" }} className="mt-4 border-t pt-3 text-right">
            <p className="text-lg font-bold">Total: {totals.toLocaleString("id-ID",{minimumFractionDigits:0})} </p>
          </div>
        </aside>
      </main>
    </div>
  </>
)
}