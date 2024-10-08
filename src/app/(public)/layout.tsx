"use client";
import { useAuthContext } from "@/context/auth-context";
import { redirect } from "next/navigation";
import { CustomLoading } from "../../components/custom-loading";
import { useRedirectTo } from "@/hooks/useRedirectTo";
import { ThemeToggle } from "@/components/theme-toggle";
import { useBreakpoints } from "@/hooks/useBreakpoints";
import { When } from "@/components/when";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isMobile } = useBreakpoints();
  const redirectTo = useRedirectTo();
  const { isAuthenticated, isLoading } = useAuthContext();

  if (isLoading) {
    return <CustomLoading isLoading fullScreen />;
  }

  if (isAuthenticated) {
    if (redirectTo) {
      return redirect(redirectTo);
    } else {
      return redirect("/home");
    }
  }

  return (
    <div className="flex justify-center max-w-max-screen mx-auto border-r">
      {/* <ThemeToggle className="absolute top-5 right-5" /> */}
      <When condition={!isMobile}>
        <div className="flex w-full items-center justify-center bg-black">
          <h1 className="text-white">Spend Together</h1>
        </div>
      </When>
      <div className={`w-full max-w-[512px] ${!isMobile ? "border-l" : ""}`}>
        <div className={!isMobile ? "px-[15%]" : "px-[5%]"}>{children}</div>
      </div>
    </div>
  );
}
