import { Link } from "react-router-dom";
export default function Links({color,children,path}){
    return (
        <><Link to={path}  
        className={`inline-flex items-center justify-center rounded-md border border-slate-200 ${color} px-6 py-3 text-slate-700 font-medium shadow-sm hover:bg-slate-50 transition`}>
            {children}
            </Link></>
    )
}