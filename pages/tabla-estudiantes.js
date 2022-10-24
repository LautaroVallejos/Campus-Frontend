// Recursos
import { Table, useAsyncList } from "@nextui-org/react";
import Head from 'next/head';
import styles from "../styles/tabla.module.css"

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
        <>
            <h1 className={styles.title}>Tabla de Estudiantes</h1>
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
                                <Table.Row 
                                    key={estudiante.id}
                                    css={{
                                        borderBottom: "1px solid #101010"
                                    }}
                                >
                                    <Table.Cell css={{ color: "#FFF7E9"}}>
                                        {estudiante.attributes.nombre + ' ' + estudiante.attributes.apellido}
                                    </Table.Cell>
                                    <Table.Cell css={{ color: "#FFF7E9" }}>
                                        {curso}
                                    </Table.Cell>
                                    <Table.Cell css={{ color: "#FFF7E9" }}>
                                        {estudiante.attributes.email}
                                    </Table.Cell>
                                    <Table.Cell css={{ color: "#FFF7E9" }}>
                                        {estudiante.attributes.grupoTaller}
                                    </Table.Cell>
                                    <Table.Cell css={{ color: "#FFF7E9" }}>
                                        {estudiante.attributes.DNI}
                                    </Table.Cell>
                                    <Table.Cell css={{ color: "#FFF7E9" }}>
                                        {estudiante.attributes.contactoTutor}
                                    </Table.Cell>
                                    <Table.Cell css={{ color: "#FFF7E9" }}>
                                        {estudiante.attributes.edad}
                                    </Table.Cell>
                                    <Table.Cell css={{ color: "#FFF7E9" }}>
                                        {estudiante.attributes.obraSocial + " N° " + estudiante.attributes.numObraSocial}
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
    const estudiantes = await res.json()

    return {
        props: {
            estudiantes: estudiantes,
        }
    }
};

export default Tabla;