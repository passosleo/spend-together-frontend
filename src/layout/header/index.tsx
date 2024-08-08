import { CustomAvatar } from "@/components/custom-avatar";
import { When } from "@/components/when";
import { User } from "@/types/generic";
import { BellIcon, ChevronLeftIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export function Header({ user }: { user: User }) {
  const pagesWithBackButton = ["/notifications", "/more"];
  const pathname = usePathname();
  const router = useRouter();
  const showBackButton = pagesWithBackButton.includes(pathname);
  return (
    <div className="fixed w-full h-14 shadow-sm border-b py-2 px-3 flex items-center justify-between bg-background z-50">
      <When
        condition={!showBackButton}
        elseRender={
          <Link href="/notifications">
            <div
              className="text-slate-800 p-2 rounded-full"
              onClick={router.back}
            >
              <ChevronLeftIcon size={26} />
            </div>
          </Link>
        }
      >
        <CustomAvatar
          name={user.name}
          // image={{
          //   src: `https://ui-avatars.com/api/?background=random&name=${user.username}`,
          // }}
          className="h-9 w-9"
        />
      </When>
      <Link href="/notifications">
        <div className="bg-secondary text-slate-800 p-2 rounded-full">
          <BellIcon className="h-5 w-5" />
        </div>
      </Link>
    </div>
  );
}
