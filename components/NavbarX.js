import { Navbar, Link, Text } from "@nextui-org/react";
import Image from "next/image";

const NavbarX = () => {
    const collapseItems = [
        "Estudiantes",
        "Cursos",
        "Preceptores",
        "Profesores"
    ]

    return (
        <Navbar css={{backgroundColor: "blue"}} variant="sticky">
            <Navbar.Brand>
                <Navbar.Toggle aria-label="toggle navigation" style={{marginRight: "5px"}}/>
                <Link href="/">
                    <Image
                        src="/img/jh-logo.png"
                        width={60}
                        height={60}
                        alt="logo-jh"
                        style={{marginLeft: "1px", borderRadius: "50px"}}
                    />
                    <Text b hideIn="xs" style={{ marginLeft: "10px" }}>
                        Campus Virtual JH
                    </Text>
                </Link>

            </Navbar.Brand>
            {/* <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
                <Navbar.Link href="#">Features</Navbar.Link>
                <Navbar.Link href="#">Pricing</Navbar.Link>
                <Navbar.Link href="#">Company</Navbar.Link>
            </Navbar.Content> */}

            <Navbar.Collapse css={{ background: "#1F4690", opacity: ".9" }}>
                <Navbar.CollapseItem css={{ display: "flex", flexDirection: "column", justifyContent: "center" }} key="estudiantes">
                    <Link
                        color="warning"
                        css={{
                            minWidth: "100%",
                            justifyContent: 'center',
                            fontSize: "2em",
                            marginBottom: ".7em"
                        }}
                        href="/tabla-cursos"
                    >
                        Cursos
                    </Link>
          
                    <Link
                        color="warning"
                        css={{
                            minWidth: "100%",
                            justifyContent: 'center',
                            fontSize: "2em",
                            marginBottom: ".7em"
                        }}
                        href="/tabla-preceptores"
                    >
                        Preceptores
                    </Link>
     
                    <Link
                        color="warning"
                        css={{
                            minWidth: "100%",
                            textAlign: "center",
                            justifyContent: 'center',
                            fontSize: "2em",
                            marginBottom: ".7em"
                        }}
                        href="/tabla-estudiantes"
                    >
                        Estudiantes
                    </Link>

                    <Link
                        color="warning"
                        css={{
                            minWidth: "100%",
                            justifyContent: 'center',
                            fontSize: "2em",
                            marginBottom: ".7em"
                        }}
                        href="/tabla-profesores"
                    >
                        Profesores
                    </Link>

                    <Link
                        color="warning"
                        css={{
                            minWidth: "100%",
                            justifyContent: 'center',
                            fontSize: "2em",
                            marginBottom: ".7em"
                        }}
                        href="/tabla-profesores"
                    >
                        Tecnicaturas
                    </Link>

                </Navbar.CollapseItem>
            </Navbar.Collapse>

        </Navbar>
    )
}

export default NavbarX;