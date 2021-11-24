import React from 'react';
import Product from './Product';


export default function Products(props){
    console.log(props,'--<<---- soy ptops de products');


        return (
            <div>
            {props.products.map((product,i) => (
                    <Product product={product} key = {i}/>
            ))}
        </div>
        )
    

}