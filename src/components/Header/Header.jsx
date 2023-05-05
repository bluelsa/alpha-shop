import styles from './Header.module.scss'
import {ReactComponent as Logo} from '../../icons/logo.svg'
import {ReactComponent as SearchIcon} from '../../icons/search.svg'
import {ReactComponent as CartIcon} from '../../icons/cart.svg'
import {ReactComponent as MoonIcon} from '../../icons/moon.svg'
import {ReactComponent as SunIcon} from '../../icons/sun.svg'

function Item({category}) {
  return(
    <>
    <li key={category} className={styles.navItem}>
              <a className={styles.navLink} href="＃">{category}</a>
            </li>
    </>
  )
}

export default function Header() {
  return (
    //  <!-- header -->
    <header className="siteHeader">
      <div className="headerContainer mx-auto">
        {/* <!-- navbar-toggle --> */}
        {/* <input id="navbar-toggle" className="navbar-toggle" type="checkbox" />
        <label for="navbar-toggle" className="burger-container">
          <svg className="icon-toggle cursor-point">
            <use xlink:href="#svg-icon-toggle"></use>
          </svg>
        </label> */}

        {/* <!-- navbar-menu --> */}
        <nav className={styles.navbarMenu}>
          <ul className={`${styles.navList} ${styles.siteMenuList} mr-auto`}>
            <Item category='男款'/>
            <Item category='女款'/>
            <Item category='最新消息'/>
            <Item category='客製商品'/>
            <Item category='聯絡我們'/>
          </ul>
          <ul className={`${styles.navList} ${styles.siteActionList}`}>
            {/* <!-- logo --> */}
        <a className={styles.headerLogoContainer} href="#">
          <Logo className="icon-logo cursor-point"/>
        </a>
            {/* <!-- search --> */}
            <li className={styles.navItem}>
              <SearchIcon className={`${styles.navIcon} cursor-point`}/>       
            </li>
            {/* <!-- cart --> */}
            <li className={styles.navItem}>
              <CartIcon className={`${styles.navIcon} cursor-point`}/>
            </li>
            <li id="theme-toggle" className={styles.navItem}>
              {/* <!-- moon --> */}
              <MoonIcon className={`${styles.navIcon} cursor-point`}/>         
              {/* <!-- sun --> */}
              {/* <SunIcon className={`${styles.navIcon} cursor-point`}/> */}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}