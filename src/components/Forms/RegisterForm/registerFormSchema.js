import { z } from 'zod';

export const registerFormSchema = z
  .object({
    name: z.string().nonempty('O nome é obrigatório'),
    email: z
      .string()
      .nonempty('O e-mail é obrigatório')
      .email('Forneça um e-mail válido'),
    password: z
      .string()
      .nonempty('A senha é obrigatória')
      .min(8, 'A senha deve conter pelo menos 8 caracteres')
      .regex(
        /[A-Z]+/,
        'A senha deve conter uma letra minúscula e uma maiúscula'
      )
      .regex(
        /[a-z]+/,
        'A senha deve conter uma letra minúscula e uma maiúscula'
      )
      .regex(
        /[0-9]+/,
        'A senha deve conter um número e um caractere especial'
      )
      .regex(
        /[!@#$%^&*()_+{}\\[\]:;<>,.?~\\/]/,
        'A senha deve conter um número e um caractere especial'
      ),
    confirmPassword: z
      .string()
      .nonempty('Confirmar a senha é obrigatório'),
    bio: z.string().nonempty('A bio é obrigatória'),
    contact: z.string().nonempty('O nome é obrigatório'),
    course_module: z.string(),
  })
  .refine(
    ({ password, confirmPassword }) =>
      password === confirmPassword,
    {
      message: 'As senhas não correspondem',
      path: ['confirmPassword'],
    }
  );
