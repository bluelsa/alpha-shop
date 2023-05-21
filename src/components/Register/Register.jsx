import styles from './Register.module.scss'

import StepProgress from './StepProgress'
import Form from './Form'
import ProgressControl from './ProgressControl'

import { useContext } from 'react'
import { CartContext } from '../Cart/CartContext'
import { InfoContext } from '../Register/InfoContext'



export default function Register() {
  const {info} = useContext(InfoContext)
  const {totalPrice} = useContext(CartContext)

  function handleSubmitClick() {
    alert(`訂單提交成功! \n\n總金額: $${totalPrice} \n持卡人姓名: ${info.name} \n卡號: ${info.number} \n有效期限: ${info.date} \nCVC/CCV: ${info.code}`) 
  }

  return(
    <section className={styles.registerContainer}>
      <h2 className={styles.registerTitle}>結帳</h2>
    <StepProgress/>
    <section className={styles.formContainer}>
      <Form/>
    </section>
      <ProgressControl 
      onSend={handleSubmitClick}
      /> 
    </section>
  )
}

