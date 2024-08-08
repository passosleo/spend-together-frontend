"use client";

import { useAuthContext } from "@/context/auth-context";
import { CustomLoading } from "../../components/custom-loading";
import { redirect, usePathname } from "next/navigation";
import { TabBar } from "@/layout/tab-bar";
import {
  ArchiveIcon,
  EllipsisIcon,
  HomeIcon,
  LayoutListIcon,
} from "lucide-react";
import { VerifyEmail } from "@/components/verify-email";
import { useVerifyEmailDrawer } from "@/components/verify-email/hooks/useVerifyEmailDrawer";
import { Header } from "@/layout/header";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { isAuthenticated, isLoading, user } = useAuthContext();
  const verifyEmailDrawer = useVerifyEmailDrawer();

  if (isLoading) {
    return <CustomLoading isLoading fullScreen />;
  }

  if (!isAuthenticated) {
    return redirect(`/sign-in?redirectTo=${pathname}`);
  }

  function onEmailUnverified() {
    if (!user?.emailVerified) verifyEmailDrawer.open();
  }

  return (
    <div className="flex flex-col h-full">
      <Header user={user} />
      <div
        className="overflow-auto bg-primary-foreground pt-14"
        style={{ height: "calc(100vh - 56px)" }}
      >
        {children}
      </div>
      <TabBar
        options={[
          {
            name: "Home",
            icon: <HomeIcon size={22} />,
            href: "/home",
            onClick: () => onEmailUnverified(),
          },
          {
            name: "Controles",
            icon: <LayoutListIcon size={22} />,
            href: "/spend-control",
            onClick: () => onEmailUnverified(),
          },
          {
            name: "Arquivados",
            icon: <ArchiveIcon size={22} />,
            href: "/spend-control/archived",
            onClick: () => onEmailUnverified(),
          },
          {
            name: "Mais",
            icon: <EllipsisIcon size={22} />,
            href: "/more",
            onClick: () => onEmailUnverified(),
          },
        ]}
      />
      <VerifyEmail
        user={user}
        isOpen={verifyEmailDrawer.isOpen}
        onClose={verifyEmailDrawer.close}
      />
    </div>
  );
}
