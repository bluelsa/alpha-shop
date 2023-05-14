import styles from '../Cart/CartItem.module.scss'
import { ReactComponent as PlusIcon } from "../../icons/plus.svg";
import { ReactComponent as MinusIcon } from "../../icons/minus.svg";
import { useState } from 'react'
import Product1 from '../../icons/product-1.jpeg'
import Product2 from '../../icons/product-2.jpeg'

const Products = [
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

export default function Cart2({id, name, img, price}) {
  const [quantity, setQuantity] = useState(1)

  function handlePlusClick() {
    setQuantity(quantity + 1)
  }

  function handleMinusClick() {
    if (quantity > 0) {
      setQuantity(quantity - 1)
    }
  }
 
  
  return (
    <div className={`${styles.productContainer} col col-12`} key={id} data-count={Products.quantity} data-price={price}>
              <img className={styles.imgContainer} src={Products.img}alt="" />
              <div className={styles.productInfo}>
                <div className={styles.productName}>{Products.name}</div>
                <div className={styles.productControlContainer}>
                  <div className={styles.productControl}>
                  <MinusIcon onClick={handleMinusClick}/>
                    <span className={styles.productCount}>{quantity}</span>
                   <PlusIcon onClick={handlePlusClick}/>
                  </div>
                </div>
                <div className={styles.price}>$ {Products.price * Products.quantity}</div>
              </div>
            </div>
  )
}

 