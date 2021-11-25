import React  from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../Redux/actions';
import './product.scss'
export default function Product(props){

    const dispatch = useDispatch();
    
    function handleClick(e){
        e.preventDefault();
        dispatch(addProduct());
    }

    return (
        <div className='product'>
            <img src={props.product.image}  alt="Dont found" />
            <br />
                <span className='fontName'>{props.product.name.toUpperCase()}</span>
                <h4>{'R$'+props.product.price}</h4>
                <button className='buttonBuy' onClick={handleClick}>COMPRAR</button>
        </div>
    )
    
}
