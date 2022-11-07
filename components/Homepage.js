import styles from '../styles/Homepage.module.css'
import Image from "next/image";


const Homepage = () => {
    /*Error en vincular el java script a SOLUCIONAR*/
    
    /*var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }*/
    return (
        <>
            <div className={styles.title}>
                <p className={styles.text}>PARA QUE NOS <em className={styles.em}>Conozcan...</em></p>
            </div>
            <div className={styles.container}>
                <button className={styles.collapsible}>Quienes somos?</button>
                <div className={styles.content}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>

                <button className={styles.collapsible}>Que tecnologias usamos para el campus?</button>
                <div className={styles.content}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <button className={styles.collapsible}>Que funcionalidad tiene este campus?</button>
                <div className={styles.content}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
            <br></br>
        </>

    )
}
export default Homepage;