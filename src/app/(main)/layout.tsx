import Footer from "@/components/footer/page";
import Header from "@/components/header/page";
import { log } from "console";
import React from "react";

const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  log("Layout Rendered");
  return (
    <html>
      <body className={`p-1 sm:p-2 md:p-3 lg:p-4 overflow-x-hidden`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
