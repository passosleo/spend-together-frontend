import { CustomDrawer, CustomDrawerProps } from "@/components/custom-drawer";
import { CustomForm } from "@/components/custom-form";
import { createSpendControlSchema } from "@/schemas/create-spend-control";
import { CreateSpendControlForm } from "./components/create-spend-control-form";

type CreateSpendControlDrawerProps = CustomDrawerProps & {
  onCancel: () => void;
};

export function CreateSpendControlDrawer({
  onCancel,
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
          useFormProps={{
            defaultValues: {
              invitedUsers: [],
            },
          }}
          className="px-4 pb-4"
        >
          <CreateSpendControlForm onCancel={onCancel} />
        </CustomForm>
      }
    />
  );
}
