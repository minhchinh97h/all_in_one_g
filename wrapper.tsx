import { withTrans } from "@i18n/withTrans"
import React from "react"
import { Provider } from "react-redux"
import store from "./src/store"

interface Props {
  children: React.ReactNode
}

const Wrapper = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>
}

export default withTrans(Wrapper)
