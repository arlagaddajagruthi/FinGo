import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const inter=Inter({subsets:["latin"]});
export const metadata = {
  title: "FinGo",
  description: "A Financial Track",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        {/* header tags-children is kept inside the main to get the accesibility */}
        {/* main tag helps the search interns to know the wharere teh amin body of the website lies */}
        <Header/>
        <main className="min-h-screen">
        {children} 
        </main>
        <Toaster richColors/>
      <footer className="bg-pink-50 py-12">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>
          made with love for Dad
          </p>
        </div>
      </footer>
      </body>
    </html>
  </ClerkProvider>
  );
}
