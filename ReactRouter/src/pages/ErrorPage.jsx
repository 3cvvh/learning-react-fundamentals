import {useRouteError} from "react-router-dom"

const ErrorPage = () => {
    const {statusText,message} = useRouteError();
    return (
        <>
        <h1>sorry and fuck you</h1>
        <p>{statusText || message}</p>
        </>
    )
}
export default ErrorPage