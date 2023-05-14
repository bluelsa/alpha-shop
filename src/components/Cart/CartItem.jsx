import styles from '../Cart/Cart.module.scss'
import { ReactComponent as PlusIcon } from "../../icons/plus.svg";
import { ReactComponent as MinusIcon } from "../../icons/minus.svg";
import { useState } from 'react'


// const initialProducts = [
//   {
//     id: '1',
//     name: '破壞補丁修身牛仔褲',
//     img: Product1,
//     price: 3999,
//     quantity: 1,
//   },
//   {
//     id: '2',
//     name: '刷色直筒牛仔褲',
//     img: Product2,
//     price: 1299,
//     quantity: 1,
//   },
// ]

export default function CartItems(props) {
const [count, setCount] = useState(1)
  
  function handlePlusClick() {
    setCount(count + 1)
    props.totalPlus(props.price)
  }
  
  function handleMinusClick() {
    if(count > 0) {
    setCount(count - 1)
    props.totalMinus(props.price)
    }
  }

  return (
    <>
    <section className={styles.productList}>
          <div className={styles.productContainer} key={props.id} data-count={props.count} data-price={props.price}>
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
            </>
  )
}
