import styles from '../styles/Homepage.module.css'
import Image from "next/image";
import { Collapse, Text } from "@nextui-org/react";


const Homepage = () => {
    return (
        <>
        
            <div className={styles.title}>
                <p className={styles.text}>PARA QUE NOS <em className={styles.em}>Conozcan...</em></p>
            </div>

            <div className={styles.container}>
                <Collapse.Group
                  css={{
                    color: "#FFF7E9",
                    textAlign:"center"

                }}>

                    <Collapse className={styles.ave} title="Quienes comos?">
                    {/* <span className={styles.ave}>Quienes comos?</span> */}
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.
                        </Text>
                    </Collapse>
                    <Collapse title="Que tecnologias usamos?" expanded>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.
                        </Text>
                    </Collapse>
                    <Collapse  title="Que funcionalidad tiene este campus">
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.
                        </Text>
                    </Collapse>
                </Collapse.Group>
            </div>
            
            <br></br>
            
        </>

    )
}
export default Homepage;