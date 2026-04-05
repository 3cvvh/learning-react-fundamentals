import { Navigate } from "react-router-dom";

export default function Button({children,color,text,callback = false}){
    if(callback == false){
        return (
            <button
            type="submit"
            className={`cinzel px-7 py-3 bg-${color}-500 hover:bg-purple-600 rounded-lg text-sm font-semibold text-${text} tracking-widest transition-all duration-200 hover:-translate-y-0.5 active:scale-95`}
            >
                {children}
            </button>
    )
}
    return (
           <button
            onClick={() => callback()}
            className={`cinzel px-7 py-3 bg-${color}-500 hover:bg-purple-600 rounded-lg text-sm font-semibold text-${text} tracking-widest transition-all duration-200 hover:-translate-y-0.5 active:scale-95`}
            >
                {children}
            </button>
    )
}