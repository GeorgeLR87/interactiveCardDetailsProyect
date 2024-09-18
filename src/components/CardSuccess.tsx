const CardSuccess = () => {
  return (
    <section className="flex flex-col justify-center items-center h-screen md:w-1/2 lg:w-1/5 pt-11 md:pt-28 lg:pt-0">
      <div className="w-14 h-14 bg-gradient-to-r from-gradient-blue-icon to-gradient-purple-icon rounded-full flex items-center justify-center lg:py-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="white"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="square"
            strokeLinejoin="miter"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>

      <h2 className="text-xl  text-deep-violet mt-4 tracking-widest">THANK YOU!</h2>
      <p className="text-sm text-purplish-grey mt-2">We’ve added your card details</p>

      <button
        className="w-full mt-9 bg-deep-violet text-white py-3 rounded-lg text--base hover:bg-dark-grayish-violet transition duration-200"
      >
        Continue
      </button>
    </section>
  )
}

export default CardSuccess