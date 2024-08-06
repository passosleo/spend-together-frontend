"use client";
import { CustomButton } from "@/components/CustomButton";
import { CustomForm } from "@/components/CustomForm";
import { CustomInput } from "@/components/CustomInput";
import { signInSchema } from "@/schemas/sign-in";
import { LockIcon, MailIcon } from "lucide-react";
import { useSignIn } from "./hooks/useSignIn";
import { CustomCheckbox } from "@/components/CustomCheckbox";
import Link from "next/link";

export default function SignInPage() {
  const { onSubmit, storedEmail, storedRememberMe, isLoading } = useSignIn();
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <CustomForm
        zodSchema={signInSchema}
        useFormProps={{
          defaultValues: {
            email: storedEmail || "",
            rememberMe: storedRememberMe,
          },
        }}
        onSubmit={onSubmit}
      >
        <CustomInput
          name="email"
          type="email"
          label="E-mail"
          placeholder="Insira seu e-mail"
          disabled={isLoading}
          leftElement={<MailIcon size={18} />}
        />
        <CustomInput
          name="password"
          type="password"
          label="Senha"
          placeholder="Insira sua senha"
          disabled={isLoading}
          leftElement={<LockIcon size={18} />}
        />
        <CustomCheckbox
          name="rememberMe"
          label="Lembrar-me"
          disabled={isLoading}
        />
        <CustomButton type="submit" isLoading={isLoading}>
          Entrar
        </CustomButton>
      </CustomForm>
      <p className="mt-5 text-sm">
        Não possui conta?{" "}
        <Link href="/sign-up" className="font-semibold underline">
          Cadastre-se
        </Link>
      </p>
    </div>
  );
}
