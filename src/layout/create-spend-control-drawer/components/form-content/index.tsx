import { CustomButton } from "@/components/custom-button";
import { CustomCheckbox } from "@/components/custom-checkbox";
import { CustomColorPicker } from "@/components/custom-color-picker";
import { CustomInput } from "@/components/custom-input";
import { CreateSpendControlSchema } from "@/schemas/create-spend-control";
import { PencilLineIcon, TagsIcon } from "lucide-react";
import { useFormContext } from "react-hook-form";

export function FormContent({ onClose }: { onClose: () => void }) {
  const form = useFormContext<CreateSpendControlSchema>();
  const isShared = form.watch("shared");
  const invitedUsers = form.watch("invitedUsers");

  // function getSearchTerm() {
  //   return form
  //     .watch("search")
  //     ?.trim()
  //     ?.toLowerCase()
  //     ?.replace(/[^a-zA-Z0-9_.]/g, "");
  // }

  // function onAddUser(user: UserSearch) {
  //   form.resetField("search");
  //   form.setValue("invitedUsers", [...(invitedUsers || []), user]);
  // }

  // function onRemoveUser(username: string) {
  //   form.setValue(
  //     "invitedUsers",
  //     invitedUsers.filter((user: UserSearch) => user.username !== username)
  //   );
  // }

  // const searchResultsFiltered = searchResults.filter(
  //   (user) =>
  //     !invitedUsers.find(
  //       (invitedUser: UserSearch) => invitedUser.username === user.username
  //     )
  // );

  return (
    <>
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
        ]}
        name="color"
        label="Cor"
      />
      <CustomCheckbox name="shared" label="Compartilhado" disabled={false} />
      <div className="flex gap-2">
        <CustomButton className="w-full" variant="outline" onClick={onClose}>
          Cancelar
        </CustomButton>
        <CustomButton className="w-full" type="submit">
          Salvar
        </CustomButton>
      </div>
    </>
  );
}
