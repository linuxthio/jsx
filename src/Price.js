import { product } from "./product";
import { Card } from "react-bootstrap";

export const  Price=()=>{
    return <Card.Title >{product.price} €</Card.Title>
}

export default Price