import React from "react"
import { Provider } from "react-redux"
import store from "./src/store"

interface Props {
  element: React.ReactNode
}

const Wrapper = ({ element }: Props) => {
  return <Provider store={store}>{element}</Provider>
}

export default Wrapper
