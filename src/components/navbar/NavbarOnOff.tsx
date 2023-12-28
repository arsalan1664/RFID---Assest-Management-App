import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"


function NavBarOnOff({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  const [showNav, setShowNav] = useState(false)
  useEffect(() => {
    if (location.pathname === '/auth/register' || location.pathname === '/auth/login') {
      setShowNav(false)
    } else {
      setShowNav(true)

    }
  }, [location])

  return (
    <>
      {showNav && children}
    </>
  )
}

export default NavBarOnOff


