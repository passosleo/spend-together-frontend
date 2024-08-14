import { CustomButton } from "@/components/custom-button";
import { CustomCheckbox } from "@/components/custom-checkbox";
import { CustomColorPicker } from "@/components/custom-color-picker";
import { CustomInput } from "@/components/custom-input";
import { CreateSpendControlSchema } from "@/schemas/create-spend-control";
import { FeatherIcon, PencilLineIcon, TagsIcon } from "lucide-react";
import { useFormContext } from "react-hook-form";
import { useSearchUserService } from "../../hooks/useSearchUsersService";
import { UserSearchResponse } from "../../types";
import { When } from "@/components/when";
import { CustomSearchInput } from "@/components/custom-search-input";

export function CreateSpendControlForm({ onCancel }: { onCancel: () => void }) {
  const form = useFormContext<CreateSpendControlSchema>();
  const isShared = form.watch("shared");
  const invitedUsers = form.watch("invitedUsers");

  const service = useSearchUserService({ search: getSearchTerm() });
  const searchResults = service.data?.data || [];

  function getSearchTerm() {
    return form
      .watch("search")
      ?.trim()
      ?.toLowerCase()
      ?.replace(/[^a-zA-Z0-9_.]/g, "");
  }

  function onAddUser(user: UserSearchResponse) {
    form.resetField("search");
    form.setValue("invitedUsers", [...(invitedUsers || []), user]);
  }

  function onRemoveUser(username: string) {
    form.setValue(
      "invitedUsers",
      invitedUsers.filter(
        (user: UserSearchResponse) => user.username !== username
      )
    );
  }

  const searchResultsFiltered = searchResults.filter(
    (user) =>
      !invitedUsers.find(
        (invitedUser: UserSearchResponse) =>
          invitedUser.username === user.username
      )
  );

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
      <CustomCheckbox
        name="shared"
        label="Compartilhado"
        disabled={false}
        onCheckedChange={(value) => {
          if (!value) {
            form.resetField("search");
            form.setValue("invitedUsers", []);
          }
        }}
      />
      <When condition={isShared}>
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold">
            Convidados {invitedUsers.length > 0 ? invitedUsers.length : ""}
          </p>
          <CustomSearchInput />
        </div>
        <When
          condition={invitedUsers.length}
          elseRender={
            <p className="text-sm text-gray-500 text-center my-5">
              Nenhum convidado
            </p>
          }
        >
          <></>
        </When>
      </When>

      <div className="flex gap-2">
        <CustomButton className="w-full" variant="outline" onClick={onCancel}>
          Cancelar
        </CustomButton>
        <CustomButton className="w-full" type="submit">
          Salvar
        </CustomButton>
      </div>
    </>
  );
}
