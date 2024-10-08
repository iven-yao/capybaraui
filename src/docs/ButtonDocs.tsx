import React, { useLayoutEffect, useState } from "react";
import { _button_variant, _size, _rounded, _button_shape } from "../constants/propConstants";
import { buttonVariant, shape, size, rounded } from "../types/propTypes";
import { SelectControl, ColorControl, CheckControl } from "./ControlPanel";
import QuickViewResult from "./QuickViewResult";
import { Button } from "@ivenyao/capybara-ui";

const ButtonDocs = () => {
    const [variant, setVariant] = useState<buttonVariant>('outline');
    const [color, setColor] = useState('');
    const [size, setSize] = useState<size>('md');
    const [rounded, setRounded] = useState<rounded|shape>('sm');
    const [disabled, setDisabled] = useState(false);
    const [buttonPropsStr, setButtonPropsStr] = useState('');

    useLayoutEffect(() => {
        let props = '';
        props += (variant ? `\n\tvariant="${variant}"`:'');
        props += (color? `\n\tcolor="${color}"`:'')
        props += (size? `\n\tsize="${size}"`:'');
        props += (rounded? `\n\trounded="${rounded}"`:'');
        props += (disabled?"\n\tdisabled":'');

        setButtonPropsStr(props);

    },[variant, color, size, rounded, disabled])


    return (
        <div>
            <div className="title">Button</div>
            <div className="interactive-section">
                <div className="controller">
                    <div className="second-title" id="quick-view">Quick View</div>
                    <SelectControl label="variant" onChange={(value) => setVariant(value as buttonVariant)} value={variant} options={_button_variant}/>
                    <ColorControl value={color} onChange={(value:string) => setColor(value)}/>
                    <SelectControl label="size" onChange={(value) => setSize(value as size)} value={size} options={_size}/>
                    <SelectControl label="rounded" onChange={(value) => setRounded(value as rounded)} value={rounded} options={[..._rounded,..._button_shape]}/>
                    <CheckControl label="disabled" checked={disabled} onChange={(v) => setDisabled(v)}/>
                </div>
                <QuickViewResult>
                    <QuickViewResult.Code>
{`
    <Button${buttonPropsStr}>
        Click Me 
    </Button>
`}
                    </QuickViewResult.Code>
                    <QuickViewResult.Preview>
                        <Button 
                            variant={variant || "outline"}
                            color={color} 
                            size={size || "md"} 
                            rounded={rounded || "sm"} 
                            disabled={disabled}
                        >
                            Click Me 
                        </Button>
                    </QuickViewResult.Preview>
                </QuickViewResult>
            </div>
        </div>
    );
}

export default ButtonDocs;