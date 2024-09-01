import { useRef } from "react";
import { NavBar } from "../components";


export const MainLayout = ({ children }) => {
    return (
        <div>
            <NavBar />
            { children }
        </div>
    );
};

export default MainLayout;