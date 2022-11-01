import styles from '../styles/home.css'
import Image from "next/image";


const Home = () => {
    return(
        <>
        
            <section>
                <div className={styles.container}>
                    <div className={styles.accordion}>
                        <div className={styles.accordion-item} id="question1">
                            <a className={styles.accordion-link} href="#question1">
                                holanda
                                <Image
                                    src="/img/max.png"
                                    alt="logo"
                                    width={35}
                                    height={35}
                                    />
                                    <Image
                                    src="/img/menos.png"
                                    alt="logo"
                                    width={35}
                                    height={35}
                                    />
                            </a>
                            <div className={styles.answer}>
                                <p>
                                    JOASPDSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                                </p>
                            </div>
                        </div>

                        <div className={styles.accordion-item} id="question2">
                            <a className={styles.accordion-link} href="#question2">
                                holanda
                                <Image className={styles.img-add}
                                    src="/img/max.png"
                                    alt="logo"
                                    width={35}
                                    height={35}
                                    />
                                    <Image className={styles.img-min}
                                    src="/img/menos.png"
                                    alt="logo"
                                    width={35}
                                    height={35}
                                    />
                            </a>
                            <div className={styles.answer}>
                                <p>
                                    JOASPDSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                                </p>
                            </div>
                        </div>

                        <div className={styles.accordion-item} id="question3">
                            <a className={styles.accordion-link} href="#question3">
                                holanda
                                <Image
                                    src="/img/max.png"
                                    alt="logo"
                                    width={35}
                                    height={35}
                                    />
                                    <Image
                                    src="/img/menos.png"
                                    alt="logo"
                                    width={35}
                                    height={35}
                                    />
                            </a>
                            <div className={styles.answer}>
                                 <p>
                                    JOASPDSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                                </p>
                            </div>
                        </div>

                    </div>

                    
                </div>
            </section>
        </>
    )
}
export default Home;