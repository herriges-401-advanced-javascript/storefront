import React from 'react';
import { connect } from 'react-redux'
import { addToCart, fetchData } from '../store/products'

const Products = props => {
    return (
            <section className="products">
                {props.products.displayedProducts.map(product => {
                    return <li>
                        {product.name}
                        <button onClick={() => props.addToCart(product)}>Add To Your Cart</button>
                        </li>
                })}
                <button onClick={() => props.fetchData()}>fetch stuff</button>
                {console.log('I AM PROPS', props)}
            </section>
            
    )
}

const mapStateToProps = state => ({
    products : state.products
})

const mapDispatchToProps = { addToCart, fetchData }
export default connect(mapStateToProps, mapDispatchToProps)(Products)
