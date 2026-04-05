export default function Btn({children,type}){
    return (
        <>
            <button
            type={type}
            className="w-full rounded-lg bg-sky-600 px-4 py-3 text-sm font-semibold text-white shadow hover:bg-sky-700 transition"
          >
            {children}
          </button>
        </>
    )
}