import React from 'react';
import { useDispatch } from 'react-redux';
import { sortByPrice } from "../../Redux/actions";
import './order.scss'
export default function Order(){

    const dispatch = useDispatch();

    function handleClick(e){
        e.preventDefault();
        dispatch(sortByPrice(e.target.value));
    }
               
             
    return (
        <div className='order'>
            {/* <br /> */}
            <select >
                <option defaultValue >Ordenar por:</option>
                <option onClick={handleClick} value="asc" >Menor precio</option>
                <option onClick={handleClick} value="desc" >Mayor precio</option>
            </select>
        </div>
    );

}

