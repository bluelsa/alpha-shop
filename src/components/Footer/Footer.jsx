import styles from './Footer.module.scss'
import {ReactComponent as Logo} from '../../icons/logo.svg'
import {ReactComponent as FbIcon} from '../../icons/facebook.svg'
import {ReactComponent as IgIcon} from '../../icons/instagram.svg'
import {ReactComponent as WhatsappIcon} from '../../icons/whatsapp.svg'

export default function Footer() {
return (
  <>
  <footer className={styles.siteFooter}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLogoContainer}>
          <Logo className={styles.iconLogo}/>
        </div>
        <section className={styles.footerSection}>
          <h2 className={styles.sectionTitle}>客戶服務</h2>
          <div className={styles.sectionContent}>
            <a className={styles.pageLink} href="#">運送說明</a>
            <a className={styles.pageLink} href="#">退換貨相關</a>
            <a className={styles.pageLink} href="#">付款資訊</a>
            <a className={styles.pageLink} href="#">FAQ</a>
          </div>
        </section>
        <section className={styles.footerSection}>
          <h2 className={styles.sectionTitle}>關於我們</h2>
          <div className={styles.sectionContent}>
            <a className={styles.pageLink} href="#">品牌故事</a>
            <a className={styles.pageLink} href="#">媒體聯繫</a>
            <a className={styles.pageLink} href="#">Press kit</a>
          </div>
        </section>
        <section className={styles.footerSection}>
          <h2 className={styles.sectionTitle}>資訊</h2>
          <div className={styles.sectionContent}>
            <a className={styles.pageLink} href="#">隱私權政策</a>
            <a className={styles.pageLink} href="#">Cookie</a>
            <a className={styles.pageLink} href="#">GDPR</a>
          </div>
        </section>
        <section className={styles.footerSection}>
          <h2 className={styles.sectionTitle}>追蹤 ALPHA Shop</h2>
          <div className={styles.sectionContent}>
            <div className={styles.telInfo}>+886 02123-45678</div>
            <div className={styles.socialIconGroup}>
              <FbIcon className={styles.iconLogo}/>
              <IgIcon className={styles.iconLogo}/>
              <WhatsappIcon className={styles.iconLogo}/>
            </div>
          </div>
        </section>
      </div>
    </footer>
  </>
)
}