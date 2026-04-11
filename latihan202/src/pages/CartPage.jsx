import { useEffect } from "react"
import Navbar from "../components/elements/Navbar/Navbar"
import { useSelector }  from "react-redux";
import { useFetch } from "../hooks/useFetch";
// import Product from "./product";

const CartPage = () => {
    // const [cart,setCart] = useState(() => {
    //     const stored = localStorage.getItem("cart") || []
    //     return stored.length > 0 ? JSON.parse(stored) : []
    // })
    const url = "/products"
    const {data,loading,err,Fetch} = useFetch(url)
    const cartSelector = useSelector(state => state.cart.data)
    useEffect(() => {
        Fetch()
    },[])
    if(loading) return "TUNGGU SEBENTAR..."
    if(err) return err
    const product = data?.products || []
    console.log("DATA",data)
    console.log("PRODUCT",product)
    // const handleCart = (id) => {
    //     const product = cart.filter(c => c.id !== id)
    //     console.log(product)
    // }
    // console.log(data)
    return (
        <div>
        <Navbar></Navbar>
        <h1>test</h1>
        {cartSelector.length <= 0 ? (
            <>
            <h1>product kosong</h1>
            </>
        )
        : cartSelector.map(c => {
            const {category,title,price,id} = product.find(ie => ie.id == c.id) ?? {}
    return (
        <div key={id}>
        <hr />
        <h1>{category}</h1>
        <h1>{title}</h1>
        <h1>{"$ "} {price?.toLocaleString("en-US")}</h1>
        <h1>{c.qty}</h1>
        <h1>{`total $${(c.qty*price).toLocaleString("en-US")}`}</h1>
        {/* <button onClick={() => handleCart(id)}>X</button> */}
        <hr />
        </div>
    )})
    }

        </div>
    )
}

export default CartPage