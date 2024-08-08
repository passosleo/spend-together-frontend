"use client";
import { CustomLoading } from "@/components/custom-loading";
import { useSpendControl } from "./hooks/useSpendControl";
import { CustomList } from "@/components/custom-list";
import { SpendControlItem } from "./components/spend-control-item";

export default function SpendControlsPage() {
  const { spendControls, isLoading } = useSpendControl();
  return (
    <div>
      <CustomLoading isLoading={isLoading}>
        <CustomList
          data={spendControls}
          renderItem={(spendControl) => <SpendControlItem {...spendControl} />}
        />
      </CustomLoading>
    </div>
  );
}
