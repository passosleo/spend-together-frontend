"use client";
import { CustomLoading } from "@/components/CustomLoading";
import { useSpendControl } from "./hooks/useSpendControl";
import { CustomList } from "@/components/CustomList";
import { SpendControlItem } from "@/components/SpendControlItem";

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
