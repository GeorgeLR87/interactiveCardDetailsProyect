import bgMainDesktop from './assets/images/bg-main-desktop.png';
import bgCardFront from './assets/images/bg-card-front.png';
import bgCardBack from './assets/images/bg-card-back.png';


function codigo() {
    return (
        <>
            {/* seccion General Background */}
            <div className="border-2 border-purple-700 w-full h-screen bg-no-repeat bg-contain bg-[url('/src/assets/images/bg-main-mobile.png')] lg:bg-[url('/src/assets/images/bg-main-desktop.png')] flex justify-center items-center "
            >
                {/* Contenedor Secciones */}
                <div className=" border-2 border-orange-400 flex flex-col lg:flex-row gap-x-10 gap-y-10">


                    {/* Contenedor Tarjetas */}
                    <section className="border-2 border-blue-500 lg:w-1/2">

                        {/* Tarjeta Frontal */}
                        <div className="flex justify-start lg:pb-10 z-40">
                            <div
                                className="relative w-80 h-48 bg-no-repeat bg-cover rounded-lg"
                                style={{ backgroundImage: `url(${bgCardFront})` }}
                            >
                                {/* Aquí podrías agregar el contenido de la tarjeta frontal, como número de tarjeta, nombre, etc. */}
                                <div className="absolute bottom-4 left-4 text-white">
                                    <p className="text-lg lg:text-2xl font-semibold">0000 0000 0000 0000</p>
                                    <p className="text-sm lg:text-lg">Jane Appleseed</p>
                                    <p className="text-sm lg:text-lg">00/00</p>
                                </div>
                            </div>
                        </div>

                        {/* Tarjeta Posterior */}
                        <div className="flex justify-end">
                            <div
                                className="w-80 h-48 bg-no-repeat bg-cover rounded-lg "
                                style={{ backgroundImage: `url(${bgCardBack})` }}
                            >
                                {/* Aquí podrías agregar el contenido de la tarjeta posterior, como el CVC */}
                                <div className="absolute top-4 right-4 text-white">
                                    <p className="text-sm lg:text-lg">000</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Contenedor Formulario */}
                    <section className="border-2 border-pink-700 lg:w-1/2">
                        <form>

                            {/* Campos del formulario Nombre*/}
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="cardholder-name"
                                >
                                    Cardholder Name
                                </label>
                                <input
                                    id="cardholder-name"
                                    type="text"
                                    placeholder="e.g. Jane Appleseed"
                                    className="w-full border rounded-lg p-2"
                                />
                            </div>

                            {/* Campos del formulario Tarjeta Numero*/}
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="cardholder-name"
                                >
                                    Card Number
                                </label>
                                <input
                                    id="cardholder-name"
                                    type="number"
                                    placeholder="e.g. 1234 5678 9123 0000"
                                    className="w-full border rounded-lg p-2"
                                />

                            </div>

                            {/* Campos del formulario Tarjeta  fecha y CVC*/}
                            <div className="flex space-x-4">
                                {/* Campos del formulario Tarjeta fecha */}
                                <div className="flex-1">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        Exp. Date (MM/YY)
                                    </label>
                                    <div className="grid grid-cols-2 gap-2">
                                        <input
                                            id="exp-month"
                                            type="number"
                                            placeholder="MM"
                                            className="border rounded-lg p-2"
                                        />
                                        <input
                                            id="exp-year"
                                            type="number"
                                            placeholder="YY"
                                            className="border rounded-lg p-2"
                                        />
                                    </div>
                                </div>

                                {/* Campos del formulario Tarjeta CVC */}
                                <div className="flex-1">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        CVC
                                    </label>
                                    <input
                                        id="cvc"
                                        type="number"
                                        placeholder="e.g. 123"
                                        className="w-full border rounded-lg p-2"
                                    />
                                </div>

                            </div>
                            <button className="w-full mt-8 bg-slate-900 text-white py-3 rounded-lg font-bold text-lg hover:bg-purple-700 transition duration-200">
                                Confirm
                            </button>
                        </form>
                    </section>
                </div>
            </div>



            <div className="w-full h-screen flex items-center justify-center">
                {/* Contenedor Principal */}
                <div className="flex w-[90%] max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
                    {/* Sección de Tarjetas */}
                    <section className="w-1/2 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 p-8 relative">
                        {/* Tarjeta Frontal */}
                        <div className="absolute top-16 left-8 w-80 h-48 bg-cover bg-center bg-[url('/src/assets/images/bg-card-front.png')] rounded-lg shadow-lg flex flex-col justify-between p-4 text-white">
                            <div>
                                {/* Logo o ícono */}
                                <div className="w-10 h-10 rounded-full border-2 border-white"></div>
                            </div>
                            <div>
                                <p className="text-xl font-semibold">0000 0000 0000 0000</p>
                                <div className="flex justify-between mt-2">
                                    <p>Jane Appleseed</p>
                                    <p>00/00</p>
                                </div>
                            </div>
                        </div>

                        {/* Tarjeta Posterior */}
                        <div className="absolute bottom-16 left-20 w-80 h-48 bg-cover bg-center bg-[url('/src/assets/images/bg-card-back.png')] rounded-lg shadow-lg flex justify-end items-center p-4">
                            <p className="text-white text-lg">000</p>
                        </div>
                    </section>

                    {/* Sección de Formulario */}
                    <section className="w-1/2 p-8 flex flex-col justify-center">
                        <form className="space-y-6">
                            {/* Nombre del Tarjetahabiente */}
                            <div>
                                <label className="block text-gray-600 mb-2" htmlFor="cardholder-name">Cardholder Name</label>
                                <input
                                    id="cardholder-name"
                                    type="text"
                                    placeholder="e.g. Jane Appleseed"
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                />
                            </div>

                            {/* Número de Tarjeta */}
                            <div>
                                <label className="block text-gray-600 mb-2" htmlFor="card-number">Card Number</label>
                                <input
                                    id="card-number"
                                    type="text"
                                    placeholder="e.g. 1234 5678 9123 0000"
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                />
                            </div>

                            {/* Fecha de Expiración y CVC */}
                            <div className="flex space-x-4">
                                <div>
                                    <label className="block text-gray-600 mb-2" htmlFor="exp-month">Exp. Date (MM/YY)</label>
                                    <div className="flex space-x-2">
                                        <input
                                            id="exp-month"
                                            type="text"
                                            placeholder="MM"
                                            className="w-16 p-3 border border-gray-300 rounded-lg"
                                        />
                                        <input
                                            id="exp-year"
                                            type="text"
                                            placeholder="YY"
                                            className="w-16 p-3 border border-gray-300 rounded-lg"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-gray-600 mb-2" htmlFor="cvc">CVC</label>
                                    <input
                                        id="cvc"
                                        type="text"
                                        placeholder="e.g. 123"
                                        className="w-full p-3 border border-gray-300 rounded-lg"
                                    />
                                </div>
                            </div>

                            {/* Botón de Confirmación */}
                            <button className="w-full py-3 bg-purple-700 text-white rounded-lg hover:bg-purple-800">Confirm</button>
                        </form>
                    </section>
                </div>
            </div>




            <div className="w-full h-screen">
        {/* Secciones */}
        <div className="grid grid-cols-2 gap-8 min-h-screen content-center m-40">
          {/* Seccion Tarjetas */}
          <section className="grid grid-cols-3 gap-3 pl-4">
            {/* Tarjeta Frontal */}
            <div className="bg-[url('/src/assets/images/bg-card-front.png')] w-full bg-no-repeat h-56 max-h-full col-start-1 col-end-3">
              {/* Informacion Tarjeta Frontal */}
            <div>
                {/* Logo o ícono */}
                <div></div>
                <p>0000 0000 0000 0000</p>
                <p>Jane Appleseed</p>
                <p>00/00</p>
              </div>
            </div>

            {/* Tarjeta Posterior */}
            <div className="bg-[url('/src/assets/images/bg-card-back.png')] w-full bg-no-repeat h-56 max-h-full col-start-2 col-end-4">
              {/* Informacion Tarjeta Posterior */}
              <div>
                <p>000</p>
              </div>
            </div>
          </section>

          {/* Seccion Formulario */}
          <section className="flex items-center justify-center w-full h-full">
            <form className="">
              {/* Campos del formulario Nombre */}
              <div>
                <label htmlFor="cardholder-name">
                  Cardholder Name
                </label>
                <input
                  id="cardholder-name"
                  type="text"
                  placeholder="e.g. Jane Appleseed"
                />
              </div>

              {/* Campos del formulario Tarjeta Número */}
              <div>
                <label htmlFor="card-number">
                  Card Number
                </label>
                <input
                  id="card-number"
                  type="number"
                  placeholder="e.g. 1234 5678 9123 0000"
                />
              </div>

              {/* Campos del formulario Tarjeta fecha y CVC */}
              <div>
                {/* Campos del formulario Tarjeta fecha */}
                <div>
                  <label>
                    Exp. Date (MM/YY)
                  </label>
                  <div>
                    <input
                      id="exp-month"
                      type="number"
                      placeholder="MM"
                    />
                    <input
                      id="exp-year"
                      type="number"
                      placeholder="YY"
                    />
                  </div>
                </div>

                {/* Campos del formulario Tarjeta CVC */}
                <div>
                  <label>
                    CVC
                  </label>
                  <input
                    id="cvc"
                    type="number"
                    placeholder="e.g. 123"
                  />
                </div>
              </div>

              {/* Botón */}
              <button>
                Confirm
              </button>
            </form>
          </section>
        </div>
      </div>



        </>

{/* seccion General Background */}
<div className="lg:w-1/3 lg:h-screen w-screen h-screen bg-[url('/src/assets/images/bg-main-mobile.png')] lg:bg-[url('/src/assets/images/bg-main-desktop.png')] bg-no-repeat bg-contain lg:bg-cover md:bg-[length:100%_40%] font-space-grotesk  ">

{/* seccion Tarjeta Frontal*/}
<div className="bg-[url('/src/assets/images/bg-card-front.png')] w-72	h-36 md:w-96 md:h-56 rounded-lg p-5">
  {/* Informacion Tarjeta Frontal */}
  <div className="text-white grid content-around grid-rows-5">
    {/* Logo o ícono */}
    <div className="flex items-center row-start-1	row-end-2">
      <div className="w-10 h-10 rounded-full border-2 border-white bg-white	"></div>
      <div className="w-5 h-5 rounded-full border border-white ml-4"></div>

    </div>

    {/* Numero Tarjeta */}
    <div className="w-full row-start-4 text-2xl	row-end-4 text-center tracking-widest ">
      <p>0000 0000 0000 0000</p>
    </div>

    {/* Informacion Tarjeta */}
    <div className="row-start-5	row-end-6 text-sm">
      <div className="flex justify-between">
        <p>Jane Appleseed</p>
        <p>00/00</p>
      </div>
    </div>

  </div>

</div>

</div>

    );






}

export default codigo;
