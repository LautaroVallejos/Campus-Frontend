// Recursos
import { Table, useAsyncList } from "@nextui-org/react";

// Pagina de Tabla
const Tabla = ({ estudiantes }) => {
    
    // Columnas
    const columns = [
        { name: "Nombre Completo", uid: "nombre" },
        { name: "Curso", uid: "curso"},
        { name: "Email", uid: "email" },
        { name: "Grupo de Taller", uid:"grupoTaller"},
        { name: "DNI", uid: "DNI" },
        { name: "Contacto del Tutor", uid: "contactoTutor"},
        { name: "Obra Social", uid: "obraSocial"}
    ];

    //Funcion de Carga
    async function load({ signal }) {
        // If no cursor is available, then we're loading the first page.
        // Otherwise, the cursor is the next URL to load, as returned from the previous page.
        const res = await fetch(
            cursor || "http://localhost:1337/api/estudiantes",
            { signal }
        );
        const json = await res.json();
        return {
            items: json.results,
            cursor: json.next,
        };
    }

    // Componente de lista asincrono
    const list = useAsyncList({ estudiantes });
    return (
        <Table
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
            items={list.items}
            loadingState={list.loadingState}
            onLoadMore={list.loadMore}
        >
            {   estudiantes &&
                estudiantes.data.map(estudiante => {
                    const curso = estudiante.attributes.curso.data.attributes.nombreCurso

                    return(
                    <Table.Row key={estudiante.id}>
                        <Table.Cell>
                            {estudiante.attributes.nombre + ' ' + estudiante.attributes.apellido}
                        </Table.Cell>
                        <Table.Cell>
                            {curso}
                        </Table.Cell>
                        <Table.Cell>
                            {estudiante.attributes.email}
                        </Table.Cell>
                        <Table.Cell>
                            {estudiante.attributes.grupoTaller}
                        </Table.Cell>
                        <Table.Cell>
                            {estudiante.attributes.DNI}
                        </Table.Cell>
                        <Table.Cell>
                            {estudiante.attributes.contactoTutor}
                        </Table.Cell>
                        <Table.Cell>
                            {estudiante.attributes.obraSocial + " N° " + estudiante.attributes.numObraSocial}
                        </Table.Cell>
                    </Table.Row>
                    )
            })};
        </Table.Body>
    </Table>
  );
}

export async function getServerSideProps(){
    const res = await fetch(`http://localhost:1337/api/estudiantes?populate=*`);
    const estudiantes = await res.json()
    console.log(estudiantes)

    return {
        props: {
            estudiantes: estudiantes,
        }
    }
};

export default Tabla;