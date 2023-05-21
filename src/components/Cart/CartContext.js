import { createContext, useState } from 'react'
import Product1 from '../../icons/product-1.jpeg'
import Product2 from '../../icons/product-2.jpeg'

const data = [
  {
    id: '1',
    name: '破壞補丁修身牛仔褲',
    img: Product1,
    price: 3999,
    quantity: 1,
  },
  {
    id: '2',
    name: '刷色直筒牛仔褲',
    img: Product2,
    price: 1299,
    quantity: 1,
  },
]


export const CartContext = createContext(null)

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState(data)
  
  let totalPrice = 0
  for (let i = 0; i < products.length; i++) {
    totalPrice += products[i].price * products[i].quantity
  }
  
  const value = {
    totalPrice,
    products,
    setProducts
  }
  return (
<CartContext.Provider value={value}> 
{ children }
</CartContext.Provider>
  )
}


