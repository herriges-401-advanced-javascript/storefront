let initialState = {
    products: [
        {category: 'stuff', name: 'thingy1', description: 'thingy1 description', price: '$1'},
        {category: 'moreStuff', name: 'thingy2', description: 'thingy2 description', price: '$1'},
        {category: 'evenMoreStuff', name: 'thingy3', description: 'thingy3 description', price: '$1'}
    ],
    displayedProducts : []
}

export default (state = initialState, action) => {
    let { type, payload } = action;
    console.log('payload', payload)
    switch(type){
        case 'Change':
            let displayedProducts = state.products.filter(product => {
                return product.category === payload;
            })
            return { ...state, displayedProducts }
        default:
            return state;
    }
}

