import { useEffect, useState } from "react"
// import { Outlet } from "react-router-dom"

import { Footer, Header } from "../index"
import { If } from "../../helpers"
import { BackgroundStyled } from "./index.styled"

const Layout = ({children, location}: any) => {

  const isHome = location.patname === '/';
    const [isLoading, setIsLoading] =useState(isHome);

    useEffect(()=>{
        if (isLoading) {
            return;
        }
    }, [isLoading]);

  // ------------------------------

  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => setIsOpen(!isOpen)

  const closeBurgerBtn = () => {
    setIsOpen(false)
  }

  const watchScroll = () => window.addEventListener("scroll", closeBurgerBtn)

  useEffect(() => {
    watchScroll()

    return () => { window.removeEventListener("scroll", watchScroll) }
  })

  return (
    <>
      <Header isOpen={isOpen} handleClick={handleClick} closeBurgerBtn={closeBurgerBtn} />

      <If condition={isOpen}>
        <BackgroundStyled onClick={closeBurgerBtn} />
      </If>

      <main  id="content" className="">
        {children}
      </main>
      {/* <Outlet /> */}
      <Footer />
    </>
  )
}

export default Layout