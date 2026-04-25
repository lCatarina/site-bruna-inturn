import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bruna Inturn - Terapia Ocupacional",
  description: "Terapia ocupacional focada em autonomia e qualidade de vida",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className="bg-[#FAF7F2]">{children}</body>
    </html>
  );
}
