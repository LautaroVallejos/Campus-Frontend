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
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.</p>
                </div>
            </div>

            <div className={styles.prog}>
                <div className={styles.textProg}>
                    <h2>Tecnico en administracion de las empresas</h2>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.</p>
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
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.</p>
                </div>
            </div>
        </div>

);
}

export default Tecnicaturas