import { RootReducerType } from './root-reducer-types'

export interface ReduxAction {
  type: string
  payload: any
}

export type GetState = () => RootReducerType
