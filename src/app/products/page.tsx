"use client";

import StickyHeadTable from "@/components/StickyHeadTable";
import { productColumns } from "@/columns/products/columns";
import { GET_ALL_PRODUCTS } from "@/constants/url";

export default function Products() {
  return (
    <>
      <h1>Lista de Productos</h1>
      <StickyHeadTable url={GET_ALL_PRODUCTS} columns={productColumns} />
    </>
  );
}
