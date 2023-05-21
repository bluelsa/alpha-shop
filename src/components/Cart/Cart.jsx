import styles from './Cart.module.scss'
import CartItem from './CartItem'
import { useContext } from 'react'
import { CartContext } from './CartContext'


export default function Cart() {
const {products, setProducts, totalPrice} = useContext(CartContext)

  function handleMinusClick(productId) {
    let nextProducts = products.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          quantity: product.quantity - 1,
        };
      } else {
        return product;
      }
    });
    nextProducts = nextProducts.filter((p) => p.quantity > 0);
    setProducts(nextProducts);
  }

  function handlePlusClick(productId) {
    setProducts(
      products.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        } else {
          return product;
        }
      })
    );
  }
  
  if (products.length < 1) {
    return(
      <section className={styles.cartContainer}>
        <h3 className={styles.cartTitle}>購物籃</h3>
        <div><p>尚未加入商品</p></div>
      </section>
    )
  } else {
  return(
      <section className={styles.cartContainer}>
          <h3 className={styles.cartTitle}>購物籃</h3>
          {products.map( product =>
        <CartItem {...product} key={product.id}  
        onMinusClick={()=>{handleMinusClick(product.id)}} onPlusClick={()=> {handlePlusClick(product.id)}}
        />
        ) 
      }
          <section className={styles.cartInfo}>
            <div className={styles.text}>運費</div>
            <div className={styles.price}>免費</div>
          </section>
          <section className={styles.cartInfo}>
            <div className={styles.text}>小計</div>
            <div className={styles.price}>$ {totalPrice}</div>
          </section>
          </section> 
  )
} }