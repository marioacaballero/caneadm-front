"use client";

import StickyHeadTable from "@/components/StickyHeadTable";
import { userColumns } from "@/columns/users/columns";
import { GET_ALL_USERS } from "@/constants/url";

export default function Users() {
  return (
    <>
      <h1>Lista de Clientes</h1>
      <StickyHeadTable url={GET_ALL_USERS} columns={userColumns} />
    </>
  );
}
