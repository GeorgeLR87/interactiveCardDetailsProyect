import Cards from "./components/Cards/Cards";
import Form from "./components/Form";

function App() {
  return (
    <div className="lg:w-1/3 lg:h-screen w-screen h-screen bg-[url('/src/assets/images/bg-main-mobile.png')] lg:bg-[url('/src/assets/images/bg-main-desktop.png')] bg-no-repeat bg-contain lg:bg-cover md:bg-[length:100%_40%] font-space-grotesk py-8 px-1">
      <div className="h-screen w-screen flex flex-col justify-around px-3 lg:flex-row md:items-center lg:justify-evenly">

        <Cards />
        <Form />

      </div>

    </div>
  )
}

export default App;
