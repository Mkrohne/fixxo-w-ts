import React from "react"
import { ShoppingCartContextType, useShoppingCartContext } from "../contexts/ShoppingCartContext"
import ShoppingCartItem from './ShoppingCartItem'

const ShoppingCart: React.FC = () => {
    const { items } = useShoppingCartContext() as ShoppingCartContextType

    return (
        <div className='shoppingcart offcanvas offcanvas-end' tabIndex={-1} id='shoppingCart' aria-labelledby='shoppingCartLabel'>
            <div className='offcanvas-header'>
               <h4 className='offcanvas-title' id='shoppingCartLable'><i className='fa-regular fa-bag-shopping me-3'></i>Shopping Cart</h4>
               <button className='btn-close' type='button' data-bs-dismiss='offcanvas' aria-label="Close"></button> 
            </div>
            <div className='offcanvas-body'>
                {
                    items.map(items => (<ShoppingCartItem key={items.articleNumber} item={items} />))
                }

            </div>
        </div>
    )
}

export default ShoppingCart