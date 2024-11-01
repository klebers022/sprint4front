import Cabecalho from "@/components/cabecalho";
import Rodape from "@/components/rodape";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HelpCar",
  description: "Sua oficina mecânica online",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body suppressHydrationWarning={true}>
        <Cabecalho />
        {children}
        <Rodape />
      </body>
    </html>
  );
}
