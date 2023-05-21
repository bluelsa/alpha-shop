import { createContext, useState } from 'react'


export const InfoContext = createContext(null)

export const InfoProvider = ({ children }) => {
  const [info, setInfo] = useState('')

  function handleNameChange(name) {
   setInfo(
    {...info,
      name: name}
   )
  }

  function handleNumberChange(number) {
   setInfo(
    {...info,
      number: number}
   )
  }

  function handleDateChange(date) {
   setInfo(
    {...info,
      date: date}
   )
  }

  function handleCodeChange(code) {
   setInfo(
    {...info,
      code: code }
   )
  }

  console.log(info)
  const value = {
    info,
    setInfo,
    handleNameChange,
    handleNumberChange,
    handleDateChange,
    handleCodeChange
  }

  return (
    <InfoContext.Provider value={value}>
     {children}
    </InfoContext.Provider>
  )
}
