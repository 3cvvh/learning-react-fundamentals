export default function Btn({children}){
    return (
        <>
            <button
            type="submit"
            className="w-full rounded-lg bg-sky-600 px-4 py-3 text-sm font-semibold text-white shadow hover:bg-sky-700 transition"
          >
            {children}
          </button>
        </>
    )
}