import styles from '../Cart/Cart.module.scss'
import { ReactComponent as PlusIcon } from "../../icons/plus.svg";
import { ReactComponent as MinusIcon } from "../../icons/minus.svg";
import { useState } from 'react'

export default function CartItems(props) {
  const [count, setCount] = useState(props.quantity)

  function handleMinusClick() {
    if(count > 1) {
      setCount(count - 1)
      props.setTotalPrice(props.totalPrice - props.price)
    }
  }

  function handlePlusClick() {
    setCount(count + 1)
    props.setTotalPrice(props.totalPrice + props.price)
  }

  return (
<section className={styles.productList}>
          <div className={styles.productContainer} key={props.id} data-count={props.quantity} data-price={props.price}>
              <img className={styles.imgContainer} src={props.img}alt="" />
              <div className={styles.productInfo}>
                <div className={styles.productName}>{props.name}</div>
                <div className={styles.productControlContainer}>
                  <div className={styles.productControl}>
                  <MinusIcon onClick={handleMinusClick}/>
                    <span className={styles.productCount}>{count}</span>
                   <PlusIcon onClick={handlePlusClick}/>
                  </div>
                </div>
                <div className={styles.price}>$ {props.price * count}</div>
              </div>
            </div>
            </section>
  )  
}

