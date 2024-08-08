import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

import { DialogProps } from "@radix-ui/react-dialog";
import { When } from "../when";
import React from "react";

type CustomDrawerProps = Omit<DialogProps, "children"> & {
  title?: string;
  description?: string;
  dismissible?: boolean;
  content?: React.ReactNode;
  footer?: React.ReactNode;
  header?: React.ReactNode;
};

export function CustomDrawer({
  title,
  description,
  content,
  footer,
  header,
  ...props
}: CustomDrawerProps) {
  return (
    <Drawer {...props}>
      <DrawerContent>
        <When condition={title || description || header}>
          <DrawerHeader>
            <When condition={title}>
              <DrawerTitle>{title}</DrawerTitle>
            </When>
            <When condition={description}>
              <DrawerDescription>{description}</DrawerDescription>
            </When>
            <When condition={header}>{header}</When>
          </DrawerHeader>
        </When>
        <When condition={content}>
          <div className="w-full flex flex-col items-center justify-center">
            {content}
          </div>
        </When>
        <When condition={footer}>
          <DrawerFooter>{footer}</DrawerFooter>
        </When>
      </DrawerContent>
    </Drawer>
  );
}
