import type { Metadata } from "next";
import "./app.css";


export const metadata: Metadata = {
  title: "Librindiamaris App",
  description: "a simple app to manage your books",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
