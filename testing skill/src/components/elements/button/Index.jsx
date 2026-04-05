import { Link } from "react-router-dom"

export default function IndexBtn({children,color,path}){
    return (    
   <RenderingConditional color={color} path={path}>{children}</RenderingConditional>
    )
}
const RenderingConditional = ({children,color,path}) => {
    if(path){
    return (
    <Link to={path}>
    <><button class={`px-4 py-2 ${color} text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75`}>
    {children}
    </button></>
    </Link>
        )
    }else{
    return (
            <> <button type="submit" class={`px-4 py-2 ${color} text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75`}>
    {children}
    </button></>
        )
    }
}