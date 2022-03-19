import React from 'react'
import m from "./Message.module.css";

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={m.container}>
            <span><img className={m.avatar} src={props.avatar}/></span>
            <span className={m.corner}></span>
            <span className={m.message}>
                <div className={m.nameText}>{props.name}</div>
                <div className={m.messageText}>{props.message}</div>
                <div className={m.time}>{props.time}</div>
            </span>

        </div>
    )
}

export default Message
