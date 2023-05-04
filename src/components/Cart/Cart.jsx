import styles from './Cart.module.scss'

import product1 from '../../icons/product-1.jpeg'
import product2 from '../../icons/product-2.jpeg'
import plusIcon from '../../icons/plus.svg'
import minusIcon from '../../icons/minus.svg'

export default function Cart() {
  return(
     <section className={`${styles.cartContainer} col col-lg-5 col-sm-12`}>
          <h3 className={styles.cartTitle}>購物籃</h3>

          <section className={`${styles.productList} col col-12`} data-total-price="0">
            <div className={`${styles.productContainer} col col-12`} data-count="0" data-price="3999">
              <img className={styles.imgContainer} src={product1} alt="" />
              <div className={styles.productInfo}>
                <div className={styles.productName}>破壞補丁修身牛仔褲</div>
                <div className={styles.productControlContainer}>
                  <div className={styles.productControl}>
                    <img src={minusIcon} alt="" />
                    <span className={styles.productCount}>1</span>
                    <img src={plusIcon} alt="" />
                  </div>
                </div>
                <div className={styles.price}>$1200</div>
              </div>
            </div>
            <div className={`${styles.productContainer} col col-12`} data-count="0" data-price="1299">
              <img className={styles.imgContainer} src={product2} alt=""/>
              <div className={styles.productInfo}>
                <div className={styles.productName}>刷色直筒牛仔褲</div>
                <div className={styles.productControlContainer}>
                  <div className={styles.productControl}>
                   <img src={minusIcon} alt="" />
                    <span className={styles.productCount}>1</span>
                    <img src={plusIcon} alt="" />
                  </div>
                </div>
                <div className={styles.price}>$1100</div>
              </div>
            </div>
          </section>

          <section className={`${styles.cartInfo} shipping col col-12`}>
            <div className={styles.text}>運費</div>
            <div className={styles.price}>$120</div>
          </section>
          <section className={`${styles.cartInfo} shipping col col-12`}>
            <div className={styles.text}>小計</div>
            <div className={styles.price}>$2420</div>
          </section>
        </section>
  )
}