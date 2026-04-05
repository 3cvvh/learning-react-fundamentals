// import { l } from "react";
export default function ProductCard({func,image,name,price,id,desc = "lorem ipsum dolor"}){
    return (

        
            <article key={id} className="rounded-xl bg-slate-900 p-4 text-white shadow-lg">
              <img className="h-52 w-full rounded-md object-cover" src={image} alt={name} />
              <div className="mt-4">
                <h2 className="text-2xl font-bold">{name}</h2>
                <p className="mt-2 text-sm text-slate-300">{desc}</p>
                <p className="mt-4 text-xl font-black text-white">{price.toLocaleString("id-ID",{minimumFractionDigits:0})}</p>
                <button onClick={() => func(id)} className="mt-4 rounded-md bg-blue-600 px-4 py-2 font-semibold transition hover:bg-blue-500">
                  Add To Cart
                </button>
              </div>
            </article>
        
    )
}