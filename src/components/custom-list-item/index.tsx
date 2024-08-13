import { twMerge } from "tailwind-merge";

export function CustomListItem({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={twMerge(
        "flex flex-col bg-background px-4 py-2 min-h-20 gap-2 text-slate-700 text-sm border-b active:bg-primary-foreground transition-all select-none cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
}
