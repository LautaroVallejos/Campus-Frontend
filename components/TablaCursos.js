import { Table, useAsyncList, useCollator } from "@nextui-org/react";
import { Children } from "react";

// export async function getServerSideProps({ signal }){
//     const collator = useCollator({numeric: true})

//     const res = await fetch(`http://localhost:1337/api/cursos?populate=*`, { 
//             signal 
//         });

//     const json = await res.json()

//     return {
//         props: {
//             cursos: cursos,
//         }
//     }
// };


export default function TablaCursos({items}){
    
    
    async function load({ signal }){
        const collator = useCollator({numeric: true})
        const res = await fetch(`http://localhost:1337/api/cursos?populate=*`, { 
            signal 
        });
        const json = await res.json();

        console.log(json.data)
        // const cursos = json.map(curso => curso)
        // console.log(cursos)

        return {
            props: {
                items: json.data,
            }
        };
    }



    async function sort({ items, sortDescriptor }){
        return {
            items: items.sort((a, b) => {
                let first = a[sortDescriptor.column]
                let second = b[sortDescriptor.column]
                let cmp = collator.compare(first, second);
                if(sortDescriptor.direction === "descending"){
                    cmp *= -1;
                }
    
                return cmp;
            }),
        };
    }
    
    const list = useAsyncList({ load, sort });
    
    const columns = [
        { name: "Nombre Del Curso", uid: "nombreCurso" },
        { name: "Año", uid: "ano"},
        { name: "Especialidad", uid: "especialidad" },
        { name: "Preceptor", uid:"preceptor"},
    ];
    
    return(
        
        
        // Inicio de la Tabla
        <Table
            aria-label="Tabla de cursos"
            css={{ minWidth: "100%", height: "calc($space$14 * 10)"}}
            sortDescriptor={list.sortDescriptor}
            onSortChange={list.sort}    
        >
            {/* Encabezado de la Tabla */}
            <Table.Header columns={columns}>
                        {(column) => (
                            <Table.Column allowsSorting key={column.uid}>{column.name}</Table.Column>
                        )}
            </Table.Header>

            <Table.Body items={list.items} loadingState={list.loadingState}>
                {   
                    items &&
                        items.map(item => {
                            const preceptor = item.attributes.preceptore.data.attributes.nombre + " " + item.attributes.preceptore.data.attributes.apellido

                            return(
                                <Table.Row 
                                    key={item.id}
                                    children={items}
                                    css={{
                                        borderBottom: "1px solid #101010",
                                    }}
                                >
                                    <Table.Cell css={{ color: "#FFF7E9"}}>
                                        
                                    </Table.Cell>
                                    <Table.Cell css={{ color: "#FFF7E9"}}>
                                        {item.attributes.Ano}
                                    </Table.Cell>
                                    <Table.Cell css={{ color: "#FFF7E9"}}>
                                        {item.attributes.especialidad}
                                    </Table.Cell>
                                    <Table.Cell css={{ color: "#FFF7E9"}}>
                                        {preceptor}
                                    </Table.Cell>
                                </Table.Row>
                            )
                    })};
            </Table.Body>
    
        </Table>
    )    
}

