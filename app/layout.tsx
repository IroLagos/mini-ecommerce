import type { Metadata } from "next";
import { Nav } from "@/components/navigation";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/stateContext";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <CartProvider>
        <body className={`${inter.className} bg-pink-100 `}>
          <Nav />
          {children}
          <Toaster
            position="bottom-center"
            reverseOrder={false}
            gutter={8}
            containerClassName=""
            containerStyle={{}}
            toastOptions={{
              // Define default options
              className: "",
              duration: 5000,
              style: {
                background: "#363636",
                color: "#fff",
              },

              // Default options for specific types
              success: {
                duration: 3000,
              },
            }}
          />
          <Footer />
        </body>
      </CartProvider>
    </html>
  );
}
