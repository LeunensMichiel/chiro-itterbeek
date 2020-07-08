import React, { useContext } from "react"
import { FormWrapper, StyledInput, ItterbeekForm } from "./contactStyles"
import { GenderContext } from "../../context/GenderContext"

const Form = () => {
  const { genderState } = useContext(GenderContext)

  return (
    <FormWrapper gender={genderState.gender}>
      <h1>{`Contactformulier ${
        genderState.gender === 1 ? "Jokonta" : "Allegro"
      }`}</h1>
      <ItterbeekForm
        name={`Contact ${genderState.gender === 1 ? "Jokonta" : "Allegro"}`}
        // action="/success/"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input
          type="hidden"
          name="form-name"
          value={`Contact ${genderState.gender === 1 ? "Jokonta" : "Allegro"}`}
        />
        <input type="hidden" name="bot-field" />
        <input
          type="hidden"
          name="chiro"
          value={genderState.gender === 1 ? "Jokonta" : "Allegro"}
        />
        <StyledInput>
          <label htmlFor="naam">
            Naam<sup>*</sup>
          </label>
          <input type="text" id="naam" name="naam" required autoComplete={1} />
        </StyledInput>
        <StyledInput>
          <label htmlFor="email">
            E-mail<sup>*</sup>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete={1}
          />
        </StyledInput>
        <StyledInput>
          <label htmlFor="phone">Telefoon</label>
          <input type="tel" id="phone" name="telefoon" />
        </StyledInput>
        <StyledInput>
          <label htmlFor="subject">
            Onderwerp<sup>*</sup>
          </label>
          <input type="text" id="subject" name="onderwerp" required />
        </StyledInput>
        <StyledInput textarea>
          <label htmlFor="message">
            Bericht<sup>*</sup>
          </label>
          <textarea id="message" name="bericht" required />
        </StyledInput>
        <button type="submit" value="Submit">
          Verstuur
        </button>
      </ItterbeekForm>
    </FormWrapper>
  )
}

export default Form
