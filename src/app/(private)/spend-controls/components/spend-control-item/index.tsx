import { formatCurrency } from "@/utils/currency";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { UserIcon, UsersIcon } from "lucide-react";
import { CustomListItem } from "@/components/custom-list-item";
import { When } from "@/components/when";
import { SpendControl } from "../../types";

export function SpendControlItem(spendControl: SpendControl) {
  return (
    <Link href={`/spend-controls/${spendControl.spendControlId}`} passHref>
      <CustomListItem className="flex-row items-center">
        <span
          className="w-2 h-10 mr-2"
          style={{ backgroundColor: spendControl.color, borderRadius: 4 }}
        />
        <div className="leading-normal">
          <p className="font-medium text-base">{spendControl.name}</p>
          <p className="text-xs">{`Gasto total: ${formatCurrency(
            spendControl.totalSpent
          )}`}</p>
          <When condition={spendControl.isShared}>
            <p
              className={twMerge(
                "text-xs",
                spendControl.balance >= 0 ? "text-green" : "text-red-600"
              )}
            >{`Crédito: ${formatCurrency(spendControl.balance)}`}</p>
          </When>
        </div>
        <When
          condition={spendControl.isShared}
          elseRender={<UserIcon className="ml-auto" size={18} />}
        >
          <UsersIcon className="ml-auto " size={18} />
        </When>
      </CustomListItem>
    </Link>
  );
}
