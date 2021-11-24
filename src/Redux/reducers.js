const initialState = {
    products: [],
    allProducts: []
}

function rootReducer(state = initialState, action){
    switch(action.type){
        case 'GET_PRODUCTS':
            return {
                ...state,
                products: action.payload,
                allProducts: action.payload
            }

        case 'FILTER_COLOR':
            const arrayFilterColor = state.products.filter(e => e.color.toUpperCase() === action.payload.toUpperCase());
            return {
                ...state,
                products: arrayFilterColor
            }

        case 'FILTER_SIZES':

            let arrayFilterSizes = [];

            if(action.payload.length === 1){
                state.products.forEach(e => {
                    if(e.size.length === 1){
                        if(e.size[0] === action.payload[0]) arrayFilterSizes.push(e);
                    } else {
                        e.size.forEach(el => {
                            if(el === action.payload[0]) arrayFilterSizes.push(e);
                        });
                    }
                });
            } else {
                for(let i = 0; i < action.payload.length; i++){
                    state.products.forEach(e => {
                        if(e.size.length === 1){
                            if(e.size[0] === action.payload[i]) arrayFilterSizes.push(e);
                        } else {
                            e.size.forEach(el => {
                                if(el === action.payload[i]) arrayFilterSizes.push(e);
                            });
                        }
                    });
                }
            }

            return {
                ...state,
                products: arrayFilterSizes
            }
        case 'FILTER_PRICE':

            let arrayFilterPrice = [];

            switch(action.payload){
                case 1:
                    arrayFilterPrice = state.products.filter(e => e.price > 0 && e.price <= 50);
                    break;
                case 2:
                    arrayFilterPrice = state.products.filter(e => e.price > 50 && e.price <= 150);
                    break;
                case 3:
                    arrayFilterPrice = state.products.filter(e => e.price > 150 && e.price <= 300);
                    break;
                case 4:
                    arrayFilterPrice = state.products.filter(e => e.price > 300 && e.price <= 500);
                    break;
                case 5:
                    arrayFilterPrice = state.products.filter(e => e.price > 500 );
                    break;
                default: return state;
            }

            return {
                ...state,
                products: arrayFilterPrice
            }

        case 'SORT_PRICE':

            let arraySort = [];

            if(action.payload === 'asc'){
            arraySort = state.products.sort((a,b) => {
                if(a.price > b.price){
                    return 1;
                }
                if(a.price < b.price){
                    return -1;
                }
                return 0;
            });
        } else if(action.payload === 'desc'){
            arraySort = state.products.sort((a,b) => {
                if(a.price < b.price){
                    return 1;
                }
                if(a.price > b.price){
                    return -1;
                }
                return 0;
            });
        }
            return {
                
                allProducts:arraySort
            }
                
          

        default: return state;
    }
}

export default rootReducer;
