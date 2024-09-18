import React, { PropsWithChildren, useContext, useState } from "react";
import { DropdownProps } from "./DropdownProps";
import { DropdownContext } from "./DropdownContext";
import clsx from "clsx";
import './Dropdown.scss';
import Items from "./Items";
import Item from "./Item";
import DropdownButton from "./DropdownButton";
import { contrastTextColor, hexToRGB } from "../../utils/colorHelper";
import ThemeContext from "../Theme/ThemeContext";

const Dropdown = ({
    children,
    className,
    variant='outline',
    color,
    shadow,
    rounded='sm',
    size='md',
    disabled,
    style
}:PropsWithChildren<DropdownProps>) => {

    const [isOpen, setIsOpen] = useState(false);
    const {primaryColor} = useContext(ThemeContext);

    return (
        <DropdownContext.Provider value={{isOpen, setIsOpen, color:color || primaryColor, variant, shadow, rounded, size, disabled}}>
            <div className={clsx(
                "capybara-dropdown", 
                className,
                )} 

                style={{
                    "--dropdownColor": color || primaryColor,
                    "--dropdownColorRGB": hexToRGB(color || primaryColor).join(','),
                    "--textColor": contrastTextColor(color || primaryColor),
                    ...style
                }}

                onMouseEnter={() => {
                    if(!disabled) setIsOpen(true);
                }}

                onMouseLeave={() => {
                    if(!disabled) setIsOpen(false);
                }}
            >
                {children}
            </div>
        </DropdownContext.Provider>
    );
}

Dropdown.Button = DropdownButton;
Dropdown.Items = Items;
Dropdown.Item = Item;

export default Dropdown;