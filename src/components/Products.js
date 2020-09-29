import React from 'react';
import { connect } from 'react-redux'


const Products = props => {
    return (
            <section className="products">
                {console.log('products props', props)}
                {props.products.displayedProducts.map(product => {
                    console.log(product)
                    return <li>{product.name}</li>
                })}
            </section>
            
    )
}

const mapStateToProps = state => ({
    products : state.products
})

export default connect(mapStateToProps)(Products)
