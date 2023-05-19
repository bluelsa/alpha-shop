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
  const [products, setProducts] = useState(data)

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

  let totalPrice = 0
  for (let i = 0; i < products.length; i++) {
    totalPrice += products[i].price * products[i].quantity;
  }


  return(
      <section className={`${styles.cartContainer} col col-lg-5 col-sm-12`}>
          <h3 className={styles.cartTitle}>購物籃</h3>
          {products.map( product =>
        <CartItem {...product} key={product.id} 
        products={products} 
        setProducts={setProducts} 
        onMinusClick={()=>{handleMinusClick(product.id)}} onPlusClick={()=> {handlePlusClick(product.id)}}/>
        ) 
      }
          <section className={`${styles.cartInfo} shipping col col-12`}>
            <div className={styles.text}>運費</div>
            <div className={styles.price}>免費</div>
          </section>
          <section className={`${styles.cartInfo} shipping col col-12`}>
            <div className={styles.text}>小計</div>
            <div className={styles.price}>$ {totalPrice}</div>
          </section>
          </section>
  )
}