import { Link } from "react-router-dom";

export default function LayoutsAuth({children,type}){
    return (
        <> 
        
        <main className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-slate-50 flex items-center justify-center px-4">
             <div className="w-full max-w-md rounded-2xl bg-white/80 p-8 shadow-xl ring-1 ring-slate-200 backdrop-blur">
        <h1 className="text-2xl font-semibold text-slate-900">{type}</h1>
        <p className="mt-2 text-sm text-slate-600">{type == "login" ? "masukan password dan email kamu" : "daftarkan sekarang!!"}</p>
            {children}
            <p className="mt-6 text-center text-sm text-slate-600">
          {type == "login" ? "belum punya akun? " : "sudah punya akun? "}

          {type == "login" &&(
             <Link to={"/register"}><span className="font-semibold text-sky-600">Daftar</span></Link>
          )}
          {type == "register" &&(
             <Link to={"/login"}><span className="font-semibold text-sky-600">masuk</span></Link>
          )}
        </p>
            </div>
             </main> 
             </>
    )
}