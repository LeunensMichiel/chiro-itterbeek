import React, { useReducer, createContext } from "react"

function reducer(genderState, action) {
  switch (action.type) {
    case "TOGGLE_GENDER":
      localStorage.setItem(
        "chiro-itterbeek-gender",
        genderState.gender === 1 ? 2 : 1
      )
      return {
        ...genderState,
        gender: genderState.gender === 1 ? 2 : 1,
      }
    case "TOGGLE_MALE":
      localStorage.setItem("chiro-itterbeek-gender", 1)
      return {
        ...genderState,
        gender: 1,
      }
    case "TOGGLE_FEMALE":
      localStorage.setItem("chiro-itterbeek-gender", 2)
      return {
        ...genderState,
        gender: 2,
      }
    default:
      throw new Error("Bad Action Type")
  }
}

export const GenderContext = createContext()

const GenderProvider = ({ children }) => {
  let gender = () => {
    if (typeof window !== `undefined`) {
      const gender = Number(
        window.localStorage.getItem("chiro-itterbeek-gender") || 0
      )
      return { gender }
    } else {
      return 1
    }
  }
  const [genderState, dispatch] = useReducer(reducer, { gender: 1 }, gender)

  return (
    <GenderContext.Provider value={{ genderState, dispatch }}>
      {children}
    </GenderContext.Provider>
  )
}

export default GenderProvider
