import { useDispatch } from "react-redux"
import { addToCart } from "../../redux/slices/cartSlice";
export default function ProductCard({poster,title,category,price,id}){
  const dispatch = useDispatch()
    return (

            // <Link to={`/detailProduct/${imdbId}`}> 
            <article key={id} className="rounded-xl bg-slate-900 p-4 text-white shadow-lg">
              <img className="h-52 w-full rounded-md object-cover" src={poster != "N/A" ? poster :  "./img/natsukiChan.webp"} alt={title} />
              <div className="mt-4">
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="mt-2 text-sm text-slate-300">{category}</p>
                <p className="mt-4 text-xl font-black text-white">{price}</p>
                <button onClick={() => dispatch(addToCart({id,qty:1}))} className="mt-4 rounded-md bg-blue-600 px-4 py-2 font-semibold transition hover:bg-blue-500">
                  Add To Cart
                </button>
              </div>
            </article>
            // </Link>
        
    )
}