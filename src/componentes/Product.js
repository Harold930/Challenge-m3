import React  from 'react';

export default function Product(props){

    return (
        <div>
            <img src={props.product.image}  width="180" height="180" alt="Dont found" />
            <br />
            <span>{props.product.name.toUpperCase()}</span>
            <h4>{'R$'+props.product.price}</h4>
            <button>COMPRAR</button>
        </div>
    )
    
}
