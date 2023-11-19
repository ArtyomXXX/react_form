import SideBar from '../../components/SideBar/SideBar';
import Banner from '../../components/Banner/Banner';
import './LoginPage.scss';

const LoginPage = () => {
    return (
        <div className="login-page">
            <Banner/>
            <SideBar/>
        </div>
    );
}

export default LoginPage;