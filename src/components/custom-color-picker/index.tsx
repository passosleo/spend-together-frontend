import clsx from "clsx";
import React from "react";
import { Controller, RegisterOptions } from "react-hook-form";
import { ConnectForm } from "../connect-form";
import { iterateObject } from "@/utils/object";
import { ErrorHookForm, ErrorsHookForm } from "@/types/react-hook-form";
import { When } from "../when";

export type CustomColorPickerProps = {
  label: string;
  name: string;
  colors?: string[];
  error?: string;
  hideError?: boolean;
  rules?: RegisterOptions;
  defaultValue?: string;
  id?: string;
};

export function CustomColorPicker({
  name,
  hideError,
  rules,
  error,
  defaultValue,
  label,
  colors = [],
  ...props
}: CustomColorPickerProps) {
  return (
    <ConnectForm>
      {({ control, formState }) => {
        const id = props.id || name || "color-picker";
        const idParts = id.split(".");
        const { errors } = formState;

        const hasError = iterateObject<ErrorHookForm>(
          idParts,
          errors as ErrorsHookForm
        );
        return (
          <Controller
            defaultValue={
              defaultValue || colors.length > 0 ? colors[0] : undefined
            }
            control={control}
            rules={rules}
            name={id}
            render={({ field }) => (
              <div>
                <When condition={label}>
                  <label className="text-sm text-black mb-1">{label}</label>
                </When>
                <div className="flex flex-row gap-2.5 overflow-x-auto no-scrollbar">
                  {colors.map((color, index) => (
                    <span
                      key={index}
                      id={id}
                      onClick={() => field.onChange(color)}
                      style={{
                        backgroundColor: color,
                        opacity: field.value === color ? 1 : 0.5,
                        minWidth: "1.3rem",
                        minHeight: "1.3rem",
                      }}
                      className={clsx(
                        "flex justify-center items-center rounded-full border",
                        field.value === color
                          ? `border-primary`
                          : `border-transparent`
                      )}
                    />
                  ))}
                </div>
                <div className="h-4 select-none">
                  <When condition={!hideError && (hasError || error)}>
                    <p className="text-red-500 text-xs">
                      {hasError?.message || error}
                    </p>
                  </When>
                </div>
              </div>
            )}
          />
        );
      }}
    </ConnectForm>
  );
}
