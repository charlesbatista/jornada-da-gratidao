import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "./contexts/AuthContext";
import AuthModal from "./components/AuthModal";
import AuthIndicator from "./components/AuthIndicator";

export const metadata: Metadata = {
  title: "Jornada da Gratidão",
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
        <AuthProvider>
          <AuthModal />
          <AuthIndicator />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
