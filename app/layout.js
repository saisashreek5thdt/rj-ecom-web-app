import { Jost } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";

const jostSans = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

export const metadata = {
  title: "RJ EComm Web App",
  description: "RJ Ecommerce Web Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jostSans.variable} antialiased select-none`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
