import { useTranslation } from "gatsby-plugin-react-i18next"

export const translate = (value: string) => {
  const { t } = useTranslation()
  return t(value)
}
