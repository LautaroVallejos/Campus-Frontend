import { fetcher } from '../lib/api'
import Estudiantes from '../components/Fetch' 
import Tabla from '../components/Table'

const Fetch = ({estudiantes}) => {
    return(
        <div className="container">
            <span>
            {estudiantes &&
                estudiantes.data.map((estudiante) => {
                    return(
                        <li key={estudiante.id}>
                            <a href={`estudiante/` + estudiante.id}>
                                <h2>Estudiante</h2>
                                <div>
                                    <h3>Nombre: {estudiante.attributes.nombre}</h3>
                                    <h3>Apellido: {estudiante.attributes.apellido}</h3>
                                    <h3>Edad: {estudiante.attributes.edad}</h3> 
                                    <h3>Email: {estudiante.attributes.email}</h3> 
                                    <h3>Contacto del Tutor: {estudiante.attributes.contactoTutor}</h3> 
                                    <h3>Obra Social: {estudiante.attributes.obraSocial}</h3>
                                    <h3>Nro Obra Social: {estudiante.attributes.numObraSocial}</h3> 
                                    <h3>DNI: {estudiante.attributes.dni}</h3>  
                                </div>
                            </a>
                        </li>
                    );
                })}
            </span>

            <Tabla/>
        </div>
    )
}
export default Fetch;

export async function getStaticProps(){
    const estudiantes = await fetcher('http://localhost:1337/api/estudiantes');
    console.log(estudiantes)
    return {
        props: {
            estudiantes: estudiantes
        }
    }
};