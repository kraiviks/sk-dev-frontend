'use client';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { cn } from '@/lib/utils';
import { useEffect } from 'react';
import { redirect } from 'next/navigation';
import { useAuthStore } from '@/stores/useAuthStore';
import { Api } from '@/services/api/api-client';

type SubmitData = {
	email: string;
	password: string;
};

const LoginForm = () => {
	const authStore = useAuthStore();

	const validationSchema = Yup.object({
		email: Yup.string().email('Invalid email address').required('Required'),
		password: Yup.string()
			.min(6, 'Password must be at least 6 characters')
			.required('Required'),
	});

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<SubmitData>({
		resolver: yupResolver(validationSchema),
	});

	const onSubmit: SubmitHandler<SubmitData> = async (data) => {
		try {
			const response = await Api.login(data);

			authStore.login(response.data.access_token);
		} catch (error) {
			console.error('Login failed:', error);
		}
	};

	useEffect(() => {
		if (authStore.accessToken) {
			redirect('/');
		}
	}, [authStore.accessToken]);

	return (
		<div className="flex gap-5 justify-end h-screen bg-[url('/images/bg-login.jpg')] bg-cover bg-center">
			<div className="flex justify-center items-center w-full lg:w-1/2">
				<div className="bg-slate-800 bg-opacity-50 backdrop-blur p-10 sm:p-20 mg:p-10 lg:p-36">
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="flex flex-col gap-5 min-w-[285px] max-w-[300px]"
					>
						<div className="flex flex-col">
							<label htmlFor="email" className="text-white">
								Email
							</label>
							<input
								type="email"
								id="email"
								{...register('email')}
								className={cn('px-4 py-2 rounded outline-none', {
									'outline-red-400': errors.email,
								})}
								placeholder="Email"
							/>
							<div className="min-h-[1.5rem]">
								{errors.email && (
									<span className="text-red-400">{errors.email.message}</span>
								)}
							</div>
						</div>
						<div className="flex flex-col">
							<label htmlFor="password" className="text-white">
								Password
							</label>
							<input
								type="password"
								id="password"
								{...register('password')}
								className={cn('px-4 py-2 rounded outline-none', {
									'outline-red-400': errors.password,
								})}
								placeholder="Password"
							/>
							<div className="min-h-[1.5rem]">
								{errors.password && (
									<span className="text-red-400 break-words">
										{errors.password.message}
									</span>
								)}
							</div>
						</div>
						<Button type="submit" variant="outline" disabled={isSubmitting}>
							{isSubmitting ? (
								<Loader2 className="mr-2 h-4 w-4 animate-spin" />
							) : (
								'Login'
							)}
						</Button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default LoginForm;
