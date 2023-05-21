import styles from './Step3.module.scss'
import { useContext } from 'react'
import { InfoContext } from './InfoContext'


export default function Step3() {
  const {handleNameChange, handleNumberChange, handleDateChange, handleCodeChange} = useContext(InfoContext)

  return(
    <form className="col col-12" data-phase="credit-card">
          <h3 className={styles.formTitle}>付款資訊</h3>
          <section className={styles.formBody}>
            <div className={styles.cardInfo}>
              <div className={styles.inputGroup}>
                <div className={styles.inputLabel}>持卡人姓名</div>
                <input type="text" placeholder="John Doe" onChange={(e)=>handleNameChange(e.target.value)}/>
              </div>
            </div>
            <div className={styles.cardInfo}>
              <div className={styles.inputGroup}>
                <div className={styles.inputLabel}>卡號</div>
                <input type="text" placeholder="1111 2222 3333 4444" onChange={(e)=>handleNumberChange(e.target.value)}/>
              </div>
            </div>
            <div className={styles.verifyInfo}>
              <div class={styles.inputGroup}>
                <div className={styles.inputLabel}>有效期限</div>
                <input type="text" placeholder="MM/YY" onChange={(e)=>handleDateChange(e.target.value)}/>
              </div>
              <div className={styles.inputGroup}>
                <div className={styles.inputLabel}>CVC / CCV</div>
                <input type="text" placeholder="123" onChange={(e)=>handleCodeChange(e.target.value)}/>
              </div>
            </div>
          </section>
        </form>
  )
}