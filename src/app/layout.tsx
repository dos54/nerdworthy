
import "./globals.css";
import Nav from "./navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>
        {children}
        </main>
      </body>
    </html>
  );
}
