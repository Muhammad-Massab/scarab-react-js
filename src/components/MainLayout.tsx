import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}
export default function MainLayout({ children }: MainLayoutProps) {
  return <div className="h-screen w-full p-6">{children}</div>;
}
