import clsx from "clsx";
import React, { useLayoutEffect, useState } from "react";
import { _switch_shape } from "../constants/propConstants";
import { switchShape } from "../types/propTypes";
import { InputControl, SelectControl, ColorControl, CheckControl } from "./ControlPanel";
import QuickViewResult from "./QuickViewResult";
import { Switch } from "@ivenyao/capybara-ui";

const SwitchDocs = () => {
    const [color, setColor] = useState("");
    const [disabled, setDisabled] = useState(false);
    const [shape, setShape] = useState<switchShape>("default");
    const [propsStr, setPropsStr] = useState("");
    const [checked, setChecked] = useState(false);
    const [width, setWidth] = useState<string|number>();
    const [toggleSize, setToggleSize] = useState<string|number>();

    useLayoutEffect(() => {
        let props = '';
        props += (width? `\n\twidth="${width}"`:'')
        props += (toggleSize? `\n\ttoggleSize="${toggleSize}"`:'')
        props += (color? `\n\tcolor="${color}"`:'')
        props += (shape? `\n\tshape="${shape}"`:'')
        props += (disabled?"\n\tdisabled":'');

        setPropsStr(props);

    },[color, shape, disabled])

    const handleChange = (value:boolean) => {
        setChecked(value);
    }

    const handleWidthChange = (value: string) => {
        if(value.length === 0 || isNaN(Number(value))) {
            setWidth(value);
        } else {
            setWidth(parseInt(value));
        }
    }

    const handleToggleSizeChange = (value: string) => {
        if(value.length === 0 || isNaN(Number(value))) {
            setToggleSize(value);
        } else {
            setToggleSize(parseInt(value));
        }
    }

    return (
        <>
            <div className="title">Switch</div>
            <div className="interactive-section">
                <div className="controller">
                    <div className="second-title" id="quick-view">Quick View</div>
                    <InputControl label="width" value={width} placeholder="eg: 50, 60px, default: 40px" onChange={handleWidthChange}/>
                    <InputControl label="toggleSize" value={toggleSize} placeholder="eg: 25, 30px, default: 15px" onChange={handleToggleSizeChange}/>
                    <SelectControl label="shape" onChange={(value) => setShape(value as switchShape)} value={shape} options={_switch_shape}/>
                    <ColorControl value={color} onChange={(value) => setColor(value)}/>
                    <CheckControl label="disabled" checked={disabled} onChange={(v) => setDisabled(v)} />
                </div>
                <QuickViewResult>
                    <QuickViewResult.Code>
{`
    <Switch${propsStr}
        label="Dark Mode"
        checked={isDarkMode}
        onChange={handleChange}
    />
`}
                    </QuickViewResult.Code>
                    <QuickViewResult.Preview style={{padding:0}}>
                        <div className={clsx(
                            "preview-container",
                            {
                                "darkmode": checked
                            }
                        )}>
                            <Switch
                                label="Dark Mode"
                                checked={checked}
                                onChange={handleChange}
                                color={color}
                                disabled={disabled}
                                width={width}
                                toggleSize={toggleSize}
                                shape={shape}
                            />
                        </div>
                    </QuickViewResult.Preview>
                </QuickViewResult>
            </div>
        </>
    );
}

export default SwitchDocs;