// import "./globals.css";
import { Inter } from "next/font/google";
import { Atf_Symbols } from "@/src/components/Common/Atf_Symbols";
import Header from "../components/Common/Header";
import Footer from "../components/Common/footer/Footer";

// Global CSS imports
import "../styles/css/taboola.css";
import "../styles/css/helper.css";

// Context API for Articles for centralized state management

import Global_elements from "../components/Common/global_elements/Global_elements";
import ArticlesContext_server from "../context/ArticlesContext_server";
import FooterLinksContext_server from "../context/FooterLinksContext_server";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--ff-one",
});

// पूरी साइट को noindex करने के लिए यह metadata ऑब्जेक्ट एक्सपोर्ट करें
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
        <ArticlesContext_server>{children}</ArticlesContext_server>
        <FooterLinksContext_server>
          <Footer />
        </FooterLinksContext_server>
        <Global_elements />
      </body>
    </html>
  );
}
