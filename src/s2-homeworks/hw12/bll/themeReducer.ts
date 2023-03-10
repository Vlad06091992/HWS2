const initState = {
    themeId: 1,
}

export type StateType = {
    themeId: any
}

export const themeReducer = (state: StateType = initState, action: ChangeACType): StateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return {...state, themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number): any => ({type: 'SET_THEME_ID', id}) as const  // fix any

type ChangeACType = ReturnType<typeof changeThemeId>