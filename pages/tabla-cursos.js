// Recursos
import '../public/icons/filter.png'
import React, { useState, useEffect} from 'react';
import { Table, useAsyncList, Collapse, Avatar, Radio, Input, Button } from "@nextui-org/react";
import styles from "../styles/tabla.module.css";
import { useRouter } from 'next/router';

// Se realiza la peticion al backend
let url = 'http://localhost:1337/api/cursos?populate=*'

// Función que realíza la petición y trae los datos del backend
export async function getInitialProps(context){
    const res = await fetch(url);
    const cursos = await res.json()

    
    return {
        props: {
            cursos: cursos,
        }
    }
};


// funcion en trabajo
const filtrar = async (event) => {
    try {
        event.preventDefault();
        console.log(clases)

        // Toma los valores de entrada
        let input = event.target.input.value;
        let filter = event.target.filterField.value;
        
        // Realiza la peticion al backend 
        const res = await fetch(`http://localhost:1337/api/cursos?filters[${filter}][$contains]=${input}`)
        const cursos = await res.json()
        
        setClases(cursos)

        return{
            props: {
                cursos: cursos,
            }
        }
        
    } catch (error) {
        console.log(error)
    }
}

// useEffect(() => filtrar, [])

// Funcion que funca
export async function eventHandler(event) {
    let input = event.target.input.value;
    let filter = event.target.filterField.value;

    const res = await fetch(`http://localhost:1337/api/cursos?filters[${filter}][$contains]=${input}`)
    const newCursos = res.json();
    
    event.preventDefault();
    
    alert(`Input ingresado: ${input} \nFiltrar por: ${filter}`);
    
    return {
        props: {
            newCursos: newCursos,
        }
    }
}

// Vista/Página de la Tabla
const Tabla = ({ cursos, newCursos }) => {

    
    
    
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
    
    const list = useAsyncList({ cursos, newCursos}); // Componente de lista asincrono

    // Tabla de Cursos
    return (
        <>
        <h3>{newCursos}</h3>
            <h1 className={styles.title}>Tabla de Cursos</h1>
            <Collapse title="Filtros" style={{color: "white"}} contentLeft={
                <Avatar
                size="lg"
                src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0iIzE2MjEzZSI+PC9wYXRoPjxnPjxyZWN0IHg9IjQiIHk9IjUiIHRyYW5zZm9ybT0ic2NhbGUoMy41ODMzMywzLjU4MzMzKSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjUiIGZpbGw9IiM2YzE5ZmYiPjwvcmVjdD48cGF0aCBkPSJNMTcuOTE2NjcsMTcuOTE2NjdsNTMuNzUsNzUuMjVoMjguNjY2NjdsNTMuNzUsLTc1LjI1eiIgZmlsbD0iIzZjMTlmZiI+PC9wYXRoPjxwYXRoIGQ9Ik0xNDEuMjg3MjUsMzUuODMzMzNsMTIuNzk2MDgsLTE3LjkxNjY3aC0xMzYuMTY2NjdsMTIuNzk2MDgsMTcuOTE2Njd6IiBmaWxsPSIjMjEwMGM0Ij48L3BhdGg+PHBhdGggZD0iTTg2LDE1NC4wODMzM2gtMTQuMzMzMzN2LTYwLjkxNjY3aDI4LjY2NjY3djQ2LjU4MzMzYy01LjU5NzE3LDUuNTk3MTcgLTguNzM2MTcsOC43MzYxNyAtMTQuMzMzMzMsMTQuMzMzMzN6IiBmaWxsPSIjNmMxOWZmIj48L3BhdGg+PC9nPjwvZz48L3N2Zz4="
                color="secondary"
                bordered
              />
            }>
                <h2 style={{textAlign: "center"}}>Filtrar por..</h2>
                    <form method='post' onSubmit={eventHandler}>
                        <div className={styles.filter_container}>
                            <Radio.Group name='filterField' orientation="horizontal" defaultValue="nombre">
                                <Radio labelColor='warning' value="nombreCurso" color='warning'>Nombre del Curso</Radio>
                                <Radio labelColor='warning' value="Ano" color='warning'>Año</Radio>
                                <Radio labelColor='warning' value="especialidad" color='warning'>Especialidad</Radio>
                                <Radio labelColor='warning' value="preceptor" color='warning'>Preceptor</Radio>
                            </Radio.Group>
                        </div>
                        
                        <div className={styles.input_container}>
                                    <Input name='input' type="text" underlined placeholder='Buscar' css={{background: '#202020'}} size='xl' status='error'></Input>
                                    <Button type='submit' className='submit' size='lg' status="waring" css={{marginTop: ".6em"}}>Filtrar</Button>
                        </div>
                    </form>
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
                    cursos &&
                        cursos.data.map(curso => {
                            const preceptor = curso.attributes.preceptore.data.attributes.nombre + " " + curso.attributes.preceptore.data.attributes.apellido

                            return(
                                <Table.Row 
                                    key={curso.id}
                                    css={{
                                        borderBottom: "1px solid #101010",
                                    }}
                                >
                                    <Table.Cell css={{ color: "#FFF7E9"}}>
                                        {curso.attributes.nombreCurso}
                                    </Table.Cell>
                                    <Table.Cell css={{ color: "#FFF7E9"}}>
                                        {curso.attributes.Ano}
                                    </Table.Cell>
                                    <Table.Cell css={{ color: "#FFF7E9"}}>
                                        {curso.attributes.especialidad}
                                    </Table.Cell>
                                    <Table.Cell css={{ color: "#FFF7E9"}}>
                                        {preceptor}
                                    </Table.Cell>
                                </Table.Row>
                            )
                    })};
                </Table.Body>
            </Table>
        </>
    );
}

export default Tabla;