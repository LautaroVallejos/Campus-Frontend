import { Divider } from "@nextui-org/react";
import Image from "next/image";

import React from "react";
//These are Third party packages for smooth slideshow
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Navbar = () => {
    return (
          // {/* contenedor del navbar */}
      <div>
        <div id="cont-slider" className="cont-navbar">
          <div className="title">
            <Image
              className="logoJh"
              src="/img/jh-logo.png"
              alt="logo"
              width={35}
              height={35}
            />
            <h4 className="title-name">Campus José Hernández</h4>
          </div>
          {/* separador */}
          <hr className="linea"></hr>
        
        {/* contenedor paginas */}
        {/* link de iconos https://iconos8.es/icons/set/estudiantes */}
          <ul>
            <div>

              <div >
                <a href="">
                  <li className="optionAlum">
                  <Image
                    className="ico"
                    src={"/img/alumIcon.png"}
                    width={40}
                    height={40}
                    />
                    <h4 className="option">Datos del estudiante</h4>
                  </li>
                </a>
                </div>

            
                <div >
                <a href="">
                  <li className="optionAlum">
                  <Image
                    className="ico"
                    src={"/img/tablaIco.png"}
                    width={40}
                    height={40}
                    />
                    
                    <h4 className="option">Tabla</h4>
                  </li>
                </a>
                </div>

                <div >
                <a href="">
                  <li className="optionAlum">
                  <Image
                    className="ico"
                    src={"/img/preceIcon.png"}
                    width={40}
                    height={40}
                    />
                    <h4 className="option">Preceptores</h4>
                  </li>
                </a>
                </div>

                <div >
                <a href="">
                  <li className="optionAlum">
                  <Image
                    className="ico"
                    src={"/img/inicioIcon.png"}
                    width={40}
                    height={40}
                    />
                    <h4 className="option">inicio de sesion</h4>
                  </li>
                </a>
                </div>

            </div>
          </ul>
        </div>


        {/* Menu responsive */}

        <div className="menu-responsive">
          <div className="btn-Menu">
            <label className="menu" for="btn-menu">
              <Image
              src="/img/menuIcon.png"
              width={40}
              height={40}
              />Menu</label>
          </div>
          <input type="checkbox" id="btn-menu"/>
            
            <div class="container-menu">
                
              <div class="cont-menu">
                <div className="title">
                  <Image
                    className="logoJh"
                    src="/img/jh-logo.png"
                    alt="logo"
                    width={35}
                    height={35}
                  />
                  <h4 className="title-name">Campus José Hernández</h4>
                </div>
          <ul>
            <div>

              <div >
                <a href="">
                  <li className="optionAlum">
                  <Image
                    className="ico"
                    src={"/img/alumIcon.png"}
                    width={40}
                    height={40}
                    />
                    <h4 className="option">Datos del estudiante</h4>
                  </li>
                </a>
                </div>

            
                <div >
                <a href="">
                  <li className="optionAlum">
                  <Image
                    className="ico"
                    src={"/img/tablaIco.png"}
                    width={40}
                    height={40}
                    />
                    <h4 className="option">Tabla</h4>
                  </li>
                </a>
                </div>

                <div >
                <a href="">
                  <li className="optionAlum">
                  <Image
                    className="ico"
                    src={"/img/preceIcon.png"}
                    width={40}
                    height={40}
                    />
                    <h4 className="option">Preceptores</h4>
                  </li>
                </a>
                </div>

                <div >
                <a href="">
                  <li className="optionAlum">
                  <Image
                    className="ico"
                    src={"/img/inicioIcon.png"}
                    width={40}
                    height={40}
                    />
                    <h4 className="option">inicio de sesion</h4>
                  </li>
                </a>
                </div>

            </div>
          </ul>
                <label for="btn-menu">Cerrar ✖️</label>
              </div>
            </div>
        </div>
      </div>
  )};

export default Navbar;