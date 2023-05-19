import styles from '../Cart/Cart.module.scss'
import { ReactComponent as PlusIcon } from "../../icons/plus.svg";
import { ReactComponent as MinusIcon } from "../../icons/minus.svg";

export default function CartItem(props) {

  return (
<section className={styles.productList}>
          <div className={styles.productContainer} key={props.id} data-count={props.quantity} data-price={props.price}>
              <img className={styles.imgContainer} src={props.img}alt="" />
              <div className={styles.productInfo}>
                <div className={styles.productName}>{props.name}</div>
                <div className={styles.productControlContainer}>
                  <div className={styles.productControl}>
                  <MinusIcon onClick={props.onMinusClick}/>
                    <span className={styles.productCount}>{props.quantity}</span>
                   <PlusIcon onClick={props.onPlusClick}/>
                  </div>
                </div>
                <div className={styles.price}>$ {props.price}</div>
              </div>
            </div>
            </section>
  )  
}
