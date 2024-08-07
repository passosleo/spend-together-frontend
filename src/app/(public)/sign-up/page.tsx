"use client";
import { CustomButton } from "@/components/custom-button";
import { CustomForm } from "@/components/custom-form";
import { CustomInput } from "@/components/custom-input";
import { AtSign, LockIcon, MailIcon, UserIcon } from "lucide-react";
import { CustomCheckbox } from "@/components/custom-checkbox";
import { signUpSchema } from "@/schemas/sign-up";
import Link from "next/link";
import { useSignUp } from "./hooks/useSignUp";

export default function SignUpPage() {
  const { onSubmit, isLoading } = useSignUp();
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <CustomForm
        zodSchema={signUpSchema}
        // useFormProps={{
        //   defaultValues: {
        //     email: storedEmail || "",
        //     rememberMe: storedRememberMe,
        //   },
        // }}
        onSubmit={onSubmit}
      >
        <CustomInput
          name="username"
          type="text"
          label="Username"
          placeholder="Crie seu username"
          disabled={isLoading}
          leftElement={<AtSign size={18} />}
        />
        <CustomInput
          name="name"
          type="text"
          label="Nome"
          placeholder="Informe o seu nome"
          disabled={isLoading}
          leftElement={<UserIcon size={18} />}
        />
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
          placeholder="Crie uma senha"
          disabled={isLoading}
          leftElement={<LockIcon size={18} />}
        />
        <CustomInput
          name="confirmPassword"
          type="password"
          label="Confirmar senha"
          placeholder="Confirme a senha"
          disabled={isLoading}
          leftElement={<LockIcon size={18} />}
        />
        <CustomCheckbox
          name="terms"
          label="Declaro que li e concordo com os termos de uso."
          disabled={isLoading}
          className="my-5"
        />
        <CustomButton type="submit" isLoading={isLoading}>
          Cadastrar
        </CustomButton>
      </CustomForm>
      <p className="mt-5 text-sm">
        Já possui conta?{" "}
        <Link href="/sign-in" className="font-semibold underline">
          Acessar
        </Link>
      </p>
    </div>
  );
}
