import { useEffect, useRef } from 'react'
import CloseMenuIcon from 'assets/CloseMenuIcon'
import { menus } from 'data/menu'
import { Button } from './common'
import MobileMenu from './MobileMenu'

type Props = {
  onClose: () => void
}

const DrawerMenu = ({ onClose }: Props) => {
  const drawerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // disable scroll on body
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <>
      {/* overlay */}
      <div className="absolute inset-0 bg-almostBlack/80" onClick={onClose} />
      <div
        ref={drawerRef}
        className="absolute top-0 bottom-0 right-0 w-60 overflow-y-auto bg-almostWhite p-8"
      >
        <div className="flex justify-end">
          <span className="cursor-pointer" onClick={onClose}>
            <CloseMenuIcon />
          </span>
        </div>
        <div className="mt-8">
          {menus.map((menu) => (
            <MobileMenu key={menu.label} data={menu} />
          ))}
        </div>
        <div>
          <Button className="w-full">Login</Button>
          <Button className="w-full" variant="outline">
            Register
          </Button>
        </div>
      </div>
    </>
  )
}

export default DrawerMenu
