// Recursos
import { Table, useAsyncList } from "@nextui-org/react";

// Se realiza la peticion al backend
let url = 'http://localhost:1337/api/estudiantes?populate=*'

// Vista/Página de la Tabla
const Tabla = ({ estudiantes }) => {
    
    // Columnas
    const columns = [
        { name: "Nombre Completo", uid: "nombre" },
        { name: "Curso", uid: "curso"},
        { name: "Email", uid: "email" },
        { name: "Grupo de Taller", uid:"grupoTaller"},
        { name: "DNI", uid: "DNI" },
        { name: "Contacto del Tutor", uid: "contactoTutor"},
        { name: "Edad", uid: "edad" },
        { name: "Obra Social", uid: "obraSocial"}
    ];

    //Funcion de Carga
    async function load({ signal, cursor }) {
        // If no cursor is available, then we're loading the first page.
        // Otherwise, the cursor is the next URL to load, as returned from the previous page.
        const res = await fetch(
            cursor || url,
            { signal }
        );
        const json = await res.json();
        return {
            items: json.results,
            cursor: json.next,
        };
    }

    const list = useAsyncList({ estudiantes }); // Componente de lista asincrono

    // Tabla de Estudiantes
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
                {   
                estudiantes &&
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
                                    {estudiante.attributes.edad}
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

// Función que realíza la petición y trae los datos del backend
export async function getServerSideProps(){
    const res = await fetch(url);
    let estudiantes = await res.json()
    let send = true
    let field = 'nombre'
    let value = '7'

    if(send === true){
        url = `http://localhost:1337/api/estudiantes?populate=*&filters[${field}][$contains]=${value}`
        
        const resfilter = await fetch(url)
        estudiantes = await resfilter.json()

        return {
            props: {
                estudiantes: estudiantes,
            }
        }    

    }

    return {
        props: {
            estudiantes: estudiantes,
        }
    }
};

export default Tabla;