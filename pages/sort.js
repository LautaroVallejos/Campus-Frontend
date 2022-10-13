import { fetcher } from "../lib/api";
import { Table, useAsyncList, useCollator } from "@nextui-org/react";

const Tabla = ( {estudiantes} ) => {
    const columns = [
        { name: "Nombre", uid: "nombre" },
        { name: "Apellido", uid: "apellido" },
        { name: "Edad", uid: "edad" },
        { name: "Email", uid: "email" },
        { name: "Contacto Tutor", uid: "contactoTutor" },
        { name: "Obra Social", uid: "obraSocial" },
        { name: "Nro Obra Social", uid: "numObraSocial" },
        { name: "DNI", uid: "DNI" },
      ];

    
    console.log({estudiantes})
    const listaEstudiantes = useAsyncList(load);
        
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

                <Table.Body
                    items={listaEstudiantes.items}
                    loadingState={listaEstudiantes.loadingState}
                    onLoadMore={listaEstudiantes.loadMore}
                    estudiantes={estudiantes}
                >

                    <Table.Row>
                        <Table.Cell>
                            Testing
                        </Table.Cell>
                        <Table.Cell>
                            Testing
                        </Table.Cell>
                        <Table.Cell>
                            Testing
                        </Table.Cell>
                        <Table.Cell>
                            Testing
                        </Table.Cell>
                        <Table.Cell>
                            Testing
                        </Table.Cell>
                        <Table.Cell>
                            Testing
                        </Table.Cell>
                        <Table.Cell>
                            Testing
                        </Table.Cell>
                        <Table.Cell>
                            Testing
                        </Table.Cell>
                    </Table.Row>

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

                </Table.Body>
            </Table>
        )

}

async function load({signal, cursor}) {
    const res = fetch('http://localhost:1337/api/estudiantes');
    const estudiantes = await res.json();
    return {
        props: {
            estudiantes: estudiantes.data
        },
        items: estudiantes.results,
        cursor: estudiantes.next,
    };
}

export default Tabla;