import HomePage from "./components/HomePage";
import Rental from "./components/Rental"
import RentalListings from "./components/RentalListings";
import Sponsors from './components/Sponsors'

export default function Home() {
  return (
    <main >
      <HomePage/>
      <Rental/>
      <RentalListings/>
      <Sponsors/>
    </main>
  );
}
