
import "./../styles/globals.css";


import Header from "../components/header/Header";

import { tiktokSans } from "./../utils/fonts";
import Sidebar from "../components/sidebar/Sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Fcore',
  description: 'Fcore — студия разработки, которая создает уникальные сайты и приложения, адаптированные под ваши нужды. Доверьтесь нам, и мы поможем вам достичь новых высот!',
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <body >
        <div className={tiktokSans.className}>
          <div >
            <Header />
            <Sidebar />
            {children}
          </div>
        </div>
    </body>
    </html>
  );
}
