export interface UserColumn {
  id: "id" | "firstName" | "lastName" | "email" | "cell" | "address";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}
