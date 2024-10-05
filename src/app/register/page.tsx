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
	username: string;
	email: string;
	password: string;
	firstname: string;
	lastname: string;
	bio: string;
	avatar: string;
};

const RegisterForm = () => {
	const authStore = useAuthStore();

	const validationSchema = Yup.object({
		username: Yup.string().required('Required'),
		email: Yup.string().email('Invalid email address').required('Required'),
		password: Yup.string()
			.min(6, 'Password must be at least 6 characters')
			.required('Required'),
		firstname: Yup.string().required('Required'),
		lastname: Yup.string().required('Required'),
		bio: Yup.string().required('Required'),
		avatar: Yup.string().required('Required'),
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
			const response = await Api.register(data);
			authStore.login(response.data.access_token);
		} catch (error) {
			console.error('Registration failed:', error);
		}
	};

	useEffect(() => {
		if (authStore.accessToken) {
			redirect('/');
		}
	}, [authStore.accessToken]);

	return (
		<div className="flex  justify-end h-screen bg-[url('/images/bg-login.png')] bg-cover bg-center">
			<div className="flex justify-center items-center w-full lg:w-1/2">
				<div className="bg-slate-800 bg-opacity-50 backdrop-blur p-10 sm:p-20 mg:p-10 lg:p-20">
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="flex flex-col gap-1 min-w-[285px] max-w-[300px]"
					>
						<div className="flex flex-col">
							<label htmlFor="username" className="text-white">
								Username
							</label>
							<input
								type="text"
								id="username"
								{...register('username')}
								className={cn('px-4 py-2 rounded outline-none', {
									'outline-red-400': errors.username,
								})}
								placeholder="Username"
							/>
							<div className="min-h-[1.5rem]">
								{errors.username && (
									<span className="text-red-400">
										{errors.username.message}
									</span>
								)}
							</div>
						</div>
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
						<div className="flex flex-col">
							<label htmlFor="firstname" className="text-white">
								Firstname
							</label>
							<input
								type="text"
								id="firstname"
								{...register('firstname')}
								className={cn('px-4 py-2 rounded outline-none', {
									'outline-red-400': errors.firstname,
								})}
								placeholder="Firstname"
							/>
							<div className="min-h-[1.5rem]">
								{errors.firstname && (
									<span className="text-red-400">
										{errors.firstname.message}
									</span>
								)}
							</div>
						</div>
						<div className="flex flex-col">
							<label htmlFor="lastname" className="text-white">
								Lastname
							</label>
							<input
								type="text"
								id="lastname"
								{...register('lastname')}
								className={cn('px-4 py-2 rounded outline-none', {
									'outline-red-400': errors.lastname,
								})}
								placeholder="Lastname"
							/>
							<div className="min-h-[1.5rem]">
								{errors.lastname && (
									<span className="text-red-400">
										{errors.lastname.message}
									</span>
								)}
							</div>
						</div>
						<div className="flex flex-col">
							<label htmlFor="bio" className="text-white">
								Bio
							</label>
							<textarea
								id="bio"
								{...register('bio')}
								className={cn('px-4 py-2 rounded outline-none', {
									'outline-red-400': errors.bio,
								})}
								placeholder="Bio"
							/>
							<div className="min-h-[1.5rem]">
								{errors.bio && (
									<span className="text-red-400">{errors.bio.message}</span>
								)}
							</div>
						</div>
						<div className="flex flex-col">
							<label htmlFor="avatar" className="text-white">
								Avatar
							</label>
							<input
								type="text"
								id="avatar"
								{...register('avatar')}
								className={cn('px-4 py-2 rounded outline-none', {
									'outline-red-400': errors.avatar,
								})}
								placeholder="Avatar"
							/>
							<div className="min-h-[1.5rem]">
								{errors.avatar && (
									<span className="text-red-400">{errors.avatar.message}</span>
								)}
							</div>
						</div>
						<Button type="submit" variant="outline" disabled={isSubmitting}>
							{isSubmitting ? (
								<Loader2 className="mr-2 h-4 w-4 animate-spin" />
							) : (
								'Register'
							)}
						</Button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default RegisterForm;
