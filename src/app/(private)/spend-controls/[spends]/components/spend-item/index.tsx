import { CustomListItem } from "@/components/custom-list-item";
import { Spend } from "../../types";
import { CustomAvatar } from "@/components/custom-avatar";
import { formatCurrency } from "@/utils/currency";
import { When } from "@/components/when";
import { formatDate } from "@/utils/date";

export function SpendItem(spend: Spend) {
  return (
    <CustomListItem className="flex-row items-center">
      <CustomAvatar name={spend.user.name} className="h-10 w-10" />
      <div className="leading-normal w-full">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-400">{spend.user.username}</p>
          <span className="text-slate-300 text-xs ml-auto">
            {formatDate(spend.createdAt, {
              month: "short",
              day: "2-digit",
            })}
          </span>
        </div>
        <When condition={spend.description}>
          <p className="text-xs">{spend.description}</p>
        </When>
        <div className="flex items-center justify-between">
          <p className="font-medium text-base">
            {formatCurrency(spend.amount)}
          </p>
          <span
            className="text-sm text-primary-foreground px-1.5 rounded-md"
            style={{ backgroundColor: spend.spendCategory.color }}
          >
            {spend.spendCategory.name}
          </span>
        </div>
      </div>
    </CustomListItem>
  );
}
