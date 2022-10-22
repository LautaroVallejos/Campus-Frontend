import { Divider } from "@nextui-org/react";
import Image from "next/image";

// var check = document.getElementById("Menu")
function MenuF() {
  if (document.getElementById("Menu").checked) {
    const menu=document.getElementById("cont-slider").style.display="block";
  }
  else{
    const menu1=document.getElementById("cont-slider").style.display="hidden";
  }
}


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

        <div className="menu-responsive">
          <input type={"checkbox"} id="Menu" Click={MenuF} ></input>
          <label for="Menu">
          <Image
          className="Icon-menu"
          src={"/img/menuIcon.png"}
          width={60}
          height={60}
          
          />
          </label>
        </div>

      
      </div>
  )};

export default Navbar;