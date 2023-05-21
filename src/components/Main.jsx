import styles from './Main.module.scss'

import Register from './Register/Register'
import Cart from './Cart/Cart'

import { CartProvider } from './Cart/CartContext'
import { StepProvider } from './Register/StepContext'
import { InfoProvider } from './Register/InfoContext'

export default function Main() {
  
  return(
    <main className={styles.siteMain}>
      <div className={styles.mainContainer}>
        <InfoProvider>
        <CartProvider>
        <StepProvider>
        <Register/>
        </StepProvider>
        <Cart/>
        </CartProvider>
        </InfoProvider>
      </div>
    </main>
  )
}