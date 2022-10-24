// Recursss
import { Table, useAsyncList, css } from "@nextui-org/react";
import Head from 'next/head';
import styles from "../styles/tabla.module.css"

// Se realiza la peticion al backend
let url = 'http://localhost:1337/api/preceptores?populate=*'

// Vista/Página de la Tabla
const Tabla = ({ preceptores }) => {
    
    // Columnas
    const columns = [
        { name: "Nombre Completo", uid: "nombre" },
        { name: "Cursos", uid: "cursos"},
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

    const list = useAsyncList({ preceptores }); // Componente de lista asincrono

    // Tabla de Cursos
    return (
        <>

            <h1 className={styles.title}>Tabla de Preceptores</h1>
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
                    preceptores &&
                        preceptores.data.map(preceptor => {
                            const cursos = preceptor.attributes.cursos.data
                            const listaCursos = cursos.map(curso => {
                                return (
                                    <li>{curso.attributes.nombreCurso}</li>
                                )
                            })

                            return(
                                <Table.Row 
                                    key={preceptor.id}
                                    css={{
                                        borderBottom: "1px solid #101010"
                                    }}
                                >
                                    <Table.Cell 
                                        css={{
                                            color: "#FFF7E9"
                                        }}
                                    >
                                        {preceptor.attributes.nombre + " " + preceptor.attributes.apellido}
                                    </Table.Cell>
                                    <Table.Cell
                                        css={{
                                            color: "#FFF7E9"
                                        }}
                                    >
                                        {listaCursos}
                                    </Table.Cell>
                                    <Table.Cell
                                        css={{
                                            color: "#FFF7E9"
                                        }}
                                    >
                                        {preceptor.attributes.email}
                                    </Table.Cell>
                                </Table.Row>
                            )
                    })};
                </Table.Body>
            </Table>
        </>
    );
}

// Función que realíza la petición y trae los datos del backend
export async function getServerSideProps(){
    const res = await fetch(url);
    const preceptores = await res.json()

    return {
        props: {
            preceptores: preceptores,
        }
    }
};

export default Tabla;