import styles from './CartItems.module.scss'
// import product1 from '../../icons/product-1.jpeg'
// import product2 from '../../icons/product-2.jpeg'
import { ReactComponent as PlusIcon } from "../../icons/plus.svg";
import { ReactComponent as MinusIcon } from "../../icons/minus.svg";


const products = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 2,
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1,
  },
]

export default function CartItems() {
  const listProduct = products.map(product => 
          <div className={`${styles.productContainer} col col-12`} key={product.id} data-count={product.quantity} data-price={product.price}>
              <img className={styles.imgContainer} src={product.img}alt="" />
              <div className={styles.productInfo}>
                <div className={styles.productName}>{product.name}</div>
                <div className={styles.productControlContainer}>
                  <div className={styles.productControl}>
                  <MinusIcon/>
                    <span className={styles.productCount}>{product.quantity}</span>
                   <PlusIcon/>
                  </div>
                </div>
                <div className={styles.price}>$ {product.price}</div>
              </div>
            </div>)
  
  return (
  <section className={`${styles.productList} col col-12`} data-total-price="0">
    {listProduct}
  </section>
  )
}