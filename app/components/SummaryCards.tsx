import type { Transaction } from "../lib/types";

export default function SummaryCards({
  transactions,
}: {
  transactions: Transaction[];
}) {
  const receitas = transactions
    .filter((t) => t.type === "receita")
    .reduce((sum, t) => sum + t.amount, 0);

  const despesas = transactions
    .filter((t) => t.type === "despesa")
    .reduce((sum, t) => sum + t.amount, 0);

  const saldo = receitas - despesas;

  const format = (n: number) =>
    n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <div className="rounded-3xl bg-[#4ECDC4]/15 p-6 shadow-[0_4px_20px_rgba(78,205,196,0.15)]">
        <p className="text-sm font-medium text-[#2D3142]/60">Receitas</p>
        <p className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold text-[#2D9C93]">
          {format(receitas)}
        </p>
      </div>

      <div className="rounded-3xl bg-[#FF6B6B]/15 p-6 shadow-[0_4px_20px_rgba(255,107,107,0.15)]">
        <p className="text-sm font-medium text-[#2D3142]/60">Despesas</p>
        <p className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold text-[#E14545]">
          {format(despesas)}
        </p>
      </div>

      <div className="rounded-3xl bg-[#FFD166]/20 p-6 shadow-[0_4px_20px_rgba(255,209,102,0.2)]">
        <p className="text-sm font-medium text-[#2D3142]/60">Saldo</p>
        <p className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold text-[#2D3142]">
          {format(saldo)}
        </p>
      </div>
    </div>
  );
}
