import type { Transaction } from "../lib/types";

const CATEGORY_EMOJI: Record<string, string> = {
  Alimentação: "🍔",
  Transporte: "🚗",
  Moradia: "🏠",
  Lazer: "🎮",
  Saúde: "💊",
  Salário: "💰",
  Outros: "📦",
};

export default function TransactionList({
  transactions,
  onRemove,
}: {
  transactions: Transaction[];
  onRemove: (id: string) => void;
}) {
  const format = (n: number) =>
    n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  const formatDate = (d: string) =>
    new Date(d + "T00:00:00").toLocaleDateString("pt-BR");

  if (transactions.length === 0) {
    return (
      <div className="rounded-3xl bg-white p-10 text-center shadow-[0_4px_20px_rgba(45,49,66,0.06)]">
        <p className="text-[#2D3142]/50">
          Nenhuma transação ainda. Adiciona a primeira aí acima! 👆
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-white p-6 shadow-[0_4px_20px_rgba(45,49,66,0.06)]">
      <h2 className="font-[family-name:var(--font-display)] text-lg font-bold">
        Transações
      </h2>

      <div className="mt-4 flex flex-col divide-y divide-[#2D3142]/8">
        {transactions.map((t) => (
          <div key={t.id} className="flex items-center gap-4 py-3.5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFFBF5] text-lg">
              {CATEGORY_EMOJI[t.category] ?? "📦"}
            </span>

            <div className="min-w-0 flex-1">
              <p className="truncate font-medium">{t.description}</p>
              <p className="text-sm text-[#2D3142]/50">
                {t.category} · {formatDate(t.date)}
              </p>
            </div>

            <p
              className={`shrink-0 font-[family-name:var(--font-display)] font-bold ${
                t.type === "receita" ? "text-[#2D9C93]" : "text-[#E14545]"
              }`}
            >
              {t.type === "receita" ? "+" : "-"} {format(t.amount)}
            </p>

            <button
              onClick={() => onRemove(t.id)}
              className="shrink-0 rounded-full px-2.5 py-1 text-[#2D3142]/30 transition hover:bg-[#FF6B6B]/10 hover:text-[#FF6B6B]"
              aria-label="Remover transação"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
