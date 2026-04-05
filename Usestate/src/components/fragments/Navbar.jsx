import Btn from "../elements/Btn/Btn";

export default function Navbar({Email}){
    return (
        <>
        <header className="bg-blue-600 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <h1 className="text-xl font-bold">ShaulaShoes</h1>
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-white px-3 py-1 text-sm">{Email}</span>
            <Btn color={"bg-red-600"} type={"button"}>logout</Btn>
          </div>
        </div>
      </header></>
    )
}