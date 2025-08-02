import Breadcrumbs from "@/src/components/Common/Breadcrumbs";
import Lhs_sidebar from "@/src/components/Sidebar/Lhs_sidebar";
import Rhs_sidebar from "@/src/components/Sidebar/Rhs_sidebar";

// Layout
import ThreeColumnLayout from "@/src/components/Layouts/ThreeColumnLayout";

//SEO for Lisiting Page Title and description here
export const metadata = {
  title: "New List", // <title>
  description: "News Listing Will Be Here", //<Description>
};

export default function RootLayout({ children }) {
  return (
    <>
      <Breadcrumbs />
      <ThreeColumnLayout
        leftSidebar={<Lhs_sidebar />}
        rightSidebar={<Rhs_sidebar />}
      >
        {children}
      </ThreeColumnLayout>
    </>
  );
}
