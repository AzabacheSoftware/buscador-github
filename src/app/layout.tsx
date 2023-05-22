import "./globals.css";
import { Roboto_Mono } from "next/font/google";

import Navbar from "@/components/Navbar";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Buscador Usuarios Github",
  description:
    "Buscador de usuarios Github,creado con Next.js, Typescript y Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="">
      <body className={robotoMono.className}>
        <div className="grid min-h-screen place-content-center bg-gray-50 px-4 dark:bg-blue-950">
          <div className="sm:w-[500px] md:w-[600px] lg:w-[700px] ">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
