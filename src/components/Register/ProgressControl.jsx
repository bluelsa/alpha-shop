 import styles from './ProgressControl.module.scss'

 import leftArrow from '../../icons/left-arrow.svg'
 import rightArrow from '../../icons/right-arrow.svg'
 

 export default function StepControl() {
  return (
    <>
 <section className={`${styles.progressControlContainer} col col-lg-6 col-sm-12`}>
      <section className={`${styles.buttonGroup} col col-12`} data-phase="address">
        <button className={styles.next}>
          下一步
          <img src={rightArrow} alt="" />
        </button>
      </section>
      {/* <section className={`${styles.buttonGroup} col col-12`} data-phase="shipping">
        <button className={styles.prev}>
          <img src={leftArrow} alt="" />
          上一步
        </button>
        <button className={styles.next}>
          下一步
          <img src={rightArrow} alt="" />
        </button>
      </section>
      <section className={`${styles.buttonGroup} col col-12`} data-phase="credit-card">
        <button className={styles.prev}>
          <img src={leftArrow} alt="" />
          上一步
        </button>
        <button className={styles.next}>
          確認下單
        </button>
      </section> */}
    </section>
    </>
  )
 }