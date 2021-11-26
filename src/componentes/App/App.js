import React, { useEffect } from "react";
import { getProducts } from "../../Redux/actions";
import './app.scss'
import { useDispatch, useSelector} from 'react-redux'
import Products from "../Products/Products";
import Filters from "../Filters/Filters";
import Order from "../Order/Order";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

export default  function App(){

    const dispatch = useDispatch();
    const state = useSelector(state => state);

    useEffect(() => {
        dispatch(getProducts());
    },[dispatch])

    return (
        <div >
            <ShoppingCart />
            <hr></hr>
            <div className='app'>
                <Filters />
                <Order />
                {state.products.length !== 0 ? 
                <Products products={state.products}/>  :
                <h1>Resultados no encontrados</h1>}
            </div>
        </div>
    );
}