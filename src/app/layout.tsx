import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "./Provider";


export const metadata: Metadata = {
  title: {
    template: "%s - Viajes Lili",
    default: "Viajes Lili",
  },
  description: "Descubre destinos de viaje increíbles y planifica tu próxima aventura con Viajes Lili.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
