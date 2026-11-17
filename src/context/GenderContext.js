import React, { useReducer, createContext, useEffect, useRef } from "react"

// 0 = not chosen yet, 1 = Jokonta (jongens), 2 = Allegro (meisjes)
const STORAGE_KEY = "chiro-itterbeek-gender"

function reducer(genderState, action) {
  switch (action.type) {
    case "HYDRATE":
      return { ...genderState, gender: action.gender }
    case "TOGGLE_GENDER":
      return { ...genderState, gender: genderState.gender === 1 ? 2 : 1 }
    case "TOGGLE_MALE":
      return { ...genderState, gender: 1 }
    case "TOGGLE_FEMALE":
      return { ...genderState, gender: 2 }
    default:
      throw new Error("Bad Action Type")
  }
}

const readStoredGender = () => {
  try {
    const stored = Number(window.localStorage.getItem(STORAGE_KEY) || 0)
    return [0, 1, 2].includes(stored) ? stored : 0
  } catch {
    return 0
  }
}

export const GenderContext = createContext()

const GenderProvider = ({ children }) => {
  // Same initial state on server and client so hydration matches;
  // the stored choice is applied right after mount.
  const [genderState, dispatch] = useReducer(reducer, { gender: 0 })
  const hydrated = useRef(false)

  useEffect(() => {
    dispatch({ type: "HYDRATE", gender: readStoredGender() })
  }, [])

  useEffect(() => {
    // skip the very first run (before the stored value has been applied)
    if (!hydrated.current) {
      hydrated.current = true
      return
    }
    if (genderState.gender === 0) return
    try {
      window.localStorage.setItem(STORAGE_KEY, genderState.gender)
    } catch {
      // storage unavailable (private mode) — choice just won't persist
    }
  }, [genderState.gender])

  return (
    <GenderContext.Provider value={{ genderState, dispatch }}>
      {children}
    </GenderContext.Provider>
  )
}

export default GenderProvider
