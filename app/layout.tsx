import Head from "./head";
import "../styles/globals.css";
import Header from "./Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head />
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
};
