import { Table, useAsyncList } from "@nextui-org/react";

function Tabla({ estudiantes }) {
  const columns = [
    { name: "Nombre", uid: "name" },
    { name: "Apellido", uid: "surname" },
    { name: "Edad", uid: "age" },
  ];
//   async function load({ signal, cursor }) {
    // If no cursor is available, then we're loading the first page.
    // Otherwise, the cursor is the next URL to load, as returned from the previous page.
//     const res = await fetch(
//       cursor || "https://campus-backend-jh.herokuapp.com/api/estudiantes",
//       { signal }
//     );
//     const json = await res.json();
//     return {
//       items: json.results,
//       cursor: json.next,
//     };
//   }
  
  return (
    <Table
      bordered
      shadow={false}
      aria-label="Example table with dynamic content & infinity pagination"
      css={{ minWidth: "100%", height: "calc($space$14 * 10)" }}
      color="secondary"
    >
      <Table.Header columns={columns}>
        {(column) => (
          <Table.Column key={column.uid}>{column.name}</Table.Column>
        )}
      </Table.Header>
      <Table.Body>
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
                                        <h3>Nro Obra Social: {estudiante.attributes.nroObraSocial}</h3> 
                                        <h3>DNI: {estudiante.attributes.dni}</h3>  
                                    </div>
                                </a>
                            </li>
                        );
                    })}
      </Table.Body>
    </Table>
  );
}

export async function getStaticProps(){
    const estudiantes = await fetcher(`https://campus-backend-jh.herokuapp.com/api/estudiantes`);
    console.log(estudiantes)
    return {
        props: {
            estudiantes: estudiantes
        }
    }
};

export default Tabla;