
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
      <body className={`${inter.className} `}>
        <Nav />
        <main className="max-w-screen-2xl mx-4 2xl:mx-auto my-6 md:my-12">
        {children}
        </main>
      </body>
    </html>
  );
}
