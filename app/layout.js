import localFont from "next/font/local";
import "./globals.css";
import SessionProvider from '@/util/SessionProvider';
import { getServerSession } from "next-auth";
import ReactToastify from "@/components/react-toastify";
import NavBar from "@/components/NavBar";
import Sidebar from "@/components/Sidebar";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProvider session={session}>
        <NavBar />
          <div className="flex gap-1">
            <div className="w-[20%] bg-teal-50 justify-center items-center">
              <Sidebar />
            </div>
            <div className="w-[80%] ">
              {children}
            </div>
          </div>
          <ReactToastify />
        </SessionProvider>
      </body>
    </html>
  );
}
