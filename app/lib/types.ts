export type TransactionType = "receita" | "despesa";

export type Category =
  | "Alimentação"
  | "Transporte"
  | "Moradia"
  | "Lazer"
  | "Saúde"
  | "Salário"
  | "Outros";

export type Transaction = {
  id: string;
  description: string;
  amount: number;
  type: TransactionType;
  category: Category;
  date: string;
};