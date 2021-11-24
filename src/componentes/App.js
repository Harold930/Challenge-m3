import React, { useState,useEffect } from "react";
import { filterByColor, filterByPrice, filterBySize, getProducts, sortByPrice } from "../Redux/actions";
import { useDispatch, useSelector} from 'react-redux'

export default  function App(){

    const dispatch = useDispatch();
    const products = useSelector(state => state);
    // const allProducts = useSelector(state => state.allProducts);


    useEffect(() => {
        dispatch(getProducts());
    },[dispatch])

    console.log(products,'<<------sisa soy yo el allProducts');

    function handleClick(e){
        console.log(e.target.name,'----nombre del boton');
        e.preventDefault();
        switch(e.target.name){
            case 'byColor':{
                dispatch(filterByColor('amarelo'));
            }; break;
            case 'bySize':{
                dispatch(filterBySize(['U','46']));
            }; break; 
            case 'byPrice':{
                dispatch(filterByPrice(parseInt(e.target.value)));
            }; break; 
            case 'SortPrice':{
                dispatch(sortByPrice(e.target.value));
            }; break; 
        default: return products;
        }
    }
    console.log(products,'<<------sisa soy yo el products');

    return (
        <div>
        <h2>HOLAAA DANNA ESTOY SIRVIENDO</h2>
        <button onClick={handleClick} name='byColor' >filter by color</button>
        <button onClick={handleClick} name='bySize' >filter by by Size</button>
        <button onClick={handleClick} name='byPrice' value='2'>filter by by price</button>
        <button onClick={handleClick} name='SortPrice' value='asc'>sort by by price</button>





        </div>
    );
}