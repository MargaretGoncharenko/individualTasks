import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react';
import s from './SuperRange.module.css';
import {Slider} from "@material-ui/core";

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperRangePropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeRange: (value: number) => void
    value: number
};

const SuperRange: React.FC<SuperRangePropsType> = (
    {
        type, value,// достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeRange,
        className,
        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const onChangeCallback = (event: ChangeEvent<{}>, value: number | number[]) => {
        if (!Array.isArray(value)) {
            onChangeRange && onChangeRange(value)
        }
    }
    const finalRangeClassName = `${s.range} ${className ? className : ''}`
    return (
        <>
            <Slider
                className={finalRangeClassName}
                value={value}
                onChange={onChangeCallback}
                valueLabelDisplay="auto"
            />
        </>
    )
}

export default SuperRange