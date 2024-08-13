import { CustomButton } from "@/components/custom-button";
import { CustomCheckbox } from "@/components/custom-checkbox";
import { CustomDrawer } from "@/components/custom-drawer";
import { CustomForm } from "@/components/custom-form";
import { CustomInput } from "@/components/custom-input";
import { PencilLineIcon, TagsIcon } from "lucide-react";

export function CreateSpendControlDrawer({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <CustomDrawer
      title="Novo controle de despesas"
      open={isOpen}
      dismissible={false}
      content={
        <CustomForm
          zodSchema={undefined}
          onSubmit={(data) => console.log(data)}
          className="px-4 pb-4"
        >
          <CustomInput
            name="name"
            type="text"
            label="Nome"
            placeholder="Dê um nome"
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
