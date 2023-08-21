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
			.min(8, 'São necessários oito caracteres')
			.regex(/[A-Z]+/, 'É necessário conter uma letra maiúscula')
			.regex(/[a-z]+/, 'É necessário conter uma letra minúscula')
			.regex(/[0-9]+/, 'É necessário conter um número')
			.regex(
				/[!@#$%^&*()_+{}\\[\]:;<>,.?~\\/]/,
				'É necessário um caracter especial'
			),
		confirmPassword: z
			.string()
			.nonempty('Confirmar a senha é obrigatório')
			.regex(),
		bio: z
			.string()
			.nonempty('A bio é obrigatória')
			.min(1, 'É necessário um caractere'),
		contact: z
			.string()
			.nonempty('O nome é obrigatório')
			.min(1, 'É necessário um caractere'),
		// courseModule: z.string().nonempty('O nome é obrigatório'),
	})
	.refine(({ password, confirmPassword }) => {
		return (
			password === confirmPassword,
			{
				message: 'As senhas não correspondem',
				path: ['confirmPassword'],
			}
		);
	});
