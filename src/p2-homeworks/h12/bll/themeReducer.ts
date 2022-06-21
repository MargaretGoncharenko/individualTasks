export type ThemeType = {
    theme: string
}
export type FilterThemeType = "dark" | "red" | "some"
export type ChangeThemeActionType = {
    type: "CHANGE_THEME",
    themes: Array<ThemeType>
}

type initStateType = {
    theme: FilterThemeType
}
const initState: initStateType = {
    theme: "some"
};


export const changeThemeAC = (theme: FilterThemeType) => ({type: "CHANGE_THEME", theme} as const)
export type changeThemeTypeACType = ReturnType<typeof changeThemeAC>
export const themeReducer = (state = initState, action: changeThemeTypeACType): initStateType => { // fix any
    switch (action.type) {
        case "CHANGE_THEME": {
            return {
                ...state,
                theme: action.theme
            }
        }
        default:
            return state;
    }
};
