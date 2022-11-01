import styles from '../styles/Homepage.module.css'
import Image from "next/image";


const Homepage = () => {
    return(
        <>
        
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.accordion}>
                        <div className={styles.accordionItem} id="question1">
                            <a className={styles.accordionLink} href="#question1">
                            Por que lo hicimos?
                                <Image className={styles.imgAdd}
                                    src="/img/max.png"
                                    alt="logo"
                                    width={20}
                                    height={20}
                                    />
                                    <Image className={styles.imgMin}
                                    src="/img/menos.png"
                                    alt="logo"
                                    width={20}
                                    height={20}
                                    />
                            </a>
                            <div className={styles.answer}>
                                <p>
                                es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
                                </p>
                            </div>
                        </div>

                        <div className={styles.accordionItem} id="question2">
                            <a className={styles.accordionLink} href="#question2">
                                 Como lo hicimos?
                                <Image className={styles.imgAdd}
                                    src="/img/max.png"
                                    alt="logo"
                                    width={20}
                                    height={20}
                                    />
                                    <Image className={styles.imgMin}
                                    src="/img/menos.png"
                                    alt="logo"
                                    width={20}
                                    height={20}
                                    />
                            </a>
                            <div className={styles.answer}>
                                <p>
                                es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
                                </p>
                            </div>
                        </div>

                        <div className={styles.accordionItem} id="question3">
                            <a className={styles.accordionLink} href="#question3">
                                Para que sirve?
                                <Image className={styles.imgAdd}
                                    src="/img/max.png"
                                    alt="logo"
                                    width={20}
                                    height={20}
                                    />
                                    <Image className={styles.imgMin}
                                    src="/img/menos.png"
                                    alt="logo"
                                    width={20}
                                    height={20}
                                    />
                            </a>
                            <div className={styles.answer}>
                                 <p>
                                 es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
                                </p>
                            </div>
                        </div>

                    </div>

                    
                </div>
            </section>
        </>
    )
}
export default Homepage;