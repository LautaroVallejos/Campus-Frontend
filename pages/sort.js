import { fetcher } from "../lib/api";
import { Table, useAsyncList } from "@nextui-org/react";

const Tabla = () => {
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

      async function load({signal, cursor}) {
        const res = fetcher('http://localhost:1337/api/estudiantes')
        return {
            items: res.results,
            cursor: res.next
        };
    }

    const estudiantes = useAsyncList(load);
        
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

                <Table.Body>

                </Table.Body>
            </Table>
        )

}

export default Tabla;