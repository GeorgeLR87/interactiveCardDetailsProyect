export default function Cards() {
  return (
    <>
      {/* seccion Tarjetas*/}
      <div className="lg:grid lg:grid-cols-6 lg:gap-6 lg:grid-rows-2 static">

        {/* seccion Tarjeta Frontal*/}
        <div className="bg-[url('../../assets/images/bg-card-front.png')] bg-cover w-72	h-40 md:w-96 md:h-52 rounded-lg p-6 lg:col-start-1 lg:col-end-4 lg:static absolute top-28 left-5 sm:top-32 sm:left-6 z-10">
          {/* Informacion Tarjeta Frontal */}
          <div className="text-white text-light-grayish-violet flex flex-col h-full justify-between">

            {/* Logo o ícono */}
            <div className="flex flex-row items-center ">
              <div className="w-7 h-7 md:w-10 md:h-10 rounded-full border-2 border-white bg-white	"></div>
              <div className="w-3 h-3 md:w-5 md:h-5 rounded-full border border-white ml-2 md:ml-4"></div>

            </div>

            {/* Informacion Tarjeta */}
            <div className="flex flex-col h-1/2 justify-around ">
              {/* Numero Tarjeta */}
              <div className="w-full text-lg md:text-2xl text-left tracking-widest ">
                <p>0000 0000 0000 0000</p>
              </div>

              {/* Informacion Tarjeta */}
              <div className="flex justify-between text-xs md:text-sm uppercase tracking-widest">
                <p>Jane Appleseed</p>
                <p>00/00</p>
              </div>

            </div>


          </div>

        </div>

        {/* seccion Tarjeta Posterior*/}
        <div className="bg-[url('../../assets/images/bg-card-back.png')] bg-cover w-72	h-40 md:w-96 md:h-52 rounded-lg p-6 text-white text-xs md:text-sm tracking-widest lg:col-start-2 lg:col-end-5  lg:static absolute top-5 right-5 sm:top-9 sm:right-6">
          <div className="h-full flex justify-end items-center pr-2.5 md:pr-5">
            <p>000</p>
          </div>

        </div>

      </div>
    </>
  )
}

<div className="flex flex-col lg:flex-row items-center lg:justify-between w-full max-w-6xl p-6 lg:p-12  lg:gap-10 border-4 border-orange-400 "></div>