import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";
import {KeyboardEvent} from "react";


type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        const Name = e.currentTarget.value.trim()
        if (Name) {
            setName(Name)
            error && setError(``)
        } else {
            name && setName(``)
            setError(`No name!`)
        }

    }
    const addUser = () => {
        addUserCallback(name)
        alert(`Hello ${name}!`)
        setName("")
    }
    const onEnterHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && name) {
            addUser()
        }
    }
    const totalUsers = users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            users={users}
            onEnterHandler={onEnterHandler}
        />
    )
}

export default GreetingContainer
