import IndexBtn from "../components/elements/button/Index"

const HomePage = () => {
    return (
        <div className="flex items-center justify-center h-screen space-x-4">
            <IndexBtn path={"/register"} color={"bg-blue-500"}>register</IndexBtn>
            <IndexBtn path={"/login"} color={"bg-blue-500"}>login</IndexBtn>
            <IndexBtn path={"/products"} color={"bg-blue-500"}>Products</IndexBtn>
        </div>
    )
}

export default HomePage