import { Table, useAsyncList } from "@nextui-org/react";
import fetcher from '../lib/api'

function Tabla({ estudiantes }) {
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

  async function load({ signal, cursor }) {
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

  const list = useAsyncList(load);
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
      <Table.Body 
        items={list.items}
        loadingState={list.loadingState}
        onLoadMore={list.loadMore}
      >
        {estudiantes &&
                    estudiantes.data.map((estudiante) => {
                        return(
                            <li key={estudiante.id}>
                                <a href={`estudiante/` + estudiante.id}>
                                    <h2>Estudiante</h2>
                                    <div>
                                        <h3>Nombre: {estudiante.attributes.nombre}</h3>
                                        <h3>Apellido: {estudiante.attributes.apellido}</h3>
                                        <h3>Edad: {estudiante.attributes.edad}</h3> 
                                        <h3>Email: {estudiante.attributes.email}</h3> 
                                        <h3>Contacto del Tutor: {estudiante.attributes.contactoTutor}</h3> 
                                        <h3>Nro Obra Social: {estudiante.attributes.nroObraSocial}</h3> 
                                        <h3>DNI: {estudiante.attributes.dni}</h3>  
                                    </div>
                                </a>
                            </li>
                        );
                    })}
      </Table.Body>
    </Table>
  );
}

{/* <Table
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
      <Table.Body
        items={list.items}
        loadingState={list.loadingState}
        onLoadMore={list.loadMore}
      >
        {(item) => (
          <Table.Row key={item.name}>
            {(key) => <Table.Cell>{item[key]}</Table.Cell>}
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  ); */}

export default Tabla;