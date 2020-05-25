import React, { useReducer, createContext, useEffect } from "react"

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

// const initialGenderState = {
//   gender: 1,
// }

export const GenderContext = createContext()

const GenderProvider = ({ children }) => {
  let gender = () => {
    if (typeof window !== `undefined`) {
      const gender = Number(
        window.localStorage.getItem("chiro-itterbeek-gender") || 1
      )
      return { gender }
    }
    // if window is undefined (during the build or when a refresh occurs)
    else {
      return 1
    }
  }
  const [genderState, dispatch] = useReducer(reducer, { gender: 1 }, gender)

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     window.localStorage.setItem("chiro-itterbeek-gender", genderState.gender)
  //   }
  // }, [genderState.gender])

  return (
    <GenderContext.Provider value={{ genderState, dispatch }}>
      {children}
    </GenderContext.Provider>
  )
}

export default GenderProvider
