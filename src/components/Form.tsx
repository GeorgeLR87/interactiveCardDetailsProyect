
const Form = () => {
    return (
        <section className="flex flex-col justify-center items-center mx-2 md:mt-14 lg:mt-0">
            <div className="w-full max-w-sm">

                <div className="mb-4">
                    <label
                        htmlFor="cardholder-name"
                        className="block uppercase text-sm text-very-dark-violet mb-1"
                    >
                        Cardholder Name
                    </label>
                    <input
                        id="cardholder-name"
                        type="text"
                        placeholder="e.g. Jane Appleseed"
                        className="w-full p-2 border rounded-lg placeholder:text-light-grayish-violet focus:border-purple-700 focus:outline-none"
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="card-numer"
                        className="block uppercase text-sm text-very-dark-violet mb-1"
                    >
                        Card Number
                    </label>
                    <input
                        id="card-numer"
                        type="number"
                        placeholder="e.g. 1234 5678 9123 0000"
                        className="w-full p-2 border rounded-lg placeholder:text-light-grayish-violet focus:border-purple-700 focus:outline-none"
                    />
                </div>

                <div className="flex flex-row justify-between gap-4 w-full">
                    <div className="mb-4">
                        <label
                            htmlFor="exp-month"
                            className="block uppercase text-sm text-very-dark-violet mb-1"
                        >
                            Exp. Date (MM/YY)
                        </label>
                        <div className="flex flex-row gap-2">
                            <input
                                id="exp-month"
                                type="number"
                                placeholder="MM"
                                className="w-full p-2 border rounded-lg placeholder:text-light-grayish-violet focus:border-purple-700 focus:outline-none"
                            />
                            <input
                                id="exp-month"
                                type="number"
                                placeholder="YY"
                                className="w-full p-2 border rounded-lg placeholder:text-light-grayish-violet focus:border-purple-700 focus:outline-none"
                            />
                        </div>
                    </div>

                    <div className="mb-4 w-full">
                        <label
                            htmlFor="cvc"
                            className="block uppercase text-sm text-very-dark-violet mb-1"
                        >
                            CVC
                        </label>
                        <input
                            id="cvc"
                            type="number"
                            placeholder="e.g. 123"
                            className="w-full p-2 border rounded-lg placeholder:text-light-grayish-violet focus:border-purple-700 focus:outline-none"
                        />
                    </div>
                </div>

                <button className="w-full mt-6 bg-very-dark-violet text-white py-3 rounded-lg text--base hover:bg-dark-grayish-violet transition duration-200">
                    Confirm
                </button>

            </div>
        </section>
    )
}

export default Form
