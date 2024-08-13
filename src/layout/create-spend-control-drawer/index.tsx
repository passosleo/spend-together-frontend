import { CustomButton } from "@/components/custom-button";
import { CustomCheckbox } from "@/components/custom-checkbox";
import { CustomColorPicker } from "@/components/custom-color-picker";
import { CustomDrawer, CustomDrawerProps } from "@/components/custom-drawer";
import { CustomForm } from "@/components/custom-form";
import { CustomInput } from "@/components/custom-input";
import { createSpendControlSchema } from "@/schemas/create-spend-control";
import { PencilLineIcon, TagsIcon } from "lucide-react";

type CreateSpendControlDrawerProps = CustomDrawerProps & {
  onClose: () => void;
};

export function CreateSpendControlDrawer({
  onClose,
  ...props
}: CreateSpendControlDrawerProps) {
  return (
    <CustomDrawer
      {...props}
      title="Novo controle de despesas"
      dismissible
      content={
        <CustomForm
          zodSchema={createSpendControlSchema}
          onSubmit={(data) => console.log(data)}
          className="px-4 pb-4"
        >
          <CustomInput
            name="name"
            type="text"
            label="Nome"
            placeholder="Escolha um nome"
            disabled={false}
            leftElement={<TagsIcon size={18} />}
          />
          <CustomInput
            name="description"
            type="text"
            label="Descrição"
            placeholder="Insira uma descrição"
            disabled={false}
            leftElement={<PencilLineIcon size={18} />}
          />
          <CustomColorPicker
            colors={[
              "#FE4A49",
              "#009FB7",
              "#FFD700",
              "#FF69B4",
              "#87CEFA",
              "#20B2AA",
              "#9370DB",
              "#7B68EE",
              "#FF6347",
              "#FE4A44",
              "#009FB4",
              "#FFD704",
              "#FF69B5",
              "#87CEF4",
              "#20B2A4",
              "#9370D4",
              "#7B68E4",
              "#FF6344",
            ]}
            name="color"
            label="Cor"
          />
          <CustomCheckbox
            name="shared"
            label="Compartilhado"
            disabled={false}
          />
          <div className="flex gap-2">
            <CustomButton
              className="w-full"
              variant="outline"
              onClick={onClose}
            >
              Cancelar
            </CustomButton>
            <CustomButton className="w-full" type="submit" onClick={onClose}>
              Salvar
            </CustomButton>
          </div>
        </CustomForm>
      }
    />
  );
}
