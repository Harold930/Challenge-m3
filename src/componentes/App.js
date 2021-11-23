import React, { useState,useEffect } from "react";
import { filterByColor, getProducts } from "../Redux/actions";
import { useDispatch, useSelector} from 'react-redux'
export default  function App(){
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);
    useEffect(() => {
        dispatch(getProducts());
    },[])

    console.log(products,'<<------sisa soy yo');

    function handleClick(e){
        switch(e.targe.name){
            case 'byColor':{
                dispatch(filterByColor('amarelo'));
            }
            case 'bySize':{

            }

        }
    }
    console.log(products,'<<------sisa soy yo el del color filtrado');

    return (
        <div>
        <h2>HOLAAA DANNA ESTOY SIRVIENDO</h2>
        <button onClick={handleClick} name='byColor' >filter by color</button>
        <button onClick={handleClick}>filter by color</button>

        </div>
    );
}