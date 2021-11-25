import React, { useState } from 'react';
import Product from '../Product/Product';


export default function Products(props){
    console.log(props,'--<<---- soy ptops de products');
    const [charge,setCharge] = useState(false);

    function handleClick(e){
        e.preventDefault();
        setCharge(true);
    }
    if(!charge){
        return (
                <div>
                    {props.products.slice(0,9).map((product,i) => (
                            <Product product={product} key = {i}/>
                    ))}
                    <button onClick={handleClick}>Cargar más</button>
                </div>

        )} else {
        return(
            <div>
                {props.products.map((product,i) => (
                        <Product product={product} key = {i}/>
                 ))}
            </div>
            )}
}