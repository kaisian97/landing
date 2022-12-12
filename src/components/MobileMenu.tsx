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
    <div className="mt-5 text-mediumGray">
      <div
        className="mb-5 flex cursor-pointer items-center space-x-4"
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
          className="with-transition ml-6 flex flex-col space-y-4"
        >
          {data.children?.map((child) => (
            <li
              key={child.label}
              role="menuitem"
              className="flex cursor-pointer space-x-4"
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
