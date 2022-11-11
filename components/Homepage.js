import styles from '../styles/Homepage.module.css'
import Image from "next/image";
import { Collapse, Text } from "@nextui-org/react";
import { Card, Grid, Row } from "@nextui-org/react";


const Homepage = () => {

    const list = [
        {
            title: "Java script",
            img: "https://soyhorizonte.com/wp-content/uploads/2020/10/Javascript-by-SoyHorizonte.jpg",
        },
        {
            title: "Next Js",
            img: "/images/fruit-2.jpeg",
        },
        {
            title: "Node Js",
            img: "/images/fruit-3.jpeg",

        },
        {
            title: "Lemon",
            img: "/images/fruit-4.jpeg",
        },
        {
            title: "Avocado",
            img: "/images/fruit-5.jpeg",

        },
        {
            title: "Lemon 2",
            img: "/images/fruit-6.jpeg",
        },
        {
            title: "Banana",
            img: "/images/fruit-7.jpeg",
        },
        {
            title: "Watermelon",
            img: "/images/fruit-8.jpeg",

        },
    ];

    return (
        <>
            <div className={styles.container2}>
                <h4 className={styles.hover1}>Mas informacion...</h4>
            </div>
            <div className={styles.container}>
                <Collapse.Group
                    css={{
                        color: "#FFF7E9",
                        textAlign: "center"

                    }}>

                    <Collapse className={styles.titulo} title="Quienes comos?">
                        {/* <span className={styles.ave}>Quienes comos?</span> */}
                        <Text css={{
                            backgroundColor: "rgb(217, 217, 217)",
                            textAlign: "center",
                            overflow: "hidden",
                            padding: "0px 18px",
                            textTransform: "none",
                            fontSize: "1vw",

                        }}>

                            <strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.</strong>
                        </Text>
                    </Collapse>
                    <Collapse className={styles.titulo} title="Que tecnologias usamos?" expanded>
                        <Text css={{
                            backgroundColor: "rgb(217, 217, 217)",
                            textAlign: "center",
                            overflow: "hidden",
                            padding: "0px 18px",
                            textTransform: "none",
                            fontSize: "1vw"
                        }}>
                            <strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.</strong>
                        </Text>
                    </Collapse>
                    <Collapse className={styles.titulo} title="Que funcionalidad tiene este campus">
                        <Text css={{
                            backgroundColor: "rgb(217, 217, 217)",
                            textAlign: "center",
                            overflow: "hidden",
                            padding: "0px 18px",
                            textTransform: "none",
                            width: "100%",
                            fontSize: "1vw"
                        }}>
                            <strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.</strong>
                        </Text>
                    </Collapse>
                </Collapse.Group>
            </div>

           
            {/*<div className={styles.title}>
                <p className={styles.text}>Lenguajes que utilizamos</p>
            </div>*/}
             <div className={styles.container2}>
                <h4 className={styles.hover2}>Lenguajes usados...</h4>
            </div>
            <br></br>
            <Grid.Container gap={2} justify="flex-start">
                {list.map((item, index) => (
                    <Grid xs={6} sm={3} key={index}>
                        <Card isPressable>
                            <Card.Body css={{ p: 0 }}>
                                <Card.Image
                                    src={"https://nextui.org" + item.img}
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