import styles from '../styles/Tecnicaturas.module.css';
import Image from "next/image";


const Tecnicaturas = ()=>{
    return(
        <div className={styles.contAll}>
            <div className={styles.prog}>
                <div className={styles.imagen}>
                <Image
                    className={styles.Image}
                    src="/img/tprog.png"
                    width={450}
                    height={300}
                    alt="image-prog"
                />
                </div>
                <div className={styles.textProg}>
                    <h2>Técnico en Programación</h2>
                    <hr className={styles.separador}></hr>
                    <p >En la Tecnicatura de Programación estamos capacitados para poder desarrollar y mantener programas de software de complejidad media ya sean sitios web estáticos y/o dinámicos con utilización y manejo de bases de datos, realizar actividades de testeo de software, poder redactar documentación técnica, investigar, analizar y aplicar técnicas actuales de diseño y codificación, investigar y seleccionar herramientas apropiadas para solucionar una determinada problemática, efectuar propuestas, coordinar e implementar soluciones a problemas.</p>
                    <br></br>
                    <p>Palabras del estudiante: La programación es una carrera en la cual se necesita mucha paciencia para sentarse y estar algunas horas para poder realizar algún trabajo, poder buscar documentación y casi toda está en ingles. También tenes que ser bastante autodidacta para poder aprender mas saber que tecnología / lenguaje es mejor para trabajar y al ser una carrera que evoluciona constantemente siempre vas a estar estudiando nuevos lenguajes o funcionalidades nueva.</p>
                </div>
            </div>

            <div className={styles.prog}>
                
                <div className={styles.textProg}>
                    <h2>Técnico en Administracion de las Empresas</h2>
                    <hr className={styles.separador}></hr>
                    <p >En Administración de las Organizaciones al terminar los estudios estamos capacitados para administrar eficientemente y profesionalmente todo tipo de organizaciones con la capacidad de poder adaptarse a los grandes cambios, poder desempeñar funciones en áreas de recursos humanos, ser capaz de seleccionar y utilizar diversos recursos para obtener nuevos resultados en la administración de los elementos organizacionales. Poder tener una actitud critica y flexible a partir del conocimiento y la práctica y poder diseñar propuestas de desarrollo y optimización de sus procesos específicos con adecuada visión contextual.</p>
                    <br></br>
                    <p>Palabras del estudiante: La mayor dificultad que encontré en la carrera es que al momento de hacer libros diarios tenemos que realizar bastantes cuentas y si una sale mal tenes que tener paciencia porque puede que todo el resto esté mal y revisar una por una para ver que esté bien o realizar las cuentas como se deben.</p>
                </div>
                <div className={styles.imagen}>
                <Image
                    className={styles.Image}
                    src="/img/ado.png"
                    width={450}
                    height={300}
                    alt="image-prog"
                />
                </div>
            </div>

            <div className={styles.prog}>
                <div className={styles.imagen}>
                <Image
                    className={styles.Image}
                    src="/img/ipp.png"
                    width={450}
                    height={300}
                    alt="image-prog"
                />
                </div>
                <div className={styles.textProg}>
                    <h2>Técnico en Informática personal y Profesional</h2>
                    <hr className={styles.separador}></hr>
                    <p >Al finalizar los estudios estamos capacitados para poder montar e instalar, operar y mantener los componentes, productos, equipos e instalaciones informáticas y electrónicas y con esto podríamos realizar proyectos, diseños y desarrollos de diversas complejidades y tecnologías, facilitar la operatoria y asesorar al usuario en la operación y aprovechamiento de la funcionalidad de los equipos de programas, mantener la integridad de los datos locales del usuario y la eficiencia de sus acceso. Instalar y poner en marcha equipos de computación y redes.</p>
                    <br></br>
                    <p>Palabras del estudiante: La complejidad que tuve en esta carrera es  que al ver un poco de todo ya sea redes, un poco de diseño web, de seguridad informática, etc es complicado elegir bien que profesión o en qué carrera especializarte, pero a la vez es bueno porque te vas con un poco de conocimiento de todo.</p>
                </div>
            </div>
        </div>

);
}

export default Tecnicaturas