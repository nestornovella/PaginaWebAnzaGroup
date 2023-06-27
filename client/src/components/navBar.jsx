import Styles from '../styles/navbar.module.css'
import logo from '../assets/navLogo.png'

function Navbar() {
    return ( 
        <nav className={Styles.mainContainer}>
            <div className={Styles.logoContainer}>
                <img src={logo} alt="" />
                <h2>Anza</h2>
            </div>
            <div className={Styles.linksContainer}>
                <ul>
                    <li>Nosotros</li>
                    <li>Servicios</li>
                    <li>Planes</li>
                    <li>Contacto</li>
                </ul>
            </div>
            <div className={Styles.lengageContainer}>
                <button>Esp</button>
            </div>
        </nav>
     );
}

export default Navbar;