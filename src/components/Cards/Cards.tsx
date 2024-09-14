import { FormData } from "../../types/FormData";
import BackCard from "./components/BackCard";
import FrontCard from "./components/FrontCard";

type FormProps = {
  state: FormData;
};

const Cards = ({ state }: FormProps) => (
  <section className="lg:grid lg:grid-cols-5 lg:gap-6 lg:grid-rows-2 static">
    <FrontCard
      cardholderName={state.cardholderName}
      cardNumber={state.cardNumber}
      expMonth={state.expMonth}
      expYear={state.expYear}
    />
    <BackCard cvc={state.cvc} />
  </section>
);

export default Cards;
