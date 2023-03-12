import NavBar from '../components/NavBar';
import { useTranslation } from "react-i18next";
import MainComponents from '../components/MainComponents';


const HomePage = () => {
    const { t, i18n } = useTranslation('common');

    return (
        <>
            <NavBar></NavBar>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <MainComponents></MainComponents>
        </>
    );
}

export default HomePage