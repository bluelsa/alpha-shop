import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import { useContext } from 'react'
import { StepContext } from './StepContext'

export default function Form() {
  const {step} = useContext(StepContext)

  if (step === 1) return <Step1 />;
  else if (step === 2) return <Step2 />;
  else return <Step3 />
}