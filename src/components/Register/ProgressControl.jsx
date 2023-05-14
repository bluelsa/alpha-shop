 import styles from './ProgressControl.module.scss'

 import {ReactComponent as LeftArrow} from '../../icons/left-arrow.svg'
 import {ReactComponent as RightArrow} from '../../icons/right-arrow.svg'
//  import {useState} from 'react'
 

 export default function StepControl(props) {


  if (props.step === 1) {
    return (
      <>
      <section className={styles.progressControlContainer}>
  {/* stage 1 */}
      <section className={styles.buttonGroup} data-phase="address">
        <button className={styles.next} onClick={() => props.onNextStep(props.step)}>
          下一步
          <RightArrow/>
        </button>
      </section> 
      </section>
      </>
    )
  } else if (props.step === 2) {
    return(
      <>
      <section className={styles.progressControlContainer}>
        <section className={styles.buttonGroup} data-phase="shipping">
        <button className={styles.prev} onClick={() => props.onPrevStep(props.step)}>
          <LeftArrow/>
          上一步
        </button>
        <button className={styles.next} onClick={() => props.onNextStep(props.step)}>
          下一步
          <RightArrow/>
        </button>
      </section> 
      </section>
      </>
    )
  } else if (props.step === 3) {
    return(
      <>
      <section className={styles.progressControlContainer}>
        <section className={styles.buttonGroup} data-phase="credit-card">
        <button className={styles.prev} onClick={() => props.onPrevStep(props.step)}>
          <LeftArrow/>
          上一步
        </button>
        <button className={styles.next}>
          確認下單
        </button>
        </section>
      </section>
      </>
    )
  }
 } 