import styles from './Step2.module.scss'

export default function Step2() {
  return(
    <>
     <form className="col col-12" data-phase="shipping">
          <h3 className={styles.formTitle}>運送方式</h3>
          <section className={`${styles.formBody} col col-12`}>
            <label className={`${styles.radioGroup} col col-12`} data-price="0">
              <input id="shipping-standard" type="radio" name="shipping" checked />
              <div className={styles.radioInfo}>
                <div className="col col-12">
                  <div className={styles.text}>標準運送</div>
                  
                </div>
                <div className={`${styles.period} col col-12`}>約 3~7 個工作天</div>
              </div>
              <div className={styles.price}>免費</div>
              <div className={styles.radioBoxBorder}></div>
            </label>
            <label className={`${styles.radioGroup} col col-12`} data-price="500">
              <input id="shipping-dhl" type="radio" name="shipping"/>
              <div className={styles.radioInfo}>
                <div className="col col-12">
                  <div className={styles.text}>DHL 貨運</div>
                </div>
                <div className={`${styles.period} col col-12`}>48小時內送達</div>
              </div>
              <div className={styles.price}>$ 500</div>
              <div className={styles.radioBoxBorder}></div>
            </label>
          </section>
        </form>
    </>
  )
}