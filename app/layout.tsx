import type { Metadata } from "next";
import { Baloo_2, Inter } from "next/font/google";
import "./globals.css";

const baloo = Baloo_2({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Grana — Suas finanças, sem estresse",
  description: "Dashboard de finanças pessoais com controle de receitas, despesas e categorias.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${baloo.variable} ${inter.variable} antialiased bg-[#FFFBF5] text-[#2D3142]`}>
        {children}
      </body>
    </html>
  );
}