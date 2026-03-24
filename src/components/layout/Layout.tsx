import HeaderRefined from "./HeaderRefined";
import FooterRefined from "./FooterRefined";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-base-black min-h-screen text-white selection:bg-lime-primary selection:text-black">
      <HeaderRefined />
      <main>
        {children}
      </main>
      <FooterRefined />
    </div>
  );
}
