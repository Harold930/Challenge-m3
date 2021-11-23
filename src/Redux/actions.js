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