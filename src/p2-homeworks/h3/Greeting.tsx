import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import {UserType} from "./HW3";
import {KeyboardEvent} from "react";

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
    users: Array<UserType>
    onEnterHandler: (e: KeyboardEvent<HTMLInputElement>) => void
}

const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, users, onEnterHandler}
) => {
    const inputClass = error ? s.errorInput : s.input // need to fix with (?:)

    return (
        <div className={s.container}>
            <input value={name} onChange={setNameCallback} className={inputClass} onKeyDown={onEnterHandler}
                   onBlur={setNameCallback}/>
            <button onClick={addUser} disabled={!name}>add</button>
            <span> {totalUsers}</span>
            <div className={s.error}>{error}</div>
            <div>
                <div className={s.title}>Array of users</div>
                {
                    users.map(u => {
                        return (
                            <div>
                                <span>{u.name} - </span>
                                <span> {u._id}</span>
                            </div>
                        )
                    })
                }</div>
        </div>
    )
}

export default Greeting
