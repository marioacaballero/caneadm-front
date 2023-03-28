"use client";

import StickyHeadTable from "@/components/StickyHeadTable";
import { columns } from "@/columns/users/columns";

export default function Users() {
  return (
    <>
      <h1>Lista de Clientes</h1>
      <StickyHeadTable
        url="http://localhost:3001/api/v1/user"
        columns={columns}
      />
    </>
  );
}
