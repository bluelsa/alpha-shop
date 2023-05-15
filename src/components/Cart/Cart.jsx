import styles from './Cart.module.scss'
import CartItem from './CartItem'
import Product1 from '../../icons/product-1.jpeg'
import Product2 from '../../icons/product-2.jpeg'
import {useState} from 'react'


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

export default function Cart() {
  const [totalPrice, setTotalPrice] = useState(0)

  //購物車預設各一樣商品的總金額
  let price = 0
  data.forEach(item => {
    price = price + item.price * item.quantity
  })

  return(
      <section className={`${styles.cartContainer} col col-lg-5 col-sm-12`}>
          <h3 className={styles.cartTitle}>購物籃</h3>
          {data.map( product =>
        <CartItem {...product} key={product.id} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>
        ) 
      }
          <section className={`${styles.cartInfo} shipping col col-12`}>
            <div className={styles.text}>運費</div>
            <div className={styles.price}>免費</div>
          </section>
          <section className={`${styles.cartInfo} shipping col col-12`}>
            <div className={styles.text}>小計</div>
            <div className={styles.price}>$ {price + totalPrice}</div>
          </section>
          </section>
  )
}