// import "./globals.css";
import { Inter } from "next/font/google";
import { Atf_Symbols } from "@/src/components/Common/Atf_Symbols";
import Header from "../components/Common/Header";
import Footer from "../components/Common/footer/Footer";

// Global CSS imports
import "../styles/css/taboola.css";
import "../styles/css/base/home-header.css";
import "../styles/css/base/base-doctor.css";

// Context API for Articles for centralized state management
import { ArticlesProvider } from "@/src/context/ArticlesContext";
import { FooterLinksProvider } from "@/src/context/FooterLinksContext";
import Global_elements from "../components/Common/global_elements/Global_elements";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--ff-one",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true" className="">
        <Atf_Symbols />
        <Header />
        <ArticlesProvider>{children}</ArticlesProvider>
        <FooterLinksProvider>
          <Footer />
        </FooterLinksProvider>
        <Global_elements />
      </body>
    </html>
  );
}
