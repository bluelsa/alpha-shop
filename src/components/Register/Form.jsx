import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'

export default function Form({step}) {
  if (step === 1) return <Step1 />;
  else if (step === 2) return <Step2 />;
  else return <Step3 />;
}