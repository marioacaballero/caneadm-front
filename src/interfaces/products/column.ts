export interface ProductColumn {
  id: "id" | "name" | "price" | "stock";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}
