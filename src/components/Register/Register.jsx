import styles from './Register.module.scss'

import StepProgress from './StepProgress'
import Step1 from './Step1'
// import Step2 from './Step2'
// import Step3 from './Step3'
import ProgressControl from './ProgressControl'

export default function Register() {
  return(
    <>
    <section class={`${styles.registerContainer} col col-lg-6 col-sm-12`} data-phase="1" data-total-price="0">
      <h2 class={`${styles.registerTitle} col col-12`}>結帳</h2>
    <StepProgress/>
    <section class={`${styles.formContainer} col col-12`}>
      <Step1/>
      {/* <Step2/> */}
      {/* <Step3/> */}
    </section>
      <ProgressControl/>
    </section>
    </>
  )
}