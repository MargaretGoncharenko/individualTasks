import React from 'react'
import {AffairPriorityType, AffairType, FilterType} from "./HW2";
import a from "./Affairs.module.css"

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }
    const priority = a.item + ' ' + a[props.affair.priority]


    return (
        <div className={a.container}>
            <span className={a.nameBlock}>{props.affair.name}</span>
            <span className={priority}> {props.affair.priority} </span>
            <button className={a.buttonDelete} onClick={deleteCallback}>delete</button>
        </div>
    )
}

export default Affair
