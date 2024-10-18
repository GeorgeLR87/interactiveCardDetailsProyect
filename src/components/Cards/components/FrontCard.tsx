import { useForm } from "../../../hooks/useForm"


const FrontCard = () => {

    const { state } = useForm()
    const { cardNumber, cardholderName, expMonth, expYear } = state

    return (
        <div className="bg-[url('assets/images/bg-card-front.png')] bg-cover w-72 h-40 md:w-96 md:h-52 rounded-lg p-6 lg:col-start-1 lg:col-end-4 lg:static absolute top-28 left-5 sm:top-32 sm:left-6 z-10">
            <div className="text-white flex flex-col h-full justify-between">
                <div className="flex flex-row items-center">
                    <div className="w-7 h-7 md:w-10 md:h-10 rounded-full border-2 border-white bg-white" />
                    <div className="w-3 h-3 md:w-5 md:h-5 rounded-full border border-white ml-2 md:ml-4" />
                </div>
                <div className="flex flex-col h-1/2 justify-around">
                    <p className="w-full text-lg md:text-2xl text-left tracking-widest">
                        {cardNumber || '0000 0000 0000 0000'}
                    </p>
                    <div className="flex justify-between text-xs md:text-sm uppercase tracking-widest">
                        <p>{cardholderName || 'Jane Appleseed'}</p>
                        <p>{expMonth || '00'}/{expYear || '00'}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FrontCard
