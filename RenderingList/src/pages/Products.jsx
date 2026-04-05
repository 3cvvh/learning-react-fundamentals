import ProductsCard from "../components/fragments/ProductsCard"
import Counter from "./Counter"


const data = [
    {
        id:1,
        title:"ci anjing",
        desc:"dqwkodqwidqidj"
    },
    {
        id:2,
        title:"ciikiih",
        desc:"jdqiojdwijdqwioj"
    }
]
const email = localStorage.getItem("email")
const Products = () => {
    return (
        <>
        <h1>{email}</h1>
        <Counter />
{data.map(({title,desc,id}) => (
<>
<br />
    
    <ProductsCard key={id}>
     <ProductsCard.Image />
     <ProductsCard.Body title={title}> {desc}</ProductsCard.Body>
    </ProductsCard>
    <br />
    </>
))
}






    

        </>
    )
}

export default Products