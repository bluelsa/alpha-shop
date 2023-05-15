import styles from './Main.module.scss'

import Register from './Register/Register'
import Cart from './Cart/Cart'

export default function Main() {
  return(
    <main className={styles.siteMain}>
      <div className={styles.mainContainer}>
        <Register/>
        <Cart/>
      </div>
    </main>
  )
}