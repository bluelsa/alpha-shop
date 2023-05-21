 import styles from './ProgressControl.module.scss'

 import {ReactComponent as LeftArrow} from '../../icons/left-arrow.svg'
 import {ReactComponent as RightArrow} from '../../icons/right-arrow.svg'
 import { useContext } from 'react'
 import { StepContext } from './StepContext'

 

 export default function StepControl({onPrevStep, onNextStep, onSend}) {
  const {step, handlePrevStep, handleNextStep} = useContext(StepContext)

  if (step === 1) {
    return (
      <section className={styles.progressControlContainer}>
  {/* stage 1 */}
      <section className={styles.buttonGroup} data-phase="address">
        <button className={styles.next} onClick={() => handleNextStep(step)}>
          下一步
          <RightArrow/>
        </button>
      </section> 
      </section>
    )
  } else if (step === 2) {
    return(
      <section className={styles.progressControlContainer}>
        <section className={styles.buttonGroup} data-phase="shipping">
        <button className={styles.prev} onClick={() => handlePrevStep(step)}>
          <LeftArrow/>
          上一步
        </button>
        <button className={styles.next} onClick={() => handleNextStep(step)}>
          下一步
          <RightArrow/>
        </button>
      </section> 
      </section>
    )
  } else if (step === 3) {
    return(
      <section className={styles.progressControlContainer}>
        <section className={styles.buttonGroup} data-phase="credit-card">
        <button className={styles.prev} onClick={() => handlePrevStep(step)}>
          <LeftArrow/>
          上一步
        </button>
        <button className={styles.next} onClick={onSend} >
          確認下單
        </button>
        </section>
      </section>
    )
  }
 } 

