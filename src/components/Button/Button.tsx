import { FC } from "react";

interface IButton {
    text: string;
    type: "button" | "submit" | "reset";
    onClick?: () => void;
}

const Button: FC<IButton> = ({text, type, onClick}) => {
    return (
        <button
            type={type}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;