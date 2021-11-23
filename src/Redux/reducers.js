const initialState = {
    products: []
}

function rootReducer(state = initialState, action){
    switch(action.type){
        case 'GET_PRODUCTS':
            return {
                ...state,
                products: action.payload
            }
        case 'FILTER_COLOR':
            console.log(state.products, '-------', action.payload);
            const arrayFilterColor = state.products.filter(e => e.color.toUpperCase() === action.payload.toUpperCase());
            console.log(arrayFilterColor,'zz---z-z-z-zz-z--')
            return {
                ...state,
                products: arrayFilterColor
            }
        default: return state;
    }
}

export default rootReducer;
