import { useForm, SubmitHandler } from "react-hook-form"
import { useState, ChangeEvent } from 'react';



type Inputs = {
  example: string
  exampleRequired: string
}


export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  const [inputValue, setInputValue] = useState("")

  const handleInputs = () => {
    handleSubmit
    setInputValue("")
  }


  console.log(watch("example")) // watch input value by passing the name of it


  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit) }>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue={inputValue} {...register("example")} />


      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}


      <input type="submit" onClick={handleInputs}/>
    </form>
  )
}