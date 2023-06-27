import Styles from '../styles/logo.module.css'
import logo from '../assets/logoGeneration/logo.jpeg'
import logo1 from '../assets/logoGeneration/remera.jpeg'
import logo2 from '../assets/logoGeneration/letrero.jpeg'
import logo3 from '../assets/logoGeneration/redes.jpeg'
import { useEffect } from 'react'





// Importa todas las imágenes de la carpeta "assets"
function Logo() {


    const observer = new IntersectionObserver(entries => {
        entries.forEach(entrie => {
            if (entrie.isIntersecting) {
                entrie.target.className = Styles.prologoContainerVisible
            }
        })
    })


    useEffect(() => {
        const imageContainer = document.getElementById('textContainer')
        observer.observe(imageContainer)
    }, [])

    return (
        <section className={Styles.mainContainer}>
 
                <div id='imageContainerLogo' className={Styles.imagesContainer}>
                    <div><img src={logo} alt="" /></div>
                    <div><img src={logo1} alt="" /></div>
                    <div><img src={logo2} alt="" /></div>
                    <div><img src={logo3} alt="" /></div>
                </div>
            <div id='textContainer' className={Styles.prologoContainer}>
                <h1> No tenes Logo, Creamos tu marca unica y personalziada, logos increibles que destaquen tu empresa sobre las demas! </h1>
            </div>
        </section>
    );
}

export default Logo;