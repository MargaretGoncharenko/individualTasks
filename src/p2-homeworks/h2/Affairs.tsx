import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2';
import b from "./Affairs.module.css"

type AffairsPropsType = {
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    filter: FilterType

}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter("all")
    }
    const setHigh = () => {
        props.setFilter("high")
    }
    const setMiddle = () => {
        props.setFilter("middle")
    }
    const setLow = () => {
        props.setFilter("low")
    }

    const ButtonClass = (filter: FilterType) => {
        return b.normal + (props.filter === filter ? " " + b.active : "")
    }
    return (
        <div className={b.block}>

            {mappedAffairs}

            <button className={ButtonClass("all")} onClick={setAll}>All</button>
            <button className={ButtonClass("high")} onClick={setHigh}>High</button>
            <button className={ButtonClass("middle")} onClick={setMiddle}>Middle</button>
            <button className={ButtonClass("low")} onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs
