import Cards from "./components/Cards";

function App() {
  return (
    <>
      {/* General Background section */}
      <div className="lg:w-1/3 lg:h-screen w-screen h-screen bg-[url('/src/assets/images/bg-main-mobile.png')] lg:bg-[url('/src/assets/images/bg-main-desktop.png')] bg-no-repeat bg-contain lg:bg-cover md:bg-[length:100%_40%] font-space-grotesk  py-8 px-4">

        <Cards />

      </div>
    </>
  );
}

export default App;
