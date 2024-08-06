export const messages = {
  response: {
    error: {
      default: "Algo deu errado, tente novamente mais tarde",
    },
  },
  validations: {
    isRequired: "Campo obrigatório",
    email: {
      isNotValid: "E-mail inválido",
    },
    password: {
      min: (min: number) => `A senha deve ter no mínimo ${min} caracteres`,
      uppercase: "A senha deve conter ao menos uma letra maiúscula",
      lowercase: "A senha deve conter ao menos uma letra minúscula",
      number: "A senha deve conter ao menos um dígito numérico",
      special: "A senha deve conter ao menos um caractere especial",
      equal: "As senhas devem ser iguais",
    },
    date: {
      isNotValid: "Selecione uma data valida",
    },
    string: {
      isNotEqual: "Os campos não são iguais",
      isEmpty: "O campo está vazio",
      min: (min: number) => `O campo deve ter no mínimo ${min} caracteres`,
      max: (max: number) => `O campo deve ter no máximo ${max} caracteres`,
    },
  },
};
