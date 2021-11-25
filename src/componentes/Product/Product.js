import React  from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../Redux/actions';

export default function Product(props){

    const dispatch = useDispatch();
    
    function handleClick(e){
        e.preventDefault();
        dispatch(addProduct());
    }

    return (
        <div>
            <img src={props.product.image}  width="180" height="180" alt="Dont found" />
            <br />
            <span>{props.product.name.toUpperCase()}</span>
            <h4>{'R$'+props.product.price}</h4>
            <button onClick={handleClick}>COMPRAR</button>
        </div>
    )
    
}
