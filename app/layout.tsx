import Head from "./head";
import "../styles/globals.css";
import Header from "./Header";
import { fetchSocialIcons } from "../utils/fetchSocialIcons";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const socialIcons = await fetchSocialIcons();
  return (
    <html lang="en">
      <Head />
      <body>
        <Header socialIcons={socialIcons}  />
        <main>{children}</main>
      </body>
    </html>
  );
};
