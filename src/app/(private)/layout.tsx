"use client";

import { useAuthContext } from "@/context/AuthContext";
import { CustomLoading } from "../../components/CustomLoading";
import { redirect, usePathname } from "next/navigation";
import { Header } from "@/layout/Header";
import { Footer } from "@/layout/Footer";

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
      <Footer user={user} />
    </div>
  );
}
