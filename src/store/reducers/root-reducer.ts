import { combineReducers } from "redux"
import { RootReducerType } from "~types/root-reducer-types"
import { ThemeReducer } from "~types/theme-types"
import themeReducer from "./theme-reducer"

const rootReducer: RootReducerType = {
  themeReducer: (themeReducer as any) as ThemeReducer
}

export default combineReducers<any>(rootReducer)
