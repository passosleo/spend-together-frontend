"use client";
import { CustomLoading } from "@/components/custom-loading";
import { useSpendControl } from "./hooks/useSpendControl";
import { CustomList } from "@/components/custom-list";
import { SpendControlCard } from "./components/spend-control-card";

export default function SpendControlsPage() {
  const { spendControls, isLoading } = useSpendControl();
  return (
    <div>
      <CustomLoading isLoading={isLoading}>
        <CustomList
          data={spendControls}
          renderItem={(spendControl) => <SpendControlCard {...spendControl} />}
        />
      </CustomLoading>
    </div>
  );
}
