import React, { useState } from "react";
import { useSelector } from "react-redux";
import './shoppingCart.scss';

export default function ShoppingCart(){

    const items = useSelector(state => state);
    console.log(items)
    return(
        <header className='style'>

            <img src='../img/logo_m3.png' />
            <div>
                <img src='https://w7.pngwing.com/pngs/879/25/png-transparent-web-development-e-commerce-shopping-cart-software-online-shopping-business-text-service-people.png' width='35' height='25'  />
                <button disabled >{items.count}</button>
            </div>
        </header>

    )
}