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
      className="cursor-pointer relative px-4 py-4"
      onMouseEnter={showDropdown}
      onMouseLeave={hideDropdown}
    >
      <div
        className="flex space-x-4 items-center menu-item"
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
          className="bg-white border border-gray-100 shadow-2xl absolute p-4 rounded-lg flex flex-col space-y-2 mt-4"
        >
          {data.children?.map((child) => {
            return (
              <li
                key={child.label}
                role="menuitem"
                className="flex space-x-4 items-center menu-item"
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
