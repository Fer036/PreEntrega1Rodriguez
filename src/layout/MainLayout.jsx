import { useRef } from "react";
import { Navbar } from "../components";


export const MainLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            { children }
        </div>
    );
};

export default MainLayout;