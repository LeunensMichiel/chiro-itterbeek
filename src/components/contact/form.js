import React, { useContext } from "react"
import { FormWrapper, StyledInput, ItterbeekForm } from "./contactStyles"
import { GenderContext } from "../../context/GenderContext"

export const Form = () => {
  const { genderState } = useContext(GenderContext)

  return (
    <FormWrapper gender={genderState.gender}>
      <h1>{`Contactformulier ${
        genderState.gender === 1 ? "Jokonta" : "Allegro"
      }`}</h1>
      <ItterbeekForm>
        <StyledInput>
          <label htmlFor="naam">
            Naam<sup>*</sup>
          </label>
          <input
            type="text"
            autoFocus
            id="naam"
            name="naam"
            required
            autoComplete={1}
          />
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
        <button type="submit" form="form1" value="Submit">
          Verstuur
        </button>
      </ItterbeekForm>
    </FormWrapper>
  )
}
