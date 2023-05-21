import styles from '../Cart/Cart.module.scss'
import { ReactComponent as PlusIcon } from "../../icons/plus.svg";
import { ReactComponent as MinusIcon } from "../../icons/minus.svg";

export default function CartItem({id, name, img, price, quantity, onMinusClick, onPlusClick}) {
  return (
<section className={styles.productList}>
          <div className={styles.productContainer} key={id} data-count={quantity} data-price={price}>
              <img className={styles.imgContainer} src={img}alt="" />
              <div className={styles.productInfo}>
                <div className={styles.productName}>{name}</div>
                <div className={styles.productControlContainer}>
                  <div className={styles.productControl}>
                  <MinusIcon onClick={onMinusClick}/>
                    <span className={styles.productCount}>{quantity}</span>
                   <PlusIcon onClick={onPlusClick}/>
                  </div>
                </div>
                <div className={styles.price}>$ {price}</div>
              </div>
            </div>
            </section>
  )  
}
