// import "./globals.css";
import { Inter } from "next/font/google";
import { Atf_Symbols } from "@/src/components/Common/Atf_Symbols";
import Header from "../components/Common/Header";
import Footer from "../components/Common/footer/Footer";

// Global CSS imports
import "../styles/css/taboola.css";

// Context API for Articles for centralized state management
import Global_elements from "../components/Common/global_elements/Global_elements";
import { ArticlesProvider } from "../Context/ArticlesContext";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--ff-one",
});

// For No Index through all site
export const metadata = {
  robots: {
    index: false,
    follow: false,

    // googleBot: {
    //   index: false,
    //   follow: false,
    //   noimageindex: true,
    //   'max-snippet': -1,
    // },
  },

  // title: "Your Site Title (NoIndex)",
  // description: "This site is currently not intended for search engine indexing.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true" className="">
        <Atf_Symbols />
        <Header />
        <ArticlesProvider>{children}</ArticlesProvider>
        <Footer />
        <Global_elements />
      </body>
    </html>
  );
}
