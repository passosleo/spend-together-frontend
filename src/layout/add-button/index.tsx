import { CustomList } from "@/components/custom-list";
import { CustomListItem } from "@/components/custom-list-item";
import { PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { MenuOption } from "@/types/generic";
import { Popover, PopoverProps } from "@radix-ui/react-popover";
import { PlusIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";

type AddButtonProps = PopoverProps & {
  options: MenuOption[];
  onClick?: () => void;
};

export function AddButton({ options, onClick, ...props }: AddButtonProps) {
  return (
    <Popover {...props}>
      <PopoverTrigger onClick={onClick}>
        <div className="fixed bottom-14 right-0 m-4 bg-primary text-primary-foreground rounded-full h-12 w-12 flex items-center justify-center drop-shadow-lg z-50">
          <PlusIcon size={26} />
          <PopoverContent className="p-0 mr-8 mb-12 border-none">
            <CustomList
              data={options}
              renderItem={(option, index) => {
                const isFirst = index === 0;
                const isLast = index === options.length - 1;
                return (
                  <CustomListItem
                    key={index}
                    onClick={option.onClick}
                    className={twMerge(
                      "flex flex-row min-h-4 items-center",
                      isFirst ? "rounded-t-md" : "",
                      isLast ? "rounded-b-md" : "",
                      option.className
                    )}
                  >
                    {option.icon}
                    <span className="font-semibold select-none">
                      {option.name}
                    </span>
                  </CustomListItem>
                );
              }}
            />
          </PopoverContent>
        </div>
      </PopoverTrigger>
    </Popover>
  );
}
