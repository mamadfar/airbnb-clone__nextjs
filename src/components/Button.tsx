import React, {FC} from "react";
import searchStyle from "@/styles/Search.module.scss";

interface IButtonProps {
    title: string;
}

const Button:FC<IButtonProps> = ({title}) => {
    return (
        <p className={searchStyle.button}>{title}</p>
    )
};

export default Button;
