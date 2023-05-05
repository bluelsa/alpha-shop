import styles from './StepProgress.module.scss'
import pgComplete from '../../icons/pg-complete.svg'

function Step ({phase, text, label}) {
  return (
    <>
          <span className={styles.progressGroup} dataPhase={phase}>
        <span className={styles.progressIcon}>
          <span className={styles.text}>{text}</span>
          {/* <img src={pgComplete} alt="" /> */}
        </span>
        <span className={styles.progressLabel}>{label}</span>
      </span>
</>
  )
}

export default function StepProgress() {
  return (
    <section className={`${styles.progressContainer} col col-12`}>
   <Step phase='address' text='1' label='寄送地址'/>
   <span className={styles.progressBar} data-order='1' />
   <Step phase='shipping' text='2' label='運送方式'/>
   <span className={styles.progressBar} data-order='2' />
   <Step phase='credit-card' text='3' label='付款資訊'/>
    </section>
  )
}