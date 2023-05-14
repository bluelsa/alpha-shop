import styles from './Register.module.scss'

import StepProgress from './StepProgress'
import Form from './Form'
import ProgressControl from './ProgressControl'

import {useState} from 'react'

export default function Register() {
  const [step, setStep] = useState(1)
  
  function handlePrevStep() {
    step > 1 && setStep(step - 1);
  }
  function handleNextStep() {
    step < 3 && setStep(step + 1);
  }

  return(
    <>
    <section className={styles.registerContainer}>
      <h2 className={styles.registerTitle}>結帳</h2>
    <StepProgress step={step}/>
    <section className={styles.formContainer}>
      <Form step={step}/>
    </section>
      <ProgressControl 
      onPrevStep={handlePrevStep}
      onNextStep={handleNextStep}
      step={step}/>
    </section>
    </>
  )
}

