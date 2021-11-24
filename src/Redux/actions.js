import axios from 'axios';

export function getProducts(){
    return async function(dispatch){
        let response = await axios.get('http://localhost:5000/products');
        return dispatch({
            type: 'GET_PRODUCTS',
            payload: response.data
        });
    }
}

export function filterByColor(color){
    console.log(color);
    return  function(dispatch){
        return dispatch({
            type: 'FILTER_COLOR',
            payload: color
        });
    }
}

export function filterBySize(sizes){
    console.log(sizes,'----vengo del a action');
    return  function(dispatch){
        return dispatch({
            type: 'FILTER_SIZES',
            payload: sizes
        });
    }
}

export function filterByPrice(opc){
    console.log(opc,'----vengo del a action filterByPrice');
    return  function(dispatch){
        return dispatch({
            type: 'FILTER_PRICE',
            payload: opc
        });
    }
}

export function sortByPrice(opc){
    console.log(opc,'----vengo del a action sortByPrice');
    return  function(dispatch){
        return dispatch({
            type: 'SORT_PRICE',
            payload: opc
        });
    }
}