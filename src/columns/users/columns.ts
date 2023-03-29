import { UserColumn } from "../../interfaces/users/column";

export const userColumns: readonly UserColumn[] = [
  { id: "id", label: "id", minWidth: 170 },
  { id: "firstName", label: "Nombre", minWidth: 170 },
  { id: "lastName", label: "Apellido", minWidth: 100 },
  { id: "email", label: "Email", minWidth: 170 },
  { id: "cell", label: "Celular", minWidth: 170 },
  { id: "address", label: "Dirección", minWidth: 170 },
];
