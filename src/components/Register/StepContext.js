import { createContext, useState } from 'react'

export const StepContext = createContext(null)

export const StepProvider = ({ children }) => {
  const [step, setStep] = useState(1)

  function handlePrevStep() {
    step > 1 && setStep(step - 1);
  }
  function handleNextStep() {
    step < 3 && setStep(step + 1);
  }

  const value = {
    step,
    setStep,
    handlePrevStep,
    handleNextStep
  }

  return (
    <StepContext.Provider value={value}>
      { children }
    </StepContext.Provider>
  )
}
