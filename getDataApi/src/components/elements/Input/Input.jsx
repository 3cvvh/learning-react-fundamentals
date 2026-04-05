import { forwardRef } from "react"


const Input = forwardRef(({type,placeholder,name},ref) => {
    return (
        <>
          <input
            ref={ref}
            name={name}
              type={type}
              placeholder={placeholder}
              className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
            />
        </>
    )
})

export default Input