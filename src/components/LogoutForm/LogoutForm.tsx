import {FC} from "react";
import './LogoutForm.scss';
import useAuth from "../../auth/useAuth";
import Button from "../Button/Button";

const LogoutForm : FC = () => {
    const {logOut} = useAuth();

    const handleLogout = () => {
        logOut();
    };

    return (
        <div className="logout">
            <div className="container">
                <div className="logout__inner">
                    <h1>Личный кабинет</h1>
                    <p>Добро пожаловать в личный кабинет</p>
                    <Button
                        text="Выйти"
                        type="button"
                        onClick={handleLogout}
                    />
                </div>
            </div>
        </div>
    );
};

export default LogoutForm;