import { CustomListItem } from "@/components/custom-list-item";
import { MenuOption } from "@/types/generic";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";

export function OptionItem(option: MenuOption) {
  return (
    <Link href={option.href ?? ""} onClick={option.onClick}>
      <CustomListItem className="flex-row items-center gap-4 py-4">
        {option.icon}
        <span>{option.name}</span>
        <ChevronRightIcon size={22} className="ml-auto" />
      </CustomListItem>
    </Link>
  );
}
