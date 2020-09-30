import React from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../store/products'

const SimpleCart = props => {
    return (
        <section className="cart">
            <h3>{props.cart.items.length}</h3>
            <ul>
                {console.log('cart', props.cart.items)}
                {props.cart.items.map(product => {
                    return <li>
                        {product.name}
                        </li>
                })}
            </ul>
        </section>
    )
}

const mapStateToProps = state => ({
    cart : state.simpleCart,
})

const mapDispatchToProps = { addToCart }
export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart)
