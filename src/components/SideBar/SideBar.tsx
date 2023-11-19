import { FC } from "react";
import './sidebar.scss';
import AuthorizationForm from "../AuthorizationForm/AuthorizationForm";
import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";

const SideBar: FC = () => {
	return (
		<div className="sidebar">
			<AuthorizationForm
				title='Здравствуйте'
				subtext='Требуется авторизация'
			>
				<FormInput
                    fieldName='email'
                    type='email'
                    placeholder='Email'
                    required
				/>
				<FormInput
					fieldName='password'
					type='password'
					placeholder='Пароль'
					required
				/>
				<Button
					text='Войти'
					type='submit'
				/>
			</AuthorizationForm>
		</div>
	);
};

export default SideBar;