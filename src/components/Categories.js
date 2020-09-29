import React from 'react';
import { connect } from 'react-redux'
import { changeCat } from '../store/categories'


const Categories = props => {
    return (
            <section className="category">
                <h3>Current Category {props.category.activeCategory.display}</h3>
                <ul>
                    {/* {console.log('category props', props)} */}
                    {Object.keys(props.category.categories).map(category => {
                        return <li onClick={() => props.changeCat(category)}>{props.category.categories[category].display}</li>
                    })}
                </ul>
            </section>
    )
}

const mapStateToProps = state => ({
    category : state.categories,
})

const mapDispatchToProps = { changeCat }
export default connect(mapStateToProps, mapDispatchToProps)(Categories);
