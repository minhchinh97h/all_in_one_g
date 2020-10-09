import { SWITCH_THEME } from '~actions/theme-actions'
import { ReduxAction } from '~types/redux-types'
import { ThemeEnums, ThemeReducer } from '~types/theme-types'

const initialState: ThemeReducer = {
  theme: ThemeEnums.DARK
}

const themeReducer = (
  state = initialState,
  action: ReduxAction
): ThemeReducer => {
  switch (action.type) {
    case SWITCH_THEME:
      const { theme } = state
      if (theme === ThemeEnums.LIGHT) {
        state.theme = ThemeEnums.DARK
      } else state.theme = ThemeEnums.LIGHT
      return { ...state }

    default:
      return state
  }
}

export default themeReducer
