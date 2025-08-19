import React from "react";

// Layout Components
import DynamicBreadcrumbs from "@/src/components/Common/DynamicBreadcrumbs";
import ThreeColumnLayout from "@/src/components/Layouts/ThreeColumnLayout";
import Lhs_sidebar from "@/src/components/Sidebar/Lhs_sidebar";
import Rhs_sidebar from "@/src/components/Sidebar/Rhs_sidebar";

// Category Article Layout
export default async function CategoryArticleLayout({ children, params }) {
  const { category } = await params;

  console.log("CategoryArticleLayout - Category:", category);

  return (
    <>
      <DynamicBreadcrumbs category={category} />
      <ThreeColumnLayout
        leftSidebar={<Lhs_sidebar />}
        rightSidebar={<Rhs_sidebar />}
      >
        {children}
      </ThreeColumnLayout>
    </>
  );
}
