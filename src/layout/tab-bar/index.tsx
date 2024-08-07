import React from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";

type TabBarProps = {
  options: {
    name: string;
    icon: React.ReactNode;
    href?: string;
    onClick?: () => void;
    className?: string;
  }[];
};

export function TabBar({ options }: TabBarProps) {
  const pathname = usePathname();
  return (
    <div className="fixed bottom-0 left-0 w-full h-14 shadow-sm border-t py-2 px-8 flex items-center justify-between bg-secondary-foreground rounded-t-2xl text-primary-foreground z-50">
      {options.map((option, index) => {
        const isActive = option.href === pathname;
        return option.href ? (
          <Link
            href={option.href}
            key={index}
            className={twMerge(
              "flex flex-col items-center justify-center",
              isActive
                ? "text-primary-foreground"
                : "text-primary-foreground/60",
              option.className
            )}
            onClick={option.onClick}
          >
            {option.icon}
            <span className="text-xs">{option.name}</span>
          </Link>
        ) : (
          <div
            key={index}
            className={twMerge(
              "flex flex-col items-center justify-center",
              option.className
            )}
            onClick={option.onClick}
          >
            {option.icon}
            <span className="text-xs">{option.name}</span>
          </div>
        );
      })}
    </div>
  );
}
