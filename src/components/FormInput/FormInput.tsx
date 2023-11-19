import { FC } from 'react';
import './FormInput.scss';

interface IFormInput {
    fieldName: string;
    type: string;
    placeholder: string;
    required?: boolean;
}

const FormInput: FC<IFormInput> = ({fieldName, type, placeholder, required}) => {
    return (
        <input
            className="input"
            name={fieldName}
            type={type}
            placeholder={placeholder}
            required={required}
        />
    );
};

export default FormInput;