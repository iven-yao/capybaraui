import React, { useLayoutEffect, useState } from "react";
import { _radio_variant, _orientation } from "../constants/propConstants";
import { radioVariant, orientation } from "../types/propTypes";
import { SelectControl, ColorControl, CheckControl } from "./ControlPanel";
import QuickViewResult from "./QuickViewResult";
import { RadioGroup } from "@ivenyao/capybara-ui";

const RadioGroupDocs = () => {
    const [color, setColor] = useState("");
    const [disabled, setDisabled] = useState(false);
    const [orientation, setOrientation] = useState<orientation>("vertical");
    const [variant, setVariant] = useState<radioVariant>("circle");
    const [propsStr, setPropsStr] = useState("");

    useLayoutEffect(() => {
        let props = '';
        props += (color? `\n\tcolor="${color}"`:'')
        props += (orientation? `\n\torientation="${orientation}"`:'')
        props += (variant? `\n\tvariant="${variant}"`:'')
        props += (disabled?"\n\tdisabled":'');

        setPropsStr(props);

    },[color, variant, orientation, disabled])

    const handleChange = (value:string) => {
        console.log(value);
    }

    return (
        <>
            <div className="title">RadioGroup</div>
            <div className="interactive-section">
                <div className="controller">
                    <div className="second-title" id="quick-view">Quick View</div>
                    <SelectControl label="variant" onChange={(value) => setVariant(value as radioVariant)} value={variant} options={_radio_variant}/>
                    <SelectControl label="orientation" onChange={(value) => setOrientation(value as orientation)} value={orientation} options={_orientation}/>
                    <ColorControl value={color} onChange={(value) => setColor(value)} />
                    <CheckControl label="disabled" checked={disabled} onChange={(v) => setDisabled(v)} />
                </div>
                <QuickViewResult>
                    <QuickViewResult.Code>
{`
    <RadioGroup${propsStr}
        name="test"
        onChange={(v) => console.log(v)}
    >
        <RadioGroup.Radio label="test1" value="test1"/>
        <RadioGroup.Radio label="test2" value="test2"/>
        <RadioGroup.Radio label="test3" value="test3"/>
        <RadioGroup.Radio label="test4" value="test4"/>
    </RadioGroup>
`}
                    </QuickViewResult.Code>
                    <QuickViewResult.Preview>
                        <RadioGroup 
                            name={"test"} 
                            onChange={handleChange} 
                            orientation={orientation} 
                            color={color}
                            disabled={disabled}
                            variant={variant}
                        >
                            <RadioGroup.Radio label="test1" value="test1"/>
                            <RadioGroup.Radio label="test2" value="test2"/>
                            <RadioGroup.Radio label="test3" value="test3"/>
                            <RadioGroup.Radio label="test4" value="test4"/>
                        </RadioGroup>
                    </QuickViewResult.Preview>
                </QuickViewResult>
            </div>
        </>
    );
}

export default RadioGroupDocs;