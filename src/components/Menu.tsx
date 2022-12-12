import { useState } from 'react'
import { MenuItem } from 'types'
import ArrowDown from 'assets/ArrowDown'

type Props = {
  data: MenuItem
}

const Menu = ({ data }: Props) => {
  const [isHoverring, setIsHoverring] = useState(false)
  const showDropdown = () => setIsHoverring(true)
  const hideDropdown = () => setIsHoverring(false)

  const hasChildren = !!data.children?.length
  return (
    <div
      className="relative cursor-pointer px-4 py-4"
      onMouseEnter={showDropdown}
      onMouseLeave={hideDropdown}
    >
      <div
        className="menu-item flex items-center space-x-4"
        aria-expanded={isHoverring}
        aria-haspopup="true"
      >
        <span>{data.label}</span>
        {hasChildren && (
          <span
            aria-hidden="true"
            className={`${isHoverring ? 'rotate-180' : ''} with-transition`}
          >
            <ArrowDown />
          </span>
        )}
      </div>
      {hasChildren && isHoverring && (
        <ul
          role="menu"
          className="absolute mt-4 flex flex-col space-y-2 rounded-lg border border-gray-100 bg-white p-4 shadow-2xl"
        >
          {data.children?.map((child) => {
            return (
              <li
                key={child.label}
                role="menuitem"
                className="menu-item flex items-center space-x-4"
              >
                {!!child.icon && <span aria-hidden="true">{child.icon}</span>}
                <span className="whitespace-nowrap">{child.label}</span>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default Menu
