import styles from './StepProgress.module.scss'
import {ReactComponent as PgComplete} from '../../icons/pg-complete.svg'


function Step ({phase, text, label}) {
  return (
    <>
          <span className={styles.activeGroup} data-phase={phase}>
        <span className={styles.progressIcon}>
          <span className={styles.text}>{text}</span>
          <PgComplete className={styles.icon}/>
        </span>
        <span className={styles.progressLabel}>{label}</span>
      </span>
</>
  )
}

export default function StepProgress({step}) {

  if (step === 1) {
    return(
      <>
      <section className={styles.progressContainer}>
      <span className={styles.activeGroup}>
   <Step phase='address' text='1' label='寄送地址'/>
      </span>
      <span className={styles.activeProgressBar}></span>
   <span className={styles.progressGroup}>
   <Step phase='shipping' text='2' label='運送方式'/>
   </span>
<span className={styles.progressBar}></span>
<span className={styles.progressGroup}>
   <Step phase='credit-card' text='3' label='付款資訊'/>
   </span>
    </section>
      </>
    )
  } else if (step === 2) {
    return(
      <>
      <section className={styles.progressContainer}>
      <span className={styles.doneGroup}>
   <Step phase='address' text='1' label='寄送地址'/>
      </span>
      <span className={styles.activeProgressBar}></span>
   <span className={styles.activeGroup}>
   <Step phase='shipping' text='2' label='運送方式'/>
   </span>
<span className={styles.activeProgressBar}></span>
<span className={styles.progressGroup}>
   <Step phase='credit-card' text='3' label='付款資訊'/>
   </span>
    </section>
      </>
    )
  } else if (step === 3) {
    return(
      <>
      <section className={styles.progressContainer}>
      <span className={styles.doneGroup}>
   <Step phase='address' text='1' label='寄送地址'/>
      </span>
      <span className={styles.activeProgressBar}></span>
   <span className={styles.doneGroup}>
   <Step phase='shipping' text='2' label='運送方式'/>
   </span>
<span className={styles.activeProgressBar}></span>
<span className={styles.activeGroup}>
   <Step phase='credit-card' text='3' label='付款資訊'/>
   </span>
    </section>
      </>
    )
  }
}