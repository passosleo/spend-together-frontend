import { CustomAvatar } from "@/components/CustomAvatar";
import { User } from "@/types/generic";
import { BellIcon } from "lucide-react";
import Link from "next/link";

export function Header({ user }: { user: User }) {
  return (
    <div className="fixed w-full h-14 shadow-sm border-b py-2 px-3 flex items-center justify-between bg-background z-50">
      <CustomAvatar
        name={user.name}
        // image={{
        //   src: `https://ui-avatars.com/api/?background=random&name=${user.username}`,
        // }}
        className="h-9 w-9"
      />
      <Link href="/notifications">
        <div className="bg-secondary text-slate-800 p-2 rounded-full">
          <BellIcon className="h-5 w-5" />
        </div>
      </Link>
    </div>
  );
}
