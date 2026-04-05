// import { l } from "react";
export default function ProductCard({poster,title,type,year,imdbId,func}){
    return (

        
            <article key={imdbId} className="rounded-xl bg-slate-900 p-4 text-white shadow-lg">
              <img className="h-52 w-full rounded-md object-cover" src={poster != "N/A" ? poster :  "./img/natsukiChan.webp"} alt={title} />
              <div className="mt-4">
                <h2 className="text-2xl font-bold">{name}</h2>
                <p className="mt-2 text-sm text-slate-300">{type}</p>
                <p className="mt-4 text-xl font-black text-white">{year}</p>
                <button onClick={() => func(imdbId)} className="mt-4 rounded-md bg-blue-600 px-4 py-2 font-semibold transition hover:bg-blue-500">
                  Add To Cart
                </button>
              </div>
            </article>
        
    )
}