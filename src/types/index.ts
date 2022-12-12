export type Menu = MenuItem[]

export type MenuItem = {
  label: string
  icon?: JSX.Element
  children?: MenuItem[]
}
