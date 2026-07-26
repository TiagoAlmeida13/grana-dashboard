"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import type { Transaction } from "../lib/types";

const COLORS = [
  "#FF6B6B",
  "#4ECDC4",
  "#FFD166",
  "#8785A2",
  "#F79256",
  "#59A96A",
  "#2D3142",
];

export default function CategoryChart({
  transactions,
}: {
  transactions: Transaction[];
}) {
  const despesas = transactions.filter((t) => t.type === "despesa");

  const grouped = despesas.reduce<Record<string, number>>((acc, t) => {
    acc[t.category] = (acc[t.category] ?? 0) + t.amount;
    return acc;
  }, {});

  const data = Object.entries(grouped).map(([category, value]) => ({
    name: category,
    value,
  }));

  if (data.length === 0) {
    return (
      <div className="flex h-full items-center justify-center rounded-3xl bg-white p-10 text-center shadow-[0_4px_20px_rgba(45,49,66,0.06)]">
        <p className="text-[#2D3142]/50">
          Adiciona despesas pra ver o gráfico por categoria. 📊
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-white p-6 shadow-[0_4px_20px_rgba(45,49,66,0.06)]">
      <h2 className="font-[family-name:var(--font-display)] text-lg font-bold">
        Despesas por categoria
      </h2>

      <div className="mt-2 h-72">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius={55}
              outerRadius={90}
              paddingAngle={2}
            >
              {data.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value) =>
                typeof value === "number"
                  ? value.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })
                  : value
              }
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
