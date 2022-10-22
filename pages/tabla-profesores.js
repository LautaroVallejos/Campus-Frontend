// Recursss
import { Table, useAsyncList } from "@nextui-org/react";

// Se realiza la peticion al backend
const url = 'http://localhost:1337/api/profesores?populate=*'

// Vista/Página de la Tabla
const Tabla = ({ profesores }) => {
    
    // Columnas
    const columns = [
        { name: "Nombre Completo", uid: "nombre" },
        { name: "Materia", uid: "materia"},
        { name: "Email", uid: "email" },
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

    const list = useAsyncList({ profesores }); // Componente de lista asincrono

    // Tabla de Cursos
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
                profesores &&
                    profesores.data.map(profesor => {

                        return(
                            <Table.Row key={profesor.id}>
                                <Table.Cell>
                                    {profesor.attributes.nombre + " " + profesor.attributes.apellido}
                                </Table.Cell>
                                <Table.Cell>
                                    {profesor.attributes.materia}
                                </Table.Cell>
                                <Table.Cell>
                                    {profesor.attributes.email}
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
    const profesores = await res.json()

    return {
        props: {
            profesores: profesores,
        }
    }
};

export default Tabla;