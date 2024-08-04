"use client";

import { useAuthContext } from "@/context/AuthContext";
import { CustomLoading } from "../../components/CustomLoading";
import { redirect, usePathname } from "next/navigation";
import { Header } from "@/layout/Header";
import { TabBar } from "@/layout/TabBar";
import {
  ArchiveIcon,
  EllipsisIcon,
  HomeIcon,
  LayoutListIcon,
} from "lucide-react";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { isAuthenticated, isLoading, user } = useAuthContext();

  if (isLoading) {
    return <CustomLoading isLoading fullScreen />;
  }

  if (!isAuthenticated) {
    return redirect(`/sign-in?redirectTo=${pathname}`);
  }

  return (
    <div className="flex flex-col h-full">
      <Header user={user} />
      <div className="flex-grow overflow-auto bg-primary-foreground mt-14 mb-14">
        {children}
      </div>
      <TabBar
        options={[
          {
            name: "Home",
            icon: <HomeIcon size={22} />,
            href: "/home",
          },
          {
            name: "Controles",
            icon: <LayoutListIcon size={22} />,
            href: "/spend-control",
          },
          {
            name: "Arquivados",
            icon: <ArchiveIcon size={22} />,
            href: "/spend-control/archived",
          },
          {
            name: "Mais",
            icon: <EllipsisIcon size={22} />,
            href: "/more",
          },
        ]}
      />
    </div>
  );
}
