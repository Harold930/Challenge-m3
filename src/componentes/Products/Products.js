import React, { useState } from 'react';
import Product from '../Product/Product';
import './products.scss'


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
            <div className='grid'>
                    {props.products.slice(0,9).map((product,i) => (
                            <Product product={product} key = {i}/>
                    ))}
            </div>
                    <button className='cargarButton' onClick={handleClick}>CARGAR MÁS</button>
            </div>
        )} else {
        return(
            <div className='grid'>
                {props.products.map((product,i) => (
                        <Product product={product} key = {i}/>
                 ))}
            </div>
            )}
}