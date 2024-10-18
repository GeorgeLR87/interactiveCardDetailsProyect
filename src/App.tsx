import { useEffect } from "react"
import Cards from "./components/Cards/Cards"
import CardSuccess from "./components/CardSuccess"
import Form from "./components/Form/Form"
import { useForm } from "./hooks/useForm"

function App() {

  const { state, isSubmitted } = useForm()

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(state));
  }, [state])

  return (
    <div className="lg:w-1/3 lg:h-screen w-screen h-screen bg-[url('/src/assets/images/bg-main-mobile.png')] lg:bg-[url('/src/assets/images/bg-main-desktop.png')] bg-no-repeat bg-contain lg:bg-cover md:bg-[length:100%_40%] font-space-grotesk py-8 px-1">
      <div className="h-screen w-screen flex flex-col justify-around px-3 md:pt-12 lg:pt-0 lg:flex-row md:items-center lg:justify-evenly ">
        <Cards />

        {isSubmitted ? (
          <CardSuccess />
        ) : (
          <Form />
        )}

      </div>
    </div>
  )
}

export default App
