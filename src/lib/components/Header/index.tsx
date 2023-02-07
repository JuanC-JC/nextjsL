import { Button } from "../Buttons"
import { VammoTextIcon } from "../Icons"
import { HeaderStyled } from "./index.styled"

interface IHeaderProps {
  isOpen: boolean
  handleClick?: () => void
  closeBurgerBtn?: () => void
}

const Header = ({ isOpen, handleClick, closeBurgerBtn }: IHeaderProps) => {
  const listItems = [
    { name: "Estações de troca", goTo: "batteries_section" },
    { name: "Motos", goTo: "bikes" },
    { name: "Serviços", goTo: "services" },
    { name: "Preços", goTo: "prices" },
  ]

  return (
    <HeaderStyled>
      <a className="header__icon" href="#home" aria-label="go to the page top">
        <VammoTextIcon color="black" />
      </a>

      <nav className={`header__menu ${isOpen ? "menu--visibility" : ""}`}>
        <ul className="menu-container">
          {listItems.map(({ name, goTo }, index) => (
            <li onClick={closeBurgerBtn} key={name + index}>
              <a href={`#${goTo}`} aria-label={`go to ${name} section`}>
                {name}
              </a>
            </li>
          ))}
        </ul>

        <Button
          onClick={closeBurgerBtn}
          goTo="contact"
          text="Quero conhecer"
          color="black"
          outline={true}
          padding="12px 30px"
          width="320px"
          id="header_knowMore"
        />
      </nav>

      <div onClick={handleClick} className={`header__burger ${isOpen ? "open" : ""}`} >
        <span />
        <span />
        <span />
      </div>
    </HeaderStyled>
  )
}

export default Header
