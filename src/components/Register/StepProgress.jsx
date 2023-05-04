import styles from './StepProgress.module.scss'
import pgComplete from '../../icons/pg-complete.svg'


export default function StepProgress() {
  return (
    <section className={`${styles.progressContainer} col col-12`}>
           <span className={styles.progressGroup} dataPhase='address'>
        <span className={styles.progressIcon}>
          <span className={styles.text}>1</span>
        </span>
        <span className={styles.progressLabel}>寄送地址</span>
      </span>
      <span className={styles.progressBar} data-order={1} />


      <span className={styles.progressGroup} dataPhase='shipping'>
        <span className={styles.progressIcon}>
          <span className={styles.text}>2</span>
        </span>
        <span className={styles.progressLabel}>運送方式</span>
      </span>

      <span className={styles.progressBar} data-order={2} />
      

      <span className={styles.progressGroup} dataPhase='credit-card'>
        <span className={styles.progressIcon}>
          <span className={styles.text}>3</span>
        </span>
        <span className={styles.progressLabel}>付款資訊</span>
      </span>
    </section>
  )
}