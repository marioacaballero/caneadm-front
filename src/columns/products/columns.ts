import { ProductColumn } from "@/interfaces/products/column";

export const productColumns: readonly ProductColumn[] = [
  { id: "id", label: "id", minWidth: 170 },
  { id: "name", label: "Nombre", minWidth: 170 },
  { id: "price", label: "Precio", minWidth: 100 },
  { id: "stock", label: "Stock", minWidth: 170 },
];
