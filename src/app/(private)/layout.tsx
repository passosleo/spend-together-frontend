"use client";

import { useAuthContext } from "@/context/auth-context";
import { CustomLoading } from "../../components/custom-loading";
import { redirect, usePathname } from "next/navigation";
import { TabBar } from "@/layout/tab-bar";
import {
  ArchiveIcon,
  CircleDollarSignIcon,
  EllipsisIcon,
  HandCoinsIcon,
  HomeIcon,
  LayoutListIcon,
} from "lucide-react";
import { useVerifyEmailDrawer } from "@/layout/verify-email-drawer/hooks/useVerifyEmailDrawer";
import { Header } from "@/layout/header";
import { AddButton } from "@/layout/add-button";
import { useCustomDrawer } from "@/components/custom-drawer/hooks/useCustomDrawer";
import { CreateSpendControlDrawer } from "@/layout/create-spend-control-drawer";
import { VerifyEmailDrawer } from "@/layout/verify-email-drawer";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { isAuthenticated, isLoading, user } = useAuthContext();
  const verifyEmailDrawer = useVerifyEmailDrawer();
  const createSpendControlDrawer = useCustomDrawer();

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
            href: "/spend-controls",
            onClick: () => onEmailUnverified(),
          },
          {
            name: "Arquivados",
            icon: <ArchiveIcon size={22} />,
            href: "/spend-controls/archived",
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
      <AddButton
        onClick={() => onEmailUnverified()}
        options={[
          {
            name: "Incluir uma despesa",
            icon: <CircleDollarSignIcon size={20} />,
            onClick: () => onEmailUnverified(),
          },
          {
            name: "Criar um novo controle",
            icon: <HandCoinsIcon size={20} />,
            onClick: () => createSpendControlDrawer.open(),
          },
        ]}
      />
      <CreateSpendControlDrawer
        open={createSpendControlDrawer.isOpen}
        onCancel={createSpendControlDrawer.close}
        onOpenChange={createSpendControlDrawer.handle}
      />
      <VerifyEmailDrawer
        user={user}
        open={verifyEmailDrawer.isOpen}
        onConfirm={verifyEmailDrawer.close}
        onOpenChange={verifyEmailDrawer.handle}
      />
    </div>
  );
}
