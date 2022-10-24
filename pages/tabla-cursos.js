// Recursos
import { Table, useAsyncList } from "@nextui-org/react";

// Se realiza la peticion al backend
const url = 'http://localhost:1337/api/cursos?populate=*'

// Vista/Página de la Tabla
const Tabla = ({ cursos }) => {
    
    // Columnas
    const columns = [
        { name: "Nombre Del Curso", uid: "nombreCurso" },
        { name: "Año", uid: "ano"},
        { name: "Especialidad", uid: "especialidad" },
        { name: "Preceptor", uid:"preceptor"},
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

    const list = useAsyncList({ cursos }); // Componente de lista asincrono

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
                cursos &&
                    cursos.data.map(curso => {
                        const preceptor = curso.attributes.preceptore.data.attributes.nombre + " " + curso.attributes.preceptore.data.attributes.apellido

                        return(
                            <Table.Row key={curso.id}>
                                <Table.Cell>
                                    {curso.attributes.nombreCurso}
                                </Table.Cell>
                                <Table.Cell>
                                    {curso.attributes.Ano}
                                </Table.Cell>
                                <Table.Cell>
                                    {curso.attributes.especialidad}
                                </Table.Cell>
                                <Table.Cell>
                                    {preceptor}
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
    const cursos = await res.json()

    return {
        props: {
            cursos: cursos,
        }
    }
};

export default Tabla;