import { Table, useAsyncList } from "@nextui-org/react";
import { fetcher } from '../lib/api'
function Tabla({ estudiantes, curso }) {
  const columns = [
    { name: "Nombre Completo", uid: "nombre" },
    { name: "Curso", uid: "curso"},
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

  const list = useAsyncList({ estudiantes, curso });
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
        {estudiantes &&
          estudiantes.data.map(estudiante => {
            const curso = estudiante.attributes.curso.data.attributes.nombreCurso
            console.log(curso)

            return(
              <Table.Row key={estudiante.id}>
                  <Table.Cell>
                    {estudiante.attributes.nombre + ' ' + estudiante.attributes.apellido}
                  </Table.Cell>
                  <Table.Cell>
                    {curso}
                  </Table.Cell>
                  <Table.Cell>
                    {estudiante.attributes.edad}
                  </Table.Cell>
                  <Table.Cell>
                    {estudiante.attributes.email}
                  </Table.Cell>
                  <Table.Cell>
                    {estudiante.attributes.contactoTutor}
                  </Table.Cell>
                  <Table.Cell>
                    {estudiante.attributes.obraSocial}
                  </Table.Cell>
                  <Table.Cell>
                    {estudiante.attributes.numObraSocial}
                  </Table.Cell>
                  <Table.Cell>
                    {estudiante.attributes.DNI}
                  </Table.Cell>
              </Table.Row>
            )
          })};
      </Table.Body>
    </Table>
  );
}
export default Tabla;

export async function getServerSideProps(){
    const res = await fetch(`http://localhost:1337/api/estudiantes?populate=*`);
    estudiantes = res.json()
    console.log(estudiantes)
    return {
        props: {
            estudiantes: estudiantes,
            // curso: estudiantes.data.attributes.curso.data.attributes.nombreCurso
        }
    }
};
