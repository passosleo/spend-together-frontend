import { CustomDrawer, CustomDrawerProps } from "@/components/custom-drawer";
import { CustomForm } from "@/components/custom-form";
import { createSpendControlSchema } from "@/schemas/create-spend-control";
import { FormContent } from "./components/form-content";

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
          <FormContent onClose={onClose} />
        </CustomForm>
      }
    />
  );
}
