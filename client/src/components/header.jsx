import Styles from '../styles/header.module.css'
import logo from '../assets/logo.png'

function Header() {
    return ( 
       <section className={Styles.mainContainer}>
            <div className={Styles.titleContainer}>
                <img src={logo} alt="" />
                <h1>Anza Group</h1>
            </div>
            <div>
            </div>
            <div className={Styles.sloganContainer}>
                <h2>Transformamos ideas en realidad, llevamos tu empresa al mundo!</h2>
            </div>
            <div className={Styles.buttonsContainer}>
                <button className={Styles.button1}>Quienes Somos</button>
                <button className={Styles.button2}>Mas Informacion</button>
            </div>
       </section>
     );
}

export default Header;