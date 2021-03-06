import axios from 'axios'
import { useEffect } from 'react'

let initialState = {
    products: [
        {category: 'stuff', name: 'thingy1', description: 'thingy1 description', price: '$1', count: 3},
        {category: 'moreStuff', name: 'thingy2', description: 'thingy2 description', price: '$1', count: 3},
        {category: 'evenMoreStuff', name: 'thingy3', description: 'thingy3 description', price: '$1', count: 3}
    ],
    displayedProducts : []
}

export default (state = initialState, action) => {
    let { type, payload } = action;
    switch(type){
        case 'Change':
            let displayedProducts = state.products.filter(product => {
                return product.category === payload;
            })
            return { ...state, displayedProducts }
        case 'Add':
            let products = []
            state.products.forEach(product => {
                if(product.name === payload.name){
                    product.count -= 1;
                }
                products.push(product)
            })
            return { ...state, products }
        default:
            return state;
    }
}

export const addToCart = (product) => {
    return {
        type: 'Add',
        payload: product
    }
}

export const fetchData = () => {
    return async function (dispatch) {
        const response = await axios.get('https://api-js401.herokuapp.com/api/v1')
        //https://swapi.dev/api/people/1')
        //https://api-js401.herokuapp.com/api/v1')
        console.log(response)
        dispatch({  type: 'Change' ,response })
    }
}