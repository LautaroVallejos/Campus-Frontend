import { fetcher } from '../lib/api'

const Fetch = ({ estudiante }) => {
    return(
        <div className="container">
            <h1>Testeando pagina</h1>
            <h2>Estudiante</h2>
            <div>
                <h3>Nombre: {estudiante.data.attributes.nombre}</h3>
                <h3>Apellido: {estudiante.data.attributes.apellido}</h3>
                <h3>Edad: {estudiante.data.attributes.edad}</h3> 
                <h3>Email: {estudiante.data.attributes.email}</h3> 
                <h3>Contacto del Tutor: {estudiante.data.attributes.contactoTutor}</h3> 
                <h3>Nro Obra Social: {estudiante.data.attributes.nroObraSocial}</h3> 
                <h3>DNI: {estudiante.data.attributes.dni}</h3>  
            </div>
        </div>
    )
}
export default Fetch;

export async function getStaticProps(){
    const { data, meta } = await fetcher(`https://campus-backend-jh.herokuapp.com/api/estudiantes/1`);
    console.log({data, meta})
    return {
        props: {
            estudiante: {data, meta}
        }
    }
}