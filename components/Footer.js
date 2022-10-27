import styles from '../styles/Footer.module.css'
import Image from "next/image";
const Footer = () => {
    return(
        <>
            <footer className={styles.container}>
                <div style={{maxWidth: '100%'}}>
                    <div>
                        <div className={styles.data}>
                            <div className={styles.items}>
                                <div>
                                {/*<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z"/></svg>
                                {/* <FontAwesomeIcon icon="fa-light fa-location-dot" /> */}
                                <div>
                                <Image
                                src="/img/MapaIcon.png"
                                alt="logo"
                                width={35}
                                height={35}
                                />
                                    <h4><a href='https://www.google.com/maps/dir/-34.6942996,-58.3374685/tecnica+7+jose+hernandez/@-34.6784563,-58.3662761,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x95a33351d983fa69:0x35e88ee685a84dd5!2m2!1d-58.3640341!2d-34.6618536'>Ubicacion</a></h4>
                                    <span><a href='https://www.google.com/maps/dir/-34.6942996,-58.3374685/tecnica+7+jose+hernandez/@-34.6784563,-58.3662761,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x95a33351d983fa69:0x35e88ee685a84dd5!2m2!1d-58.3640341!2d-34.6618536'>Ing. Marconi 745</a></span>
                                </div>
                                </div>
                            </div>
                            <div className={styles.items2}>
                                <div >
                                <i />
                                <Image
                                src="/img/CorreoIcon.png"
                                alt="logo"
                                width={35}
                                height={35}
                                />
                                <div>
                                    <h4><a href="tel:+5442014180">Contacto Telefonico</a></h4>
                                    <span><a href="tel:+5442014180">4201-4180</a></span>
                                </div>
                                </div>
                            </div>
                            <div className={styles.items}>
                                <div>
                                <i />
                                <div >
                                <Image
                                src="/img/TelefonoIcon.png"
                                alt="logo"
                                width={35}
                                height={35}
                                />
                                    <h4><a href='mailto:josehernandez@tecnica7.edu.ar'>Email Oficial</a></h4>
                                    <span><a href='mailto:josehernandez@tecnica7.edu.ar'>josehernandez@tecnica7.edu.ar</a></span>
                                </div>
                                </div>
                            </div>
                            
                        </div>

                    </div>
                    <hr className='hr'></hr>
                    <div >
                    <div  className={styles.copy}>
                                    <p><strong>Avila Nicolas, Cordon Alejo, Ramos Thiago, Rarug Francisco, Vallejos Lautaro</strong></p>
                                </div>
                    <div  className={styles.copy}>
                                    <p><em>Copyright © 2022, All Right Reserved</em></p>
                                </div>            
                    
                    </div>
                </div>
            </footer>
        </>
    )
};
export default Footer;