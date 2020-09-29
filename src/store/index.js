import { createStore, combineReducers } from 'redux';

// This dependency enables the Redux Dev Tools in your Chrome Console.
import { composeWithDevTools } from 'redux-devtools-extension';

import categories from './categories';
import products from './products';

// Combine reducers isn't really necessary when you only have one reducer
// But ... it's nice to create these with a name (counter in this case) so that your
// components have easy access to them.
// And ... 99.99% of all Redux apps will have more than one reducer to 'combine'
let reducers = combineReducers({ categories, products });

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();
