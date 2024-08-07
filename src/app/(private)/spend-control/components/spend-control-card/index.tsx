import { SpendControl } from "@/app/(private)/spend-control/types";
import { formatCurrency } from "@/utils/currency";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { UserIcon, UsersIcon } from "lucide-react";
import { When } from "@/components/when";

export function SpendControlCard(spendControl: SpendControl) {
  return (
    <Link href={`/spend-control/${spendControl.spendControlId}`} passHref>
      <div className="flex items-center bg-background px-4 py-2 text-slate-700 text-sm border-b active:bg-primary-foreground transition-all min-h-20">
        <span
          className="w-2 h-10 mr-4"
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
      </div>
    </Link>
  );
}
