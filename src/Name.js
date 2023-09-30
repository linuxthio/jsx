import { product } from "./product";
import { Card } from "react-bootstrap";

const  Name=(props)=>{
    return <Card.Title>{product.name}</Card.Title>
    // return <Card.Title>{product.name} child : {props.children} props.children</Card.Title>
}


export default Name