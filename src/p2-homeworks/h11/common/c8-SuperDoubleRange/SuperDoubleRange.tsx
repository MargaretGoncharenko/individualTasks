import React, {ChangeEvent} from 'react'
import {Slider} from "@material-ui/core";


type SuperDoubleRangePropsType = {
    onChangeRange: (value1: number, value2: number) => void
    value: [number, number]
    step: number
    disabled: boolean
}
const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (props) => {
    const handleChange = (event: ChangeEvent<{}>, value: number | number[]) => {
        if (Array.isArray(value)) {
            props.onChangeRange(value[0], value[1])
        }
    };
    return (
        <div>
            <Slider
                value={[props.value[0], props.value[1]]}
                onChange={handleChange}
                valueLabelDisplay="auto"
            />
        </div>
    );
}

export default SuperDoubleRange