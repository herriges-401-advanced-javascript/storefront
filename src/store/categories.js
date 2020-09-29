let initialState = {
    categories : {
        stuff: { display: 'display stuff', description: 'stuff description'},
        moreStuff: { display: 'display more stuff', description: 'more stuff description'},
        evenMoreStuff: { display: 'display even more stuff', description: 'even more stuff description'},
    },
    activeCategory : { display: 'display stuff', description: 'stuff description'},
}

export default (state = initialState, action) => {

    let { type, payload } = action;
    switch(type){
        case 'Change':
            let activeCategory = state.categories[payload];
            return { ...state, activeCategory}
        default:
            return state;
    }
    
}

export const changeCat = (name) => {
    return {
        type: 'Change',
        payload: name
    }
}
