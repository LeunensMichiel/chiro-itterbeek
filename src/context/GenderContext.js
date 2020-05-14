import React, { useReducer, createContext } from "react"

function reducer(genderState, action) {
  switch (action.type) {
    case "TOGGLE_GENDER":
      return {
        ...genderState,
        gender: genderState.gender === 1 ? 2 : 1,
      }
    case "TOGGLE_MALE":
      return {
        ...genderState,
        gender: 1,
      }
    case "TOGGLE_FEMALE":
      return {
        ...genderState,
        gender: 2,
      }
    default:
      throw new Error("Bad Action Type")
  }
}

const initialGenderState = {
  gender: 1,
}

export const GenderContext = createContext(initialGenderState)

const GenderProvider = ({ children }) => {
  const [genderState, dispatch] = useReducer(reducer, initialGenderState)
  return (
    <GenderContext.Provider value={{ genderState, dispatch }}>
      {children}
    </GenderContext.Provider>
  )
}

export default GenderProvider
