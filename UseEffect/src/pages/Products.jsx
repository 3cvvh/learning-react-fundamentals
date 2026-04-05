// import { useMemo } from 'react';

import { useEffect, useState } from "react";
import Navbar from "../components/fragments/Navbar";
import ProductCard from "../components/fragments/ProductCard";
import Counter from "./Counter";
const products = [
  {
    id: 1, name: 'Felgrim', price: 1000000, desc: 'Lorem ipsum dolor sit amet...',
    image: './img/felgrim.webp'
  },
  {
    id: 2, name: 'Natsuki Subaru glutony route', price: 500000, desc: 'Lorem ipsum dolor sit amet...',
    image: './img/natsukiChan.webp'
  },
  {
    id: 3, name: 'Shaula', price: 2000000, desc: 'Ini adalah sepatu baru dari brand adadong.',
    image: './img/shaula.jpeg'
  },
];

const Email = localStorage.getItem("email")
const formatRp = (value) =>
  'Rp ' + value.toLocaleString('id-ID', { minimumFractionDigits: 0 });

export default function Products() {
  const [cart,setCart] = useState([])
  const [total,setTotal] = useState(0)
  console.log(total)
  // console.log(cart)
  useEffect(() => {
    setCart([])
  },[])
  useEffect(() => {
    const sum = cart.reduce((acc,cur) => {
      return acc + cur.total
    },0)
    setTotal(sum)
  },[cart])
const handdleCart = (id) => {
  const {name,price} = products.find(p => p.id == id);
  const test = cart.find(c => id == c.id);
  console.log(test)
  if(test){
    const total = test ? (test.qty + 1) * price : test.total
    setCart(cart.map(item => {
        if(item.id == id){
          return {...test,qty:test.qty + 1,total:total}
        }
        return item
    }))
  }else if(!test){
    console.log("didqi")
    setCart([...cart,{
      name,price,qty:1,id:id,total: price*1
    }])
  }
}
  return (
    <div className="min-h-screen bg-slate-100">
        <Navbar Email={Email} />
      {/* body */}
      <main className="mx-auto grid max-w-7xl gap-6 p-4 lg:grid-cols-[2fr_1fr]">
        {/* product grid */}
         <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

       {products.map(produk => (
         <ProductCard func={handdleCart} price={produk.price} id={produk.id} desc={produk.desc} image={produk.image} name={produk.name}  />
        ))}

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
            {cart.map(c => (
              <div key={c.id} className="grid grid-cols-4 gap-1 border-b py-2">
                <span>{c.name}</span>
                <span>{formatRp(c.price)}</span>
                <span>{c.qty}</span>
                <span>{"Rp "+ c.total.toLocaleString("id-ID",{minimumFractionDigits:0})}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 border-t pt-3 text-right">
            <p className="text-lg font-bold">Total: {total.toLocaleString("id-ID",{minimumFractionDigits:0})} </p>
            <Counter></Counter>
          </div>
        </aside>
      </main>
    </div>
  );
}