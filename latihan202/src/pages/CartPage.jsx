import { useEffect, useState } from "react"
import Navbar from "../components/elements/Navbar/Navbar"


const CartPage = () => {
    const [cart,setCart] = useState(() => {
        const stored = localStorage.getItem("cart") || []
        return stored.length > 0 ? JSON.parse(stored) : []
    })
    const handleCart = (id) => {
        const product = cart.filter(c => c.id !== id)
        console.log(product)
    }
    return (
        <div>
        <Navbar></Navbar>
        <h1>test</h1>
        {cart.length <= 0 ? (
            <>
            <h1>product kosong</h1>
            </>
        )
    : cart.map(({category,title,price,id}) => (
        <div>
        <hr />
        <h1>{category}</h1>
        <h1>{title}</h1>
        <h1>{"$ "} {price.toLocaleString("en-US")}</h1>
        <button onClick={() => handleCart(id)}>X</button>
        <hr />
        </div>
    ))
    }

        </div>
    )
}

export default CartPage