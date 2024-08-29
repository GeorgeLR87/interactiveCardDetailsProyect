export default function Form() {
    return (
        <>
            {/* Sección del Formulario */}
            <div className="lg:order-2 lg:w-2/5 mt-8 lg:mt-0 border-4 border-green-500"> {/* ya esta */}
                <form className="bg-white p-8 rounded-lg shadow-lg">
                    <h1 className="text-2xl font-bold mb-6 text-center">Formulario</h1>
                    {/* Campos del formulario */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardholder-name">
                            Cardholder Name
                        </label>
                        <input
                            id="cardholder-name"
                            type="text"
                            placeholder="e.g. Jane Appleseed"
                            className="w-full p-3 border rounded-lg"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="card-number">
                            Card Number
                        </label>
                        <input
                            id="card-number"
                            type="text"
                            placeholder="e.g. 1234 5678 9123 0000"
                            className="w-full p-3 border rounded-lg"
                        />
                    </div>
                    <div className="flex space-x-4">
                        <div className="flex-1">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="exp-date">
                                Exp. Date (MM/YY)
                            </label>
                            <input
                                id="exp-date"
                                type="text"
                                placeholder="MM / YY"
                                className="w-full p-3 border rounded-lg"
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cvc">
                                CVC
                            </label>
                            <input
                                id="cvc"
                                type="text"
                                placeholder="e.g. 123"
                                className="w-full p-3 border rounded-lg"
                            />
                        </div>
                    </div>
                    <button className="w-full mt-6 bg-purple-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-purple-700 transition duration-200">
                        Confirm
                    </button>
                </form>
            </div>
        </>
    )
}
