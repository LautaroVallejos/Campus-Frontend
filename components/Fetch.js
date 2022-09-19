const Estudiantes = ({ estudiantes }) => {
    return (
        <>
            <ul>
                {estudiantes &&
                estudiantes.data.map((estudiante) => {
                    return(
                        <li key={estudiante.data.id}>
                            <a href={`estudiante/` + estudiante.data.id}>
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
                            </a>
                        </li>
                    );
                })}
                {/* <h1>{estudiantes.data.map((estudiante) => estudiante.attributes.nombre)}</h1> */}
                    {/* {console.log(estudiantes.data)} */}
            </ul>
        </>
    );
}

// export async function getStaticProps(){
//     const estudiantes = await fetcher(`https://campus-backend-jh.herokuapp.com/api/estudiantes`);
//     console.log(estudiantes)
//     return {
//         props: {
//             estudiantes: estudiantes.data
//         }
//     }
// }

export default Estudiantes;