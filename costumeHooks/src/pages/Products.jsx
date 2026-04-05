import useFetch from "../service/fetchApi"
import ProductCard from "../components/fragments/ProductCard";
import { Decode } from "../service/jwtDecode";
import Navbar from "../components/fragments/Navbar";
import { useLogin } from "../hooks/useLogin";
export default function Products(){
// const {username} = Decode()
// if(username == null){
//   window.location.href = "/login"
// }
const {data,error,loading} = useFetch("https://www.omdbapi.com/?apikey=9d0ed2de&s=frieren")
const {username} = useLogin()
// console.log(user)
if(loading) return "loadingg"
if(error) return "error jir"

return (
  <>
  <div className="min-h-screen bg-slate-100">
        {/* <Navbar Email={Email} /> */}
        <Navbar username={username} ></Navbar>
      {/* body */}
      <main className="mx-auto grid max-w-7xl gap-6 p-4 lg:grid-cols-[2fr_1fr]">
        {/* product grid */}
         <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

       {data && data.Search ? data.Search.map(produk => (
         <ProductCard  title={produk.Title} poster={produk.Poster} type={produk.Type} imdbId={produk.imdbId} />
        )): "data tidak ditemukan"}

        </section>
        {/* cart section */}
        {/* <aside className="rounded-xl bg-white p-6 shadow-md">
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
          <div ref={totalRef} className="mt-4 border-t pt-3 text-right">
            <p className="text-lg font-bold">Total: {total.toLocaleString("id-ID",{minimumFractionDigits:0})} </p>
            <Counter></Counter>
          </div>
        </aside> */}
      </main>
    </div>
  </>
)
}