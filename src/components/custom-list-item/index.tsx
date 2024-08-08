import { twMerge } from "tailwind-merge";

export function CustomListItem({
  children,
  className,
}: React.ComponentProps<"div">) {
  return (
    <div
      className={twMerge(
        "flex flex-col bg-background px-4 text-slate-700 text-sm border-b active:bg-primary-foreground transition-all",
        className
      )}
    >
      {children}
    </div>
  );
}
