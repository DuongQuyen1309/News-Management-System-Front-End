import InforSection from "../layout/InforSection"
import GeneralSearchSection from "../layout/GeneralSearchSection";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    if (user) {
        return (
            <>
                <InforSection />
                <GeneralSearchSection />
            </>
        )
    } else {
        navigate("/");
    }
}
export default HomePage;