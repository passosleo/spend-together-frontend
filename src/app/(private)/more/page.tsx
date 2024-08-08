"use client";
import { CustomList } from "@/components/custom-list";
import {
  BellIcon,
  CircleHelp,
  InfoIcon,
  LogOutIcon,
  SettingsIcon,
  StarIcon,
  UserIcon,
  UserPlusIcon,
} from "lucide-react";
import { OptionItem } from "./components/option-item";
import { useAuthContext } from "@/context/auth-context";
import { CustomAvatar } from "@/components/custom-avatar";

export default function MorePage() {
  const { logout, user } = useAuthContext();
  return (
    <>
      <div className="flex gap-4 items-center bg-primary text-primary-foreground p-4 select-none">
        <CustomAvatar name={user.name} />
        <div>
          <p className="font-medium">{user.name}</p>
          <p>@{user.username}</p>
        </div>
      </div>
      <CustomList
        data={[
          {
            name: "Meu perfil",
            icon: <UserIcon size={22} />,
            href: "/profile",
          },
          {
            name: "Convites",
            icon: <UserPlusIcon size={22} />,
            href: "/spend-control/invites",
          },
          {
            name: "Notificações",
            icon: <BellIcon size={22} />,
            href: "/notifications",
          },
          {
            name: "Quero ser premium",
            icon: <StarIcon size={22} />,
            href: "/premium",
          },
          {
            name: "Preferências",
            icon: <SettingsIcon size={22} />,
            href: "/settings",
          },
          {
            name: "Ajuda e suporte",
            icon: <CircleHelp size={22} />,
            href: "/help",
          },
          {
            name: "Termos de uso",
            icon: <InfoIcon size={22} />,
            href: "/privacy-policy",
          },
          {
            name: "Sair",
            icon: <LogOutIcon size={22} />,
            onClick: () => logout(),
          },
        ]}
        renderItem={(option) => <OptionItem {...option} />}
      />
    </>
  );
}
