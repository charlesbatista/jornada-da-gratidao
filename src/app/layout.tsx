import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jornada da Transformação",
  description: "Sua jornada de transformação pessoal e crescimento.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className="antialiased font-system"
      >
        {children}
      </body>
    </html>
  );
}
