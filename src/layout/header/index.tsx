import { CustomAvatar } from "@/components/custom-avatar";
import { When } from "@/components/when";
import { User } from "@/types/generic";
import { BellIcon, ChevronLeftIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export function Header({ user }: { user: User }) {
  const pagesWithBackButton = ["/notifications", "/more", "/spend-controls/*"];
  const pathname = usePathname();
  const router = useRouter();
  const showBackButton = pagesWithBackButton.some((page) =>
    new RegExp(page.replace("*", ".*")).test(pathname)
  );
  return (
    <div className="fixed w-full h-14 shadow-sm border-b py-2 px-3 flex items-center justify-between bg-background z-50">
      <When
        condition={!showBackButton}
        elseRender={
          <div
            className="text-slate-800 p-2 rounded-full"
            onClick={() => router.back()}
          >
            <ChevronLeftIcon size={26} />
          </div>
        }
      >
        <CustomAvatar name={user.name} className="h-9 w-9" />
      </When>
      <Link href="/notifications">
        <div className="bg-secondary text-slate-800 p-2 rounded-full">
          <BellIcon className="h-5 w-5" />
        </div>
      </Link>
    </div>
  );
}
