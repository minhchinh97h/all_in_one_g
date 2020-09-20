import i18next  from "i18next"

export const translate = (value: string) => i18next.t(value)

export const changeLanguage = async (lang: string) => {
    try{
        await i18next.changeLanguage(lang)
    } catch(err) {
        console.log("changeLanguage function at i18n/helper.ts", err)
    }
}