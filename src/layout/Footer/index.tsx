import { User } from "@/types/generic";
import {
  ArchiveIcon,
  EllipsisIcon,
  HomeIcon,
  LayoutListIcon,
} from "lucide-react";
import Link from "next/link";

export function Footer({ user }: { user: User }) {
  return (
    <div className="absolute bottom-0 left-0 w-full h-14 shadow-sm border-t py-2 px-8 flex items-center justify-between bg-secondary-foreground rounded-t-2xl text-primary-foreground z-50">
      <Link href="/home" className="flex flex-col items-center justify-center">
        <HomeIcon className="h-5 w-5" />
        <span className="text-xs">Home</span>
      </Link>
      <Link
        href="/spend-control"
        className="flex flex-col items-center justify-center"
      >
        <LayoutListIcon className="h-5 w-5" />
        <span className="text-xs">Controle</span>
      </Link>
      <Link
        href="/archive"
        className="flex flex-col items-center justify-center"
      >
        <ArchiveIcon className="h-5 w-5" />
        <span className="text-xs">Arquivados</span>
      </Link>
      <Link href="/more" className="flex flex-col items-center justify-center">
        <EllipsisIcon className="h-5 w-5" />
        <span className="text-xs">Mais</span>
      </Link>
    </div>
  );
}
