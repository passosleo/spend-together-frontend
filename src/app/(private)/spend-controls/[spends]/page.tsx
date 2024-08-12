"use client";
import { CustomLoading } from "@/components/custom-loading";
import { useSpends } from "./hooks/useSpends";
import { CustomList } from "@/components/custom-list";
import { SpendItem } from "./components/spend-item";

export default function SpendsPage() {
  const { spends, isLoading } = useSpends();
  return (
    <div>
      <CustomLoading isLoading={isLoading}>
        <CustomList
          data={spends}
          renderItem={(spend) => <SpendItem {...spend} />}
        />
      </CustomLoading>
    </div>
  );
}
