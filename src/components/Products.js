import React from 'react';
import { connect } from 'react-redux'
import { addToCart } from '../store/products'

const Products = props => {
    return (
            <section className="products">
                {props.products.displayedProducts.map(product => {
                    return <li>
                        {product.name}
                        <button onClick={() => props.addToCart(product)}>Add To Your Cart</button>
                        </li>
                })}
            </section>
            
    )
}

const mapStateToProps = state => ({
    products : state.products
})

const mapDispatchToProps = { addToCart }
export default connect(mapStateToProps, mapDispatchToProps)(Products)
