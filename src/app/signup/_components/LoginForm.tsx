'use client';

import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";

interface FormValue {
	email: string;
	password: string;
}


const onSubmit = () => {

}

const LoginForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValue>({ mode: "onChange" });
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div>
				<label htmlFor="email">이메일</label>
				<input
					id="email"
					type="text"
					placeholder="test@email.com"
					{...register("email", {
						required: "이메일은 필수 입력입니다.",
						pattern: {
							value:
								/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
							message: "이메일 형식에 맞지 않습니다.",
						},
					})}
				/>
				{errors.email && <small role="alert">{errors.email.message}</small>}
			</div>
		</form>
	)
};

export default LoginForm;