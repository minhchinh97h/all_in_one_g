export interface ThemeProps {
  theme: Theme
}

export interface Theme {
  DARK: {
    PRIMARY_COLOR: string
    SECONDARY_COLOR: string
    TEXT_PRIMARY_COLOR: string
    TEXT_SECONDARY_COLOR: string
    BUTTON_PRIMARY_COLOR: string
  }

  LIGHT: {}
}
