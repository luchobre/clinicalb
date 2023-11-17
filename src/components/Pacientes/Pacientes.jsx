import React, { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Tooltip,
} from "@nextui-org/react";
import { DeleteIcon } from "./DeleteIcon";
import axios from "axios";
import ModalWindowPac from "../ModalPacientes/ModalWindowPac";
import ModalEditPac from "../ModalEditPacientes/ModalEditPac"
import Banner from '../Banner/Banner'

const columns = [
  { name: "ID", uid: "id" },
  { name: "Avatar", uid: "avatar" },
  { name: "Nombre", uid: "nombre" },
  { name: "Apellido", uid: "apellido" },
  { name: "Dirección", uid: "direccion" },
  { name: "Localidad", uid: "localidad" },
  { name: "Provincia", uid: "provincia" },
  { name: "Telefono", uid: "telefono" },
  { name: "Dni", uid: "dni" },
  { name: "Acciones", uid: "actions" },
];

export default function Pacientes() {
  const [pacientes, setPacientes] = useState([]);


  const cargarPacientes = () => {
    axios
    .get("https://apiclinicalb-dev-zspj.4.us-1.fl0.io/pacientes")
    .then((response) => {
      setPacientes(response.data);
    })
    .catch((error) => {
      console.error("Error al obtener datos de pacientes: " + error);
    });
  }
  
  useEffect(() => {
    cargarPacientes();
  }, []);


  const renderCell = React.useCallback((paciente, columnKey) => {
    const cellValue = paciente[columnKey];

    const deletePaciente = (id) => {
        axios.delete(`https://apiclinicalb-dev-zspj.4.us-1.fl0.io/pacientes/${id}`)
        .then((response) => {
          console.log(`El paciente con el id ${id} fue eliminado exitosamente`)
          cargarPacientes();
        })
      .catch ((error)=> {
        console.log('Error al eliminar el paciente', error);
      })
    }

    switch (columnKey) {
      case "id":
        return <span>{cellValue}</span>;
      case "avatar":
        return (
          <User avatarProps={{ radius: "lg", src: cellValue }}>
            <img src={cellValue} alt="Avatar" />
          </User>
        );
      case "nombre":
      case "apellido":
      case "direccion":
      case "localidad":
      case "provincia":
      case "telefono":
      case "dni":
        return <span>{cellValue}</span>;
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Editar paciente">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <ModalEditPac 
                listaDePacientes = {paciente}
                cargarPacientes={cargarPacientes}
                />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Eliminar paciente">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon onClick={()=> deletePaciente(paciente.id)} />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <>
      <Table isStriped aria-label="Tabla de Pacientes">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={pacientes}>
          {(paciente) => (
            <TableRow key={paciente.id}>
              {(columnKey) => (
                <TableCell>{renderCell(paciente, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
      <ModalWindowPac 
      cargarPacientes={cargarPacientes}/>
      <Banner />
    </>
  );
}