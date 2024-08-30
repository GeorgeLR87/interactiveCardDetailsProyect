import BackCard from "./components/BackCard"
import FrontCard from "./components/FrontCard"

export default function Cards() {
  return <section className="lg:grid lg:grid-cols-6 lg:gap-6 lg:grid-rows-2 static">
    <FrontCard />
    <BackCard />
  </section>
}