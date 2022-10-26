import { Navbar, Button, Link, Text } from "@nextui-org/react";
import Image from "next/image";
import Logo from './logoJH'

const NavbarX = () => {
    return (
        <Navbar isBordered variant="sticky">
            <Navbar.Brand children='../public/img/jh-logo.png'>
                <Navbar.Toggle aria-label="toggle navigation" style={{marginRight: "5px"}}/>
                {/* insertar logo aqui */}
                <Image
                    src="/img/jh-logo.png"
                    width={60}
                    height={60}
                    style={{marginLeft: "1px", borderRadius: "50px"}}
                />
                <Text b color="inherit" hideIn="l" style={{marginLeft: "10px"}}>
                    Campus Virtual JH
                </Text>
            </Navbar.Brand>
        </Navbar>
    )
}

export default NavbarX;