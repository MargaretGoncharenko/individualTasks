import React, {ChangeEvent, useCallback} from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {FilterThemeType} from "./bll/themeReducer";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeAC} from "./bll/themeReducer"

const themes = ['dark', 'red', 'some', "drakula", "northernLights"];

function HW12() {
    const dispatch = useDispatch();
    const theme = useSelector<AppStoreType, FilterThemeType>(state => state.theme.theme)
    const onChange = useCallback(function (e: ChangeEvent<HTMLInputElement>,) {
        let onChange = e.currentTarget.value
        const action = changeThemeAC(onChange as FilterThemeType);
        dispatch(action)
    }, [])

    return (
        <div className={s.container}>
            <div className={s[theme]}>
            <span className={s[theme + '-text']}>
                <a>homeworks 12</a>
            </span>
                {
                    themes.map((t) => (
                        <input
                            key={t.big()}
                            type={"radio"}
                            value={t}
                            checked={t === theme}
                            onChange={onChange}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default HW12;
