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
    <div>
      <Header user={user} />
      <div className="pt-14 bg-primary-foreground h-svh">{children}</div>
      <TabBar
        options={[
          {
            name: "Home",
            icon: <HomeIcon className="h-5 w-5" />,
            href: "/home",
          },
          {
            name: "Controles",
            icon: <LayoutListIcon className="h-5 w-5" />,
            href: "/spend-control",
          },
          {
            name: "Arquivados",
            icon: <ArchiveIcon className="h-5 w-5" />,
            href: "/spend-control/archived",
          },
          {
            name: "Mais",
            icon: <EllipsisIcon className="h-5 w-5" />,
            href: "/more",
          },
        ]}
      />
    </div>
  );
}
