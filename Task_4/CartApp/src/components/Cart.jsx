import React, {useContext} from 'react'
import { CartContext } from '../context/CartContext'



const Cart = () => {
  const cart = useContext(CartContext);
  const total = cart.items.reduce((a,b) => a + b.price,0)
  return (
    <div className='cart' style={{margin : '20px'}}>
      {
        cart && cart.items.map(item => <li>
          {item.name} - ${item.price}
        </li>
        )
      }
      <h5>Total Price = ${total}</h5>
    </div>

  )
}

export default Cart