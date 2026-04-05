import FormLogin from "../fragments/FormLogin";

export default function AuthLayout({children,title}){
    return (
        <>
        <div><h1>Halaman {title}</h1><br />
        {children}
        </div>
        </>
    )
}