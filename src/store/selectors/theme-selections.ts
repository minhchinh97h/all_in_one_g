import { createSelector } from 'reselect'
import { RootReducerType } from '~types/root-reducer-types'

const getThemeReducer = (state: RootReducerType) => state.themeReducer

export const getTheme = createSelector(
  getThemeReducer,
  themeReducer => themeReducer.theme
)
