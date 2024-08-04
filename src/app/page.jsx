import HomePage from "./components/HomePage";
import Rental from "./components/Rental"
import RentalListings from "./components/RentalListings";

export default function Home() {
  return (
    <main >
      <HomePage/>
      <Rental/>
      <RentalListings/>
     
    </main>
  );
}
