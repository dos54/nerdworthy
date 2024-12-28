
import "./globals.css";
import { inter } from '@/app/ui/fonts';
import Nav from "./ui/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Nav />
        <main>
        {children}
        </main>
      </body>
    </html>
  );
}
