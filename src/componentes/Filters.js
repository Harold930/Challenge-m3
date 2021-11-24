import React from 'react';
import { useDispatch } from 'react-redux';
import { filterByColor, filterByPrice, filterBySize, sortByPrice } from "../Redux/actions";

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
        console.log(e.target.name,'----nombre del boton');
        console.log(e.target.value,'----valor del boton');

        e.preventDefault();
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
                  <label>Colores</label>
                      <div>
                        {colors.map((lang,i) =>(
                                <span key = {i}>
                                    <input 
                                    type="checkbox" 
                                    name='byColor'
                                    value={lang.por}
                                    onClick={handleClick}
                                    />
                                    <label>{lang.sp}</label>
                                    <br />
                                </span>
                        ))}
                      </div>
                  <label>Tamaños</label>
                      <div>
                        {sizes.map((size,i) =>(
                                <span key = {i}>
                                    <button 
                                    name='bySize'
                                    value={size}
                                    onClick={handleClick}>
                                    {size}
                                    </button>
                                    {/* <br /> */}
                                </span>
                        ))}
                      </div>
                      <label>Franja de precios</label>
                      <div>
                        {price.map((price,i) =>(
                                <span key = {i}>
                                    <input 
                                    type="checkbox" 
                                    name='byPrice'
                                    value={price.opc}
                                    onClick={handleClick}
                                    />
                                    <label>{price.msg}</label>
                                    <br />
                                </span>
                        ))}
                      </div>
        </div>
    )
}