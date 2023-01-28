// Recursos
import { Table, useAsyncList, Collapse, Checkbox, Input, Button, Avatar } from "@nextui-org/react";
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
            <Collapse title="Filtros" style={{color: "white"}} contentLeft={
                <Avatar
                size="lg"
                src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0iIzE2MjEzZSI+PC9wYXRoPjxnPjxyZWN0IHg9IjQiIHk9IjUiIHRyYW5zZm9ybT0ic2NhbGUoMy41ODMzMywzLjU4MzMzKSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjUiIGZpbGw9IiM2YzE5ZmYiPjwvcmVjdD48cGF0aCBkPSJNMTcuOTE2NjcsMTcuOTE2NjdsNTMuNzUsNzUuMjVoMjguNjY2NjdsNTMuNzUsLTc1LjI1eiIgZmlsbD0iIzZjMTlmZiI+PC9wYXRoPjxwYXRoIGQ9Ik0xNDEuMjg3MjUsMzUuODMzMzNsMTIuNzk2MDgsLTE3LjkxNjY3aC0xMzYuMTY2NjdsMTIuNzk2MDgsMTcuOTE2Njd6IiBmaWxsPSIjMjEwMGM0Ij48L3BhdGg+PHBhdGggZD0iTTg2LDE1NC4wODMzM2gtMTQuMzMzMzN2LTYwLjkxNjY3aDI4LjY2NjY3djQ2LjU4MzMzYy01LjU5NzE3LDUuNTk3MTcgLTguNzM2MTcsOC43MzYxNyAtMTQuMzMzMzMsMTQuMzMzMzN6IiBmaWxsPSIjNmMxOWZmIj48L3BhdGg+PC9nPjwvZz48L3N2Zz4="
                color="secondary"
                bordered
              />
            }>
                <h2 style={{textAlign: "center"}}>Proximamente...</h2>
                <div className={styles.filter_container}>
                    <Checkbox onFocus={filtrar()} color='warning' labelColor='warning'>Filtrar por Nombre Completo</Checkbox>
                    <Checkbox color='warning' labelColor='warning'>Filtrar por Año</Checkbox>
                    <Checkbox color='warning' labelColor='warning'>Filtrar por Curso</Checkbox>
                    <Checkbox color='warning' labelColor='warning'>Filtrar por Email</Checkbox>
                    <Checkbox color='warning' labelColor='warning'>Filtrar por Grupo de Taller</Checkbox>
                    <Checkbox color='warning' labelColor='warning'>Filtrar por Edad</Checkbox>
                </div>
                
                <div className={styles.input_container}>
                    <center>
                        <Input underlined placeholder='Buscar' css={{background: '#202020'}} size='xl' status='error'></Input>
                        <Button size='lg' status="waring" css={{marginTop: ".6em"}}>Filtrar</Button>
                    </center>
                </div>
            </Collapse>
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

export async function filtrar(options){

}

export default Tabla;