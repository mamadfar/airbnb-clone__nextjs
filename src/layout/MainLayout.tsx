import {FC, ReactNode} from "react";
import {Footer, Header} from "@/components";

const MainLayout: FC<{ children: ReactNode }> = ({children}) => {
    return (
        <>
            {children}
            <Footer/>
        </>
    )
};

export default MainLayout;
