import { useState } from 'react'
import LogoIcon from 'assets/LogoIcon'
import MenuIcon from 'assets/MenuIcon'
import { menus } from 'data/menu'
import { Button } from './common'
import Menu from './Menu'
import DrawerMenu from './DrawerMenu'

type Props = {}

const Header = (props: Props) => {
  const [showDrawer, setShowDrawer] = useState(false)
  const toggleDrawer = () => setShowDrawer((prev) => !prev)

  return (
    <div className="flex w-full px-8 py-4 justify-between items-center">
      <div className="flex">
        <div className="py-4">
          <LogoIcon />
        </div>
        <nav className="ml-16 hidden md:flex">
          <ul className="flex space-x-4">
            {menus.map((menu) => (
              <Menu key={menu.label} data={menu} />
            ))}
          </ul>
        </nav>
      </div>
      <div className="space-x-4 hidden md:flex">
        <Button>Login</Button>
        <Button variant="outline">Register</Button>
      </div>
      <div className="block md:hidden cursor-pointer" onClick={toggleDrawer}>
        <MenuIcon />
      </div>
      {showDrawer && <DrawerMenu onClose={toggleDrawer} />}
    </div>
  )
}

export default Header
