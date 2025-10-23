'use client'
import { useState } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import LOGO from '@/app/assets/logos/app-logo.svg'
import MENU_MOBILE_ICON from '@/app/assets/icons/menu-mobile-icon.svg'
import CLOSE_ICON from '@/app/assets/icons/close-icon.svg'
import { PentaButton } from '../button'
import { MENUS } from '@/app/constants'

const Header = () => {
  const pathName = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-secondary border-b border-button z-50 px-10 py-5 
      max-xs:px-5 max-xs:py-3 max-xs:h-[60px] max-lg:px-5 max-lg:py-3`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <button
            onClick={toggleMenu}
            className="mr-4 hidden max-xs:block max-lg:block"
          >
            <Image
              src={isMenuOpen ? CLOSE_ICON : MENU_MOBILE_ICON}
              alt="menu-toggle-icon"
              className="w-6 h-6"
            />
          </button>
          <Image
            src={LOGO}
            alt="logo-app"
            className="mr-6 max-xs:h-9 max-lg:h-9"
          />
          <div className="flex items-center max-lg:hidden max-xs:hidden">
            {MENUS.map((menu) => (
              <div
                key={menu.id}
                className={`text-[14px] cursor-pointer font-medium uppercase px-4.5 py-2.5 h-10 ${
                  pathName === menu.url
                    ? 'text-primary bg-button rounded-[100px]'
                    : 'text-text'
                }`}
              >
                {menu.title}
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <PentaButton
            variant="primary"
            className="text-[16px] font-black w-[114px] max-xs:h-9 max-xs:w-[90px]"
          >
            SIGN UP
          </PentaButton>
          <PentaButton
            variant="secondary"
            className="text-[16px] font-black w-[106px] max-xs:h-9 max-xs:w-[98px]"
          >
            LOG IN
          </PentaButton>
        </div>
      </div>
      {isMenuOpen && (
        <div className="fixed top-[60px] left-0 w-full h-[calc(100vh-60px)] bg-[#1E1E1E] flex flex-col items-center p-5 z-40 animate-fadeIn gap-4 overflow-y-auto">
          {MENUS.map((menu) => (
            <div
              key={menu.id}
              className={`uppercase text-[14px] font-medium py-3 cursor-pointer w-full text-center rounded-[100px] ${
                pathName === menu.url
                  ? 'bg-[#333] text-primary'
                  : 'text-white hover:text-primary'
              }`}
            >
              {menu.title}
            </div>
          ))}
        </div>
      )}
    </header>
  )
}

export { Header }
