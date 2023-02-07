import { LinkedinIcon, VammoTextIcon, WhatsappIcon } from "../Icons"
import { FooterStyled } from "./footer.styled"

const Footer = () => {
  const whatsappUrl = "https://wa.me/5511939246556"
  const linkedInurl = "https://br.linkedin.com/company/leoparda-electric"

  return (
    <FooterStyled>
      <div className="title">
        <VammoTextIcon />

        <div className="footer__icons">
          <a rel="noreferrer" className="icon" target="_blank" href={whatsappUrl} aria-label="Contact us via us">
            <WhatsappIcon />
          </a>
          <a rel="noreferrer" className="icon" target="_blank" href={linkedInurl} aria-label="go to vammo linkedin">
            <LinkedinIcon />
          </a>
        </div>
      </div>

      <div className="description">
        <p>Rua Santa Justina, 434 - São Paulo, SP - 04545-042</p>
        <p>Todos direitos reservados - Leoparda LTDA. 47.418.909/0001-28</p>
      </div>

      <div className="footer__icons-mobile">
        <a rel="noreferrer" className="icon" target="_blank" href={whatsappUrl} aria-label="Contact us via us">
          <WhatsappIcon />
        </a>
        <a rel="noreferrer" className="icon" target="_blank" href={linkedInurl} aria-label="go to vammo linkedin">
          <LinkedinIcon />
        </a>
      </div>
    </FooterStyled>
  )
}

export default Footer
