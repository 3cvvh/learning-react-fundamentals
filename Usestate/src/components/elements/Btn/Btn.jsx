export default function Btn({children,type,color}){
    return (
        <>
            <button
            type={type}
            className={`w-full rounded-lg ${color} px-4 py-3 text-sm font-semibold text-white shadow hover:bg-sky-700 transition`}
          >
            {children}
          </button>
        </>
    )
}