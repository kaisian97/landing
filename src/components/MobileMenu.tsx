import { useState } from 'react'
import ArrowDown from 'assets/ArrowDown'
import { MenuItem } from 'types'

type Props = {
  data: MenuItem
}

const MobileMenu = ({ data }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const toggleMenu = () => {
    setIsExpanded((prev) => !prev)
  }

  return (
    <div className="text-mediumGray mt-5">
      <div
        className="flex space-x-4 items-center mb-5 cursor-pointer"
        aria-haspopup="true"
        aria-expanded={isExpanded}
        onClick={toggleMenu}
      >
        <span>{data.label}</span>
        {!!data.children?.length && (
          <span
            aria-hidden="true"
            className={`${isExpanded ? 'rotate-180' : ''} with-transition`}
          >
            <ArrowDown />
          </span>
        )}
      </div>
      {!!data.children?.length && isExpanded && (
        <ul
          role="menu"
          className="ml-6 flex flex-col space-y-4 with-transition"
        >
          {data.children?.map((child) => (
            <li
              key={child.label}
              role="menuitem"
              className="flex space-x-4 cursor-pointer"
            >
              {!!child.icon && <span aria-hidden="true">{child.icon}</span>}
              <span>{child.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default MobileMenu
