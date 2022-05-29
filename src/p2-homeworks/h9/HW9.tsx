import React from 'react'
import Clock from './Clock'
import c from "./HW9.module.css"

function HW9() {
    return (
        <div className={c.container}>
            <a>homeworks 9</a>
            <div>
                <Clock/>
            </div>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeClock/>*/}
        </div>
    )
}

export default HW9
