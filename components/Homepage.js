import styles from '../styles/Homepage.module.css'
import { Collapse, Text } from "@nextui-org/react";
import { Image } from '@nextui-org/react';
import { Card, Grid, Row } from "@nextui-org/react";


const Homepage = () => {

    const list = [
        {
            title: "Java script",
            img: "/img/javascript.jpg",
        },
        {
            title: "Next Js",
            img: "/img/next.jpeg",
        },
        {
            title: "Node Js",
            img: "/img/nodejs.jpg",

        },
        {
            title: "Strapi",
            img: "/img/strapi.jpg",
        }
 
    ];

    return (
        <>
            <hr className={styles.hr}></hr>
            <div className={styles.container2}>
                <h4 className={styles.hover1}>Mas informacion...</h4>
            </div>
            <div className={styles.container}>
                <Collapse.Group
                    css={{
                        color: "#FFF7E9",
                        textAlign: "center"

                    }}>

                    <Collapse className={styles.titulo} title="¿Que objetivo tiene el campus?">
                        {/* <span className={styles.ave}>Quienes comos?</span> */}
                        <Text css={{
                            backgroundColor: "rgb(217, 217, 217)",
                            textAlign: "center",
                            overflow: "hidden",
                            padding: "0px 18px",
                            textTransform: "none",
                            fontSize: "1.3em",
                            paddingTop:"30px",
                            paddingBottom:"30px",

                        }}>

                            <strong> El objetivo del campus es funcionar como una herramienta academica mas para los alumnos y personal de la escuela, 
                                    facilitando ciertos procesos como obtencion de la informacion de los alumnos en momentos criticos o mismo para facilitar las labores administrativas.
                                    En resumen el objetivo es que el campus funcione como una herramienta adyacente que ayude a los alummnos, personal docente y administrativo a tener un mejor y mas sencillo desarrollo de sus labores</strong>
                        </Text>
                    </Collapse>
                    
                    <Collapse className={styles.titulo} title="¿Que se espera del campus a futuro?"expanded>
                        <Text css={{
                            backgroundColor: "rgb(217, 217, 217)",
                            textAlign: "center",
                            overflow: "hidden",
                            padding: "0px 18px",
                            textTransform: "none",
                            fontSize: "1.3em",
                            paddingTop:"30px",
                            paddingBottom:"30px"
                        }}>
                            <strong>Del campus esperamos que en un futuro se puedan seguir elaborando funcionalidades por los alumnos de las siguientes generaciones, que sea algo que les sirva para poder aprender distintas tecnologias, para saber como trabajar en equipo y poder seguir elaborandola mas para que en un futuro sea un sistema que realmente se pueda usar en el colegio.</strong>
                        </Text>
                    </Collapse>
                    <Collapse className={styles.titulo} title="¿Como nos nacio la idea de hacer el campus?">
                        <Text css={{
                            backgroundColor: "rgb(217, 217, 217)",
                            textAlign: "center",
                            overflow: "hidden",
                            padding: "0px 18px",
                            textTransform: "none",
                            width: "100%",
                            fontSize: "1.3em",
                            paddingTop:"30px",
                            paddingBottom:"30px"
                        }}>
                            <strong>La idea del campus surgio al saber que teniamos que realizar un proyecto. Nos pusimos a pensar que es lo que podiamos hacer, algo que no este hecho ya en nuestra escuela y algo que tenga una funcionalidad a futuro. Entonces nos surgio la idea de hacer un campus virtual, ya que en los 7 años que llevamos en el colegio sentiamos la falta de un sistema hecho por los alumnos para el colegio, para que todo sea mas organizado y simple para el personal docente, administrativo y para los alumnos.</strong>
                        </Text>
                    </Collapse>
                </Collapse.Group>
            </div>

           
            {/*<div className={styles.title}>
                <p className={styles.text}>Lenguajes que utilizamos</p>
            </div>*/}
            <hr className={styles.hr}></hr>
             <div className={styles.container2}>
                <h4 className={styles.hover2}>Tecnologias utilizadas...</h4>
            </div>
            <br></br>
            <Grid.Container gap={2} justify="flex-start">
                {list.map((item, index) => (
                    <Grid xs={6} sm={3} key={index}>
                        <Card isPressable>
                            <Card.Body css={{ p: 0 }}>
                                <Card.Image
                                    src={item.img}
                                    objectFit="cover"
                                    width="100%"
                                    height={140}
                                    alt={item.title}
                                />
                            </Card.Body>
                            <Card.Footer css={{ justifyItems: "flex-start" }}>
                                <Row wrap="wrap" justify="space-between" align="center">
                                    <Text b>{item.title}</Text>
                                    <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                                        {item.price}
                                    </Text>
                                </Row>
                            </Card.Footer>
                        </Card>
                    </Grid>
                ))}
            </Grid.Container>






            <br></br>

        </>

    )
}
export default Homepage;