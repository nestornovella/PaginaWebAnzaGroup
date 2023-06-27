import Styles from '../styles/services.module.css'
import imagen1 from '../assets/imagenesPersonales/imagen1.jpeg'
import imagen2 from '../assets/imagenesPersonales/imagen2.jpeg'
import imagen3 from '../assets/imagenesPersonales/imagen3.jpeg'
import { useEffect } from 'react';



function Services() {
    

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            console.log(`${entry.target} está visible en la pantalla.`);
            switch (entry.target.id) {
                case 'firstContent':
                    entry.target.className = Styles.imageContainer1
                    break;
                case 'secondContent':
                    entry.target.className = Styles.imageContainer2
                    break
                case 'thirdContent':
                    entry.target.className = Styles.imageContainer3
                    break
                default:
                    break;
            }
          }
        });
      });

      useEffect(()=>{
        const mainContainer = [document.getElementById('firstContent'), document.getElementById('secondContent'), 
        document.getElementById('thirdContent')];
        
        mainContainer.forEach(e => observer.observe(e))
      },[])
    
      

    return (
        <section  className={Styles.mainContainer}>
            <div className={Styles.prologoContainer}>
                <h1>¡ Creamos tu página personal, para que todos conozcan tu empresa, y puedas hacer que tu marca crezca sin límites !
                </h1>
            </div>
            <div className={Styles.imagesContainer}>
                <div id='firstContent'  className={Styles.imageContainer1After}>
                    <img className={Styles.image1} src={imagen1} alt="" />
                </div>
                <div id='secondContent' className={Styles.imageContainer2After}>
                    <img className={Styles.image2} src={imagen2} alt="" />
                </div>
                <div id='thirdContent' className={Styles.imageContainer3After}>
                    <img className={Styles.image3} src={imagen3} alt="" />
                </div>
            </div>


        </section>
    );
}

export default Services;