import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterByColor, filterByPrice, filterBySize } from "../../Redux/actions";
import './filter.scss'
export default function Filters(){

    const dispatch = useDispatch();
    
    const sizes = ['M','G','40','44','GG','U','46','38','36','P'];
    const colors = 
    [
        {sp:'Amarillo',por:'amarelo'},
        {sp:'Gris', por:'cinza'},
        {sp:'Negro', por:'preto'},
        {sp:'Blanco', por:'branco'},
        {sp:'Rosado', por:'rosa'},
        {sp:'Naranja', por:'laranja'}
    ]
    const price = 
    [
        {opc:1, msg: 'Desde R$0 hasta R$50'},
        {opc:2, msg: 'Desde R$50 hasta R$150'},
        {opc:3, msg: 'Desde R$150 hasta R$300'},
        {opc:4, msg: 'Desde R$300 hasta R$500'},
        {opc:5, msg: 'Desde R$500 en adelante'},

    ]


    function handleClick(e){
        console.log(e.target.checked,'----valor del cheuqeo');
    
        switch(e.target.name){
            case 'byColor':{
                dispatch(filterByColor(e.target.value));
            }; break;
            case 'bySize':{
                dispatch(filterBySize([e.target.value]));
            }; break; 
            case 'byPrice':{
                dispatch(filterByPrice(parseInt(e.target.value)));
            }; break; 
            default: return state;
        }
    }

    return (
        <div>
                  <label>COLORES</label>
                  <br />
                      <div>
                        {colors.map((lang,i) =>(
                                <span key = {i}>
                                    <input 
                                    type="radio" 
                                    name='byColor'
                                    value={lang.por}
                                    onChange={handleClick}
                                    />
                                    <label>{lang.sp}</label>
                                    <br />
                                </span>
                        ))}
                      </div>
                  <br />
                  <label>TAMAÑOS</label>
                  <br />
                      <div className='tamaños'>
                        {sizes.map((size,i) =>(
                                <span key = {i}>
                                    <button 
                                    className='button'
                                    name='bySize'
                                    value={size}
                                    onClick={handleClick}>
                                    {size}
                                    </button>
                                </span>
                        ))}
                      </div>
                  <br />
                   <label>FRANJA DE PRECIOS</label>
                  <br />
                      <div>
                        {price.map((price,i) =>(
                                <span key = {i}>
                                    <input 
                                    type="radio" 
                                    name='byPrice'
                                    value={price.opc}
                                    onChange={handleClick}
                                    />
                                    <label>{price.msg}</label>
                                    <br />
                                </span>
                        ))}
                      </div>
        </div>
    )
}