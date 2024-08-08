"use client";
import { useSpends } from "./hooks/useSpends";

export default function SpendsPage() {
  const { spends, isLoading } = useSpends();
  console.log("SpendsPage ~ spends", spends);

  return (
    <div>
      <h1>Spends</h1>
    </div>
  );
}
