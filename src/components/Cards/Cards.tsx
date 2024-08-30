import BackCard from "./components/BackCard"
import FrontCard from "./components/FrontCard"

const Cards = () => (
  <section className="lg:grid lg:grid-cols-6 lg:gap-6 lg:grid-rows-2 static">
    <FrontCard />
    <BackCard />
  </section>
)

export default Cards