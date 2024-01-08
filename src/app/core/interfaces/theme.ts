export type Theme = {
  name: string,
  className: string,
  iconPath: string
}

const light: Theme = {
  name: 'light',
  className: 'light-mode',
  iconPath: 'assets/light-mode-icon.svg'
}

const dark: Theme = {
  name: 'dark',
  className: 'dark-mode',
  iconPath: 'assets/dark-mode-icon.svg'
}

export const themes = {
  light,
  dark
} as const;
