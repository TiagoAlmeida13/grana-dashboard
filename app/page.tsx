"use client";

import { useTransactions } from "./lib/useTransactions";
import SummaryCards from "./components/SummaryCards";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import CategoryChart from "./components/CategoryChart";

export default function Home() {
  const { transactions, addTransaction, removeTransaction, loaded } =
    useTransactions();

  if (!loaded) return null;

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <div className="mb-10">
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-extrabold">
          Grana 💸
        </h1>
        <p className="mt-1 text-[#2D3142]/60">Suas finanças, sem estresse.</p>
      </div>

      <SummaryCards transactions={transactions} />

      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1.3fr]">
        <div className="flex flex-col gap-6">
          <TransactionForm onAdd={addTransaction} />
          <CategoryChart transactions={transactions} />
        </div>

        <TransactionList
          transactions={transactions}
          onRemove={removeTransaction}
        />
      </div>
    </main>
  );
}
