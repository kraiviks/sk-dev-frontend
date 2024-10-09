'use client';
import { motion } from 'framer-motion';
import { SendIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { Container, Title } from '../shared';
import { AnimatedLine, YAnimation } from '../animations';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { cn } from '@/lib/utils';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

interface ContactFormValues {
	name: string;
	email: string;
	message: string;
}

const validationSchema = Yup.object({
	name: Yup.string()
		.required('Enter name')
		.min(2, 'Name must be at least 2 characters')
		.max(15, 'Name must be less than 15 characters')
		.matches(/^[a-zA-Zа-яА-ЯёЁїЇіІєЄґҐ]+$/, 'Name must contain only letters'),
	email: Yup.string().required('Enter email').email('Invalid email address'),
	message: Yup.string()
		.required('Enter message')
		.min(10, 'Message must be at least 10 characters'),
});

export const SectionContact = (): React.ReactElement => {
	const [statusMessage, setStatusMessage] = useState<string | null>(null);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isValid },
	} = useForm<ContactFormValues>({
		mode: 'onChange',
		resolver: yupResolver(validationSchema),
	});

	const submit: SubmitHandler<ContactFormValues> = async (data) => {
		const params = {
			from_name: data.name,
			email: data.email,
			message: data.message,
		};

		emailjs
			.send('service_4f8vlwm', 'template_ixiu525', params, 'lgnTcgsCHH74IGxSb')
			.then(
				(result) => {
					console.log(result.text);
					setStatusMessage('Your message has been sent!');
					reset();
				},
				(error) => {
					console.log(error.text);
					setStatusMessage('Something went wrong!');
				}
			);
	};

	const error: SubmitErrorHandler<ContactFormValues> = async (data) => {
		console.log('Error:', data);
	};

	return (
		<section className="relative flex items-center h-screen">
			<Container className="z-10 flex justify-between gap-32">
				<div className="flex flex-col justify-center min-h-screen py-12 text-white">
					{/* Contact Header */}
					<div className="flex flex-col items-center justify-center mb-14">
						<div className="relative flex items-center justify-center mb-2 space-x-2 w-max">
							<Title text="Contact" size="lg" />
							<AnimatedLine />
						</div>
					</div>
					<div className="flex flex-col items-center">
						<motion.h3
							className="px-10 py-4 mb-16 text-3xl font-medium border-4 text-brand border-brand w-max rounded-tl-3xl rounded-br-3xl"
							initial={{ opacity: 0, y: -50, scale: 0 }}
							whileInView={{ opacity: 1, y: 0, scale: 1 }}
							viewport={{ once: true }}
							transition={{
								duration: 1,
								delay: 0.3,
							}}
						>
							{statusMessage ? (
								<motion.div
									className='text-xl md:text-3xl'
									whileInView={{ opacity: [0, 1], scale: [0.5, 1] }}
									transition={{
										type: 'spring',
										stiffness: 100,
										damping: 10,
										duration: 1,
									}}
								>
									{statusMessage}
								</motion.div>
							) : (
								<div className="animate-bounce">
									<YAnimation>Send me a message</YAnimation>
								</div>
							)}
						</motion.h3>

						<form
							className="flex flex-col"
							onSubmit={handleSubmit(submit, error)}
						>
							<div className="flex gap-x-16 flex-wrap md:flex-nowrap">
								<motion.div
									className="flex flex-col w-full"
									whileInView={{ opacity: [0, 1], scale: [0.5, 1] }}
									transition={{
										type: 'spring',
										stiffness: 100,
										damping: 10,
										duration: 1,
										delay: 0.5,
									}}
								>
									<label htmlFor="form-name" className="text-xs text-brand">
										Your name *
									</label>
									<input
										id="form-name"
										type="text"
										placeholder="Name"
										className={cn(
											'py-4 pr-8 bg-transparent border-b outline-none border-brand',
											{ 'border-red-500': errors.name }
										)}
										{...register('name')}
									/>
									<p className="h-10 text-red-500 text-xs mt-2">
										{errors.name?.message}
									</p>
								</motion.div>
								<motion.div
									className="flex flex-col w-full"
									whileInView={{ opacity: [0, 1], scale: [0.5, 1] }}
									transition={{
										type: 'spring',
										stiffness: 100,
										damping: 10,
										duration: 1,
										delay: 0.7,
									}}
								>
									<label htmlFor="form-email" className="text-xs text-brand">
										Your email *
									</label>
									<input
										id="form-email"
										type="text"
										placeholder="Email"
										className={cn(
											'py-4 pr-8 bg-transparent border-b outline-none border-brand',
											{ 'border-red-500': errors.email }
										)}
										{...register('email')}
									/>
									<p className="h-10 text-red-500 text-xs mt-2">
										{errors.email?.message}
									</p>
								</motion.div>
							</div>
							<motion.div
								className="flex flex-col"
								initial={{ opacity: 0, y: 50, scale: 0.5 }}
								whileInView={{ opacity: 1, y: 0, scale: 1 }}
								transition={{
									type: 'spring',
									stiffness: 50,
									damping: 10,
									duration: 0.7,
									delay: 0.9,
								}}
							>
								<label htmlFor="form-message" className="text-xs text-brand">
									Your message *
								</label>
								<textarea
									id="form-message"
									placeholder="Message"
									className={cn(
										'py-4 pr-8 bg-transparent border-b outline-none border-brand',
										{ 'border-red-500': errors.message }
									)}
									{...register('message')}
								/>
								<p className="h-10 text-red-500 text-xs mt-2">
									{errors.message?.message}
								</p>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 50, scale: 0.5 }}
								whileInView={{ opacity: 1, y: 0, scale: 1 }}
								transition={{
									type: 'spring',
									stiffness: 100,
									damping: 10,
									duration: 0.7,
									delay: 1.1,
								}}
							>
								<Button
									type="submit"
									variant="outline"
									className="flex items-center gap-2 mx-auto rounded-full border-brand hover:bg-brand hover:text-black max-w-[200px] select-none"
									disabled={!isValid}
								>
									Send Message <SendIcon size={16} />
								</Button>
							</motion.div>
						</form>
					</div>
				</div>
			</Container>
		</section>
	);
};
