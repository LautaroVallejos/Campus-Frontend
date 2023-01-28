import styles from '../styles/Tecnicaturas.module.css';
import Image from "next/image";


const Tecnicaturas = ()=>{
    return(
        <div className={styles.contAll}>
            <div className={styles.prog}>
                <Image
                    className={styles.Image}
                    src="/img/prog.png"
                    width={350}
                    height={200}
                    alt="image-prog"
                />
                <div className={styles.textProg}>
                    <h2>Tecnico en Programacion</h2>
                    <p>En la tecnicatura de programación estamos capacitados para poder desarrollar y mantener programas de software de complejidad media ya sean sitios web estáticos y/o dinámicos con utilización y manejo de bases de datos, realizar actividades testeo de software, poder redactar documentación técnica, investigar, analizar y aplicar técnicas actuales de diseño y codificación, investigar y seleccionar herramientas apropiadas para solucionar una determinada problemática y proponer propuestas coordinar e implementar soluciones a problemas.</p>
                    <br></br>
                    <p>Palabras del estudiante: La programacion es una carrera la cual se necesita mucha paciencia para sentarse y estar algunas horas para poder realizar algún trabajo poder buscar documentación y casi toda esta en ingles también tenes que ser bastante autodidacta para poder aprender mas saber que tecnología / lenguaje es mejor para trabajar y al ser una carrera que evoluciona constantemente siempre vas a estar estudiando nuevos lenguajes o funcionalidades nueva.</p>
                </div>
            </div>

            <div className={styles.prog}>
                <div className={styles.textProg}>
                    <h2>Tecnico en administracion de las empresas</h2>
                    <p>En administración de las organizaciones al terminar los estudios estará capacitado para administrar eficientemente y profesionalmente en todo tipo de organizaciones con la capacidad de poder adaptarse a los grandes cambios, poder desempeñar funciones en áreas de recursos humanos, ser capaz de seleccionar y utilizar diversos recursos para obtener nuevos resultados en la administración de los elementos organizacionales, Poder tener una actitud critica y flexible a partir del conocimiento y la practica y poder diseñar propuestas de desarrollo y optimización de sus procesos específicos con adecuada visión contextual.</p>
                    <br></br>
                    <p>Palabras del estudiante:</p>
                </div>
                <Image
                    className={styles.Image}
                    src="/img/prog.png"
                    width={350}
                    height={200}
                    alt="image-ado"
                />
            </div>

            <div className={styles.prog}>
                <Image
                    className={styles.Image}
                    src="/img/prog.png"
                    width={350}
                    height={200}
                    alt="image-ipp"
                />
                <div className={styles.textProg}>
                    <h2>Tecnico en informatica personal y profecional</h2>
                    <p>Al finalizar estaríamos capacitados para poder montar e instalar, operar y mantener los componentes, productos, equipos e instalaciones informáticas y electrónicas y con esto podríamos realizar proyectos, diseños y desarrollos de diversas complejidades y tecnologías, facilitar la operatoria y asesorar al usuario en la operación y aprovechamiento de la funcionalidad de los equipos de programas mantener la integridad de los datos locales del usuario y la eficiencia de sus acceso, Instalar y poner en marcha equipos de computación y redes.</p>
                    <br></br>
                    <p>Palabras del estudiante: La complejidad que tuvo en esta carrera es  que al ver un poco de todo ya sea redes, un poco de diseño web, de seguridad informática, etc es complicado elegir bien que profesional o carrera especializarte pero a la vez es buena porque te vas con un poco de conocimiento de todo.</p>
                </div>
            </div>
        </div>

);
}

export default Tecnicaturas