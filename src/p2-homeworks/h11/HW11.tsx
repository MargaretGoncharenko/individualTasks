import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import a from "./HW11.module.css"

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    let onChangeRange = (value1: number, value2: number) => {
        setValue1(value1)
        setValue2(value2)
    }
    return (
        <div>
            <a>homeworks 11</a>
            <div className={a.block}>
                <span className={a.square}>{value1}</span>
                <SuperRange
                    value={value1}
                    onChangeRange={setValue1}
                />
            </div>
            <div>
                <span className={a.square}>{value1}</span><span>  {"-"} </span>
                <span className={a.square}> {value2}</span>
                <SuperDoubleRange
                    onChangeRange={onChangeRange}
                    value={[value1, value2]}
                    step={1}
                    disabled={true}
                />
            </div>
        </div>
    )
}

export default HW11

//
// <hr/>
// {/*для личного творчества, могу проверить*/}
// {/*<AlternativeSuperRange/>*/}
// {/*<AlternativeSuperDoubleRange/>*/}
// <hr/>