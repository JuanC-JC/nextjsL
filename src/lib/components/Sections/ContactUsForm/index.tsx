import { useState } from "react"

import { Button, InputText } from "@/lib/components"
import { If } from "@/lib/helpers"

import { ContactUsFormStyled } from "./style"
import contactBackground from "@/assets/images/contact-background.webp"
import config from "@/lib/config"
import Image from "next/image"
import { formatCPF, validationCPF, validationPhoneNumber, formatPhoneNumber } from "@/lib/helpers/ContactUsForm"


type Errors = {
  [key: string]: string
}

export const ContactUsForm = () => {
  const [form, setForm] = useState({ name: "", cpf: "", phone: "", address: "" })
  const [successForm, setSuccessForm] = useState({ errorType: false, message: "" })

  const [errors, setErrors] = useState<Errors>({})
  const [loading, setLoading] = useState(false)

  const changeInputForm = ({ name, value }: any) => {
    setForm({ ...form, [name]: value })
  }

  const onSubmit = async () => {
    const cpfValidated = validationCPF(form.cpf)
    const numberValidated = validationPhoneNumber(form.phone)

    // testing CPF: 228.315.270-40
    const newErrors = {
      cpf: cpfValidated ? "" : "CPF inválido.",
      phone: numberValidated ? "" : "Celular inválido.",
      name: form.name ? "" : "Preencha todos os campos para enviar.",
      address: form.address ? "" : "Preencha todos os campos para enviar."
    }

    setErrors(newErrors)

    const hasErrors = Object.values(newErrors).filter(error => error !== "").length

    if (hasErrors) return

    setLoading(true)
    const url = `${config.urlApi}/leads`

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "Nome": form.name,
          "CPF": form.cpf,
          "Bairro": form.address,
          "Telefone": form.phone
        })
      })

      if (!response.ok) throw new Error()

      setForm({ name: "", cpf: "", phone: "", address: "" })

      window.gtag('event', 'web_form_submit', {
        status: "successful",
        cpf: form.cpf
      })

      setSuccessForm({ errorType: false, message: "Agradecemos seu interesse! Em breve entraremos em contato." })
    } catch (error) {
      setSuccessForm({ errorType: true, message: "Algo inesperado aconteceu. Tente novamente por favor." })

      window.gtag('event', 'web_form_submit', {
        status: "failed",
        failureMotive: String(error)
      })
    } finally {
      setLoading(false)
    }
  }

  const handleError = (name: string, message: string) => {
    setErrors({ ...errors, [name]: message })
  }

  const webFormStartWatcher = (event: any) => {
    if (!event.target.name || sessionStorage.getItem("web_form_start")) return

    sessionStorage.setItem('web_form_start', `${event.target.name} clicked`)

    // window.gtag('event', 'web_form_start', {
    //   input_clicked: event.target.name
    // })
  }

  return (
    <ContactUsFormStyled>
      <h3>Preencha seus dados abaixo que entraremos em contato</h3>
      <div className="contactUsForm__form" onClick={webFormStartWatcher}>
        <div className="contactUsForm__formSection">
          <InputText
            name="name"
            onChange={changeInputForm}
            placeholder="Ex: José Antonio"
            label="Nome completo"
            value={form.name}
            error={errors.name}
            setError={handleError}
          />

          <InputText
            name="phone"
            placeholder="Ex: (11) 91233-5678"
            label="Celular"
            value={form.phone}
            onChange={changeInputForm}
            formatter={formatPhoneNumber}
            error={errors.phone}
            setError={handleError}
          />

          <Button text="Enviar" width="100%" onClick={onSubmit} />
        </div>

        <div className="contactUsForm__formSection">
          <InputText
            name="cpf"
            placeholder="Ex: 000.000.000-00"
            label="CPF"
            value={form.cpf}
            onChange={changeInputForm}
            formatter={formatCPF}
            error={errors.cpf}
            setError={handleError}
          />
          <InputText
            name="address"
            placeholder="Ex: Vila Olímpia"
            label="Bairro onde mora"
            value={form.address}
            onChange={changeInputForm}
            error={errors.address}
            setError={handleError}
          />

          <If condition={!loading && successForm.message}>
            <p className={`contactUsForm__message ${successForm.errorType ? "error" : ""}`}>
              {successForm.message}
            </p>
          </If>

          <If condition={loading}>
            <div className="loadingspinner__wrapper">
              <div className="loadingspinner" />
            </div>
          </If>
        </div>
      </div>

      <Button text="Enviar" width="100%" onClick={onSubmit} />

      <If condition={!loading && successForm.message}>
        <p className={`contactUsForm__message ${successForm.errorType ? "error" : ""}`}>
          {successForm.message}
        </p>
      </If>

      <Image loading="lazy" className="contactUsForm__img" src={contactBackground} alt="background footer image"/>
    </ContactUsFormStyled>
  )
}
