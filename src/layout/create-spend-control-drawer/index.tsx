import { CustomButton } from "@/components/custom-button";
import { CustomCheckbox } from "@/components/custom-checkbox";
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
