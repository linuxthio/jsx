import { product } from "./product";
import Card from 'react-bootstrap/Card';

const  Image=()=>{
    return  <Card.Img variant="top" src={product.image} />
}

export  default Image