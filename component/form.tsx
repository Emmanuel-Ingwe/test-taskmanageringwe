import { useForm, SubmitHandler } from "react-hook-form"
import { useState } from 'react';



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
    setInputValue("")
  }


  console.log(watch("example")) // watch input value by passing the name of it


  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit) } className="flex flex-col">
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue={inputValue} {...register("example")} className="p2 bg-black mb-3"/>


      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} className="p2 bg-black"/>
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span className="text-red-600 bg-red-900 text-xs">This field is required</span>}


      <button type="submit">ss</button>
    </form> 
  )
}