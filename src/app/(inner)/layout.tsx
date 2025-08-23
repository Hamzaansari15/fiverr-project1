import InnerFooter from "@/components/footer/InnerFooter";
import InnerHeader from "@/components/header/InnerHeader";
import React from "react";

const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <html lang="en">
      <body
        className={`relative overflow-x-hidden flex flex-col items-center justify-center`}
      >
        <InnerHeader />
        {children}
        <InnerFooter />
      </body>
    </html>
  );
};

export default Layout;
