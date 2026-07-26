"use client";

import { useState } from "react";
import type { Category, Transaction, TransactionType } from "../lib/types";

const EXPENSE_CATEGORIES: Category[] = [
  "Alimentação",
  "Transporte",
  "Moradia",
  "Lazer",
  "Saúde",
  "Outros",
];

const INCOME_CATEGORIES: Category[] = ["Salário", "Outros"];

export default function TransactionForm({
  onAdd,
}: {
  onAdd: (t: Omit<Transaction, "id">) => void;
}) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState<TransactionType>("despesa");
  const [category, setCategory] = useState<Category>("Alimentação");
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));

  const availableCategories =
    type === "receita" ? INCOME_CATEGORIES : EXPENSE_CATEGORIES;

  function handleTypeChange(newType: TransactionType) {
    setType(newType);
    const options =
      newType === "receita" ? INCOME_CATEGORIES : EXPENSE_CATEGORIES;
    setCategory(options[0]);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const numericAmount = parseFloat(amount.replace(",", "."));
    if (!description.trim() || !numericAmount || numericAmount <= 0) return;

    onAdd({ description, amount: numericAmount, type, category, date });

    setDescription("");
    setAmount("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl bg-white p-6 shadow-[0_4px_20px_rgba(45,49,66,0.06)]"
    >
      <h2 className="font-[family-name:var(--font-display)] text-lg font-bold">
        Nova transação
      </h2>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <input
          type="text"
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="rounded-xl border border-[#2D3142]/10 px-4 py-2.5 outline-none focus:border-[#4ECDC4]"
        />
        <input
          type="text"
          placeholder="Valor (ex: 150,00)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="rounded-xl border border-[#2D3142]/10 px-4 py-2.5 outline-none focus:border-[#4ECDC4]"
        />

        <select
          value={type}
          onChange={(e) => handleTypeChange(e.target.value as TransactionType)}
          className="rounded-xl border border-[#2D3142]/10 px-4 py-2.5 outline-none focus:border-[#4ECDC4]"
        >
          <option value="despesa">Despesa</option>
          <option value="receita">Receita</option>
        </select>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value as Category)}
          className="rounded-xl border border-[#2D3142]/10 px-4 py-2.5 outline-none focus:border-[#4ECDC4]"
        >
          {availableCategories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="rounded-xl border border-[#2D3142]/10 px-4 py-2.5 outline-none focus:border-[#4ECDC4] sm:col-span-2"
        />
      </div>

      <button
        type="submit"
        className="mt-4 w-full rounded-xl bg-[#2D3142] py-3 font-medium text-white transition hover:bg-[#2D3142]/85"
      >
        Adicionar
      </button>
    </form>
  );
}
