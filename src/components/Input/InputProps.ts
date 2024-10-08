import { componentBasics, inputIcons, inputTypes, inputVariant } from "../../types/propTypes";

export type InputProps = componentBasics & {
    type?: inputTypes,
    color?: string,
    defaultValue?: string|number,
    disabled?: boolean,
    form?: string,
    max?: number,
    maxLength?: number,
    min?: number,
    minLength?: number,
    name?: string,
    onChange?: (value:string) => void,
    pattern?: string,
    placeholder?: string,
    readonly?: boolean,
    required?: boolean,
    size?: number,
    step?: number,
    value?: string|number,
    width?: number|string,
    icon?: inputIcons,
    variant?: inputVariant,
    floatingLabel?: string,
}