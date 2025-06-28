// import "./globals.css";
import { Atf_Symbols } from "@/src/components/Common/Atf_Symbols";
import Header from "@/src/components/Common/Header";
import Footer from "../components/Common/Footer";

// Global CSS imports
import "../styles/css/taboola.css";
import "../styles/css/base/home-header.css";
import "../styles/css/base/base-doctor.css";

// Context API for Articles for centralized state management
import { ArticlesProvider } from "@/src/context/ArticlesContext";
import { FooterLinksProvider } from "@/src/context/FooterLinksContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        <Atf_Symbols />
        <Header />
        <ArticlesProvider>
          {children}
          <FooterLinksProvider>
            <Footer />
          </FooterLinksProvider>
        </ArticlesProvider>
      </body>
    </html>
  );
}
